import * as path from 'path';
import * as fs from 'fs';

function copyFileSync(source: string, target: string, fileNameTransform?: (name: string) => string) {
  let targetFile = target;
  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      const baseName = path.basename(source)
      targetFile = path.join(target, fileNameTransform?.(baseName) || baseName);
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

export function copyFolderRecursiveSync(source: string, target: string, options?: { includingFolder?: boolean, filter?: (file: string, index: number) => boolean, fileNameTransform?: (name: string) => string }) {
  const { includingFolder = false, filter, fileNameTransform } = options || {};
  let files = [];

  // Check if folder needs to be created or integrated
  const targetFolder = includingFolder ? path.join(target, path.basename(source)) : target;
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder);
  }
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source);
    if (filter) files = files.filter(filter)
    files.forEach(function (file) {
      const curSource = path.join(source, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder, { includingFolder: true, filter, fileNameTransform });
      } else {
        copyFileSync(curSource, targetFolder, fileNameTransform);
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
