import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'src/icon');
const outputFolder = path.join(__dirname, 'src/iconList');

console.log('sourceDir', sourceDir);
console.log('outputFolder', outputFolder);

console.log('Generating JSON file at ', outputFolder);
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Não foi possível ler a pasta de ícones:', err);
    return;
  }

  let iconNames = [];

  files.forEach(file => {
    if (file.endsWith('.svg')) {
      const iconName = path.basename(file, '.svg');
      iconNames.push(iconName);
    }
  });
  fs.writeFile(path.join(outputFolder, 'icons.json'), JSON.stringify(iconNames), (err) => {
    if (err) {
      console.error('Não foi possível escrever o arquivo JSON:', err);
      return;
    }
    console.log('Arquivo JSON gerado com sucesso!');
  });

  fs.writeFile(path.join(outputFolder, 'icons.ts'), generateIconString(iconNames), (err) => {
    if (err) {
      console.error('Não foi possível escrever o arquivo TS:', err);
      return;
    }
    console.log('Arquivo TS gerado com sucesso!');
  });

});

function generateIconString(iconNames) {
  return `export const icons = ${JSON.stringify(iconNames)} as const;\n`;
}
