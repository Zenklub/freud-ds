import * as path from 'path';
import * as fs from 'fs';
import isCI from 'is-ci';
import chalk from 'chalk';
import * as util from 'util';
import * as readline from 'readline'

import { exec as childProcessExec } from 'child_process';

export const executeCommand = util.promisify(childProcessExec);

let terminalSize = {
  columns: 0,
  rows: 0
};

export async function prepareEnvironment() {
  if (!terminalSize.columns) {
    const {stdout, stderr} = await executeCommand('term-size');
    if (stderr) {
      console.error(stderr);
      process.exit(1);
    }
    const [termColumns,termRows] = stdout.split("\n");
    terminalSize = {
      columns: Number.parseInt(termColumns, 10),
      rows: Number.parseInt(termRows, 10)
    }
  }
}

export function throwSizeError(name: string, value: string, unitType: string) {
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;
}

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

export function copyFolderRecursiveSync(source: string, target: string, includingFolder = false) {
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
        copyFolderRecursiveSync(curSource, targetFolder);
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

export async function progress(position: number, total: number) {
  if (isCI) return;
  const scale = position / total;

  const percentageStrSize = 7;
  let percentageStr = `${Math.round(scale * 100)}%`
  percentageStr = chalk.bold(`${Array(percentageStrSize - percentageStr.length).join(' ')}${percentageStr}`)

  const columns = terminalSize.columns - percentageStrSize;
  const size = Math.round(scale * columns);
  const rest = columns - size;

  const chars = chalk.yellow(Array(size ?? columns).join("\u2588"));
  const restChars = rest > 0 ? chalk.gray(Array(rest).join("\u2588")) : '';

  console.log(`${chars}${restChars}${percentageStr}`);
}
