import * as path from 'path';
import * as fs from 'fs';

function copyFileSync(source: string, target: string) {
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

export function getDirectories(folder: string): string[] {
  return fs.readdirSync(folder)
    .filter(function (file) {
      return fs.statSync(`${folder}/${file}`).isDirectory();
    })
    .map((file) => path.join(folder, file))
}
