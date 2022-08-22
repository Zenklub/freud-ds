import * as path from 'path';
import * as fs from 'fs';
import isCI from 'is-ci';
import chalk from 'chalk';
import * as util from 'util';
import * as readline from 'readline'
import { exec as childProcessExec } from 'child_process';
import { execSync } from 'child_process';

export const executeCommand = util.promisify(childProcessExec);

const [termColumns,termRows] = execSync('term-size', {
  encoding: 'utf8'
}).split("\n");

const terminalSize = {
  columns: Number.parseInt(termColumns, 10),
  rows: Number.parseInt(termRows, 10)
}
const MAX_COL_PROGRESS = 100;

export function copyFileSync(source: string, target: string) {
  let targetFile = target;
  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source));
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

export function copyFolderRecursiveSync(source: string, target: string, options?: {includingFolder: boolean}) {
  const { includingFolder = false } = options || {};
  let files = [];

  // Check if folder needs to be created or integrated
  const targetFolder = includingFolder ? path.join(target, path.basename(source)) : target;
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    files.forEach(function (file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder, { includingFolder: true });
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

export const logSymbols = {
  info: chalk.blue('ℹ'),
  success: chalk.green('✔'),
  warning: chalk.yellow('⚠'),
  error: chalk.red('✖')
};

// Helpers
export function createDir(dir: string) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function clearLines(numOfLines = 1) {
  if (isCI) return;
  for(let i=0; i<numOfLines; i++) {
    readline.moveCursor(process.stdout, 0, -1) // up one line
    readline.clearLine(process.stdout, 1) // from cursor to end
  }
}
export class ProgressBar {
  private total = 100;
  private history: ({position: number, info?: string[]})[] = [];

  private get numOfColumns() {
    const columns = process.stdout?.columns ?? terminalSize.columns
    return Math.min(MAX_COL_PROGRESS, columns);
  }

  setTotal(total: number) {
    this.total = total;
    return this;
  }

  reset() {
    this.history = [];
    return this;
  }

  clear() {
    if (!isCI && this.history.length) {
      const { info = [] } = this.history[this.history.length - 1];
      const lines = info.length ? 2 : 1;
      clearLines(lines);
    }
    return this;
  }

  update(position: number, ...info: string[]) {
    const scale = position / this.total;
    const percentageStr = `${Math.round(scale * 100)}%`
    const spaceBetween = Array(this.percentageSize - percentageStr.length).join(' ')

    if (isCI) {
      console.log(chalk.bold.green(percentageStr), spaceBetween, ...info)
    } else {
      this.clear();

      const columns = this.numOfColumns - this.percentageSize;
      const size = Math.round(scale * columns);
      const rest = columns - size;

      const chars = chalk.yellow(Array(size ?? columns).join("\u2588"));
      const restChars = rest > 0 ? chalk.gray(Array(rest).join("\u2588")) : '';

      console.log(`${chars}${restChars}${spaceBetween}${percentageStr}`);
      info && console.log(...info);
    }

    this.history.push({ position, info });

    return this;
  }

  private get percentageSize() {
    return isCI ? 5 : 7;
  }
}
