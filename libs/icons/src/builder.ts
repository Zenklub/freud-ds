import * as path from 'path';
import * as fs from 'fs';
import chalk from 'chalk';
import { logSymbols } from './utils';
import { GenerateIconography } from './generate-iconography';


export class Builder {
  private fonts = [
    { fontName: 'freud-icons', source: 'icon' },
    { fontName: 'freud-emoji', source: 'emoji' },
    { fontName: 'freud-brand', source: 'brand' },
  ];

  private async generateIconography() {
    for(const { fontName, source } of this.fonts) {
      const generator = new GenerateIconography(fontName, source)
      await generator.generate();
    }
  }

  async cleanUp(recreate = false) {
    const folders = ['freud-icons', 'freud-emoji', 'freud-brand'];
    const files = ['index.js', 'index.d.ts'];

    // Cleaning previous builds and recreate folders
    for(const folder of folders) {
      fs.rmSync(path.resolve(folder), { recursive: true, force: true });
      recreate && fs.mkdirSync(path.resolve(folder));
    }
    // Cleaning previous files
    for(const file of files) {
      fs.rmSync(path.resolve(file), { recursive: true, force: true });
    }
  }

  async build() {
    try {
      await this.cleanUp();
      await this.generateIconography();

      console.log(chalk.bold.green('\nBuild completed successfully!'));
    } catch(e) {
      console.error(logSymbols.error, e);
    }
  }
}
