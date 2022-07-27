import * as path from 'path';
import * as fs from 'fs';
import isCI from 'is-ci';
import chalk from 'chalk';


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
      let curSource = path.join(source, file);
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
    process.stdout.moveCursor(0, -1) // up one line
    process.stdout.clearLine(1) // from cursor to end
  }
}

export function progress(position: number, total: number) {
  if (isCI) return;
  const scale = position / total;

  const percentageStrSize = 7;
  let percentageStr = `${Math.round(scale * 100)}%`
  percentageStr = chalk.bold(`${Array(percentageStrSize - percentageStr.length).join(' ')}${percentageStr}`)

  const columns = process.stdout.columns - percentageStrSize;

  const size = Math.round(scale * columns);
  const rest = columns - size;

  const chars = chalk.yellow(Array(size ?? columns).join("\u2588"));
  const restChars = rest > 0 ? chalk.gray(Array(rest).join("\u2588")) : '';

  return `${chars}${restChars}${percentageStr}`;
}
