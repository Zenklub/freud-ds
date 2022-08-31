import * as path from 'path';
import * as fs from 'fs';
import chalk from 'chalk';
import { copyFolderRecursiveSync, logSymbols } from './utils';
import { IconographyGenerator } from './generators/iconography.generator';
import { AndroidIconographyGenerator } from './generators/android.generator';


export class Builder {
  private _licenseContents: string[] = [];

  private get licenseContents() {
    if (!this._licenseContents.length) {
      const licensePath = path.resolve('../../LICENSE');
      this._licenseContents = fs.readFileSync(licensePath, 'utf8').split('\n');
    }
    return this._licenseContents;
  }

  private async generateIconography() {
    const generator = new IconographyGenerator('freud-icons', 'icon')
    await generator.generate();

    await AndroidIconographyGenerator
      .with(generator)
      .setLicenseText(this.licenseContents)
      .setResource('brand', 'freud-brand')
      .setResource('emoji', 'freud-emoji')
      .generate()
  }

  private async copyResources() {
    const brand = path.resolve(`../../resources/brand`);
    const emoji = path.resolve(`../../resources/emoji`);

    copyFolderRecursiveSync(brand, 'freud-brand');
    copyFolderRecursiveSync(emoji, 'freud-emoji');
  }

  async cleanUp(recreate = false) {
    const folders = ['freud-icons', 'freud-emoji', 'freud-brand', '../../android/freud-ds-icons/src/main/res/values', '../../android/freud-ds-icons/src/main/res/font'];
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
      await this.cleanUp(true);
      await this.copyResources();
      await this.generateIconography();

      console.log(chalk.bold.green('\nBuild completed successfully!'));
    } catch(e) {
      console.error(logSymbols.error, e);
    }
  }
}
