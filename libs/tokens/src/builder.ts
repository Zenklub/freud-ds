import * as path from 'path';
import * as fs from 'fs';
import chalk from 'chalk';
import { StyleTokensBuilder } from './tokens-builder';
import * as Dictionaries from './tokens-builder/style-config';
import { copyFolderRecursiveSync, getDirectories } from './utils';

const logSymbols = {
  info: chalk.blue('ℹ'),
  success: chalk.green('✔'),
  warning: chalk.yellow('⚠'),
  error: chalk.red('✖')
};

export class Builder {
  private tokensBuilder = new StyleTokensBuilder();

  private get assetsFoldersPath() {
    return path.resolve('./src/assets');
  }

  private get assetsFontsFoldersPath() {
    return path.resolve('./src/assets/fonts');
  }

  private get tmpFolderPath() {
    return path.resolve('./tmp');
  }

  private get rootFolderPath() {
    return path.resolve('./');
  }

  private get iosFontsAssetFolder() {
    return path.resolve('../../ios/FreudDSTheme/Fonts');
  }

  private get storybookFontsAssetFolder() {
    return path.resolve('../../.storybook/assets/fonts');
  }

  private get androidFontsAssetFolder() {
    return path.resolve('../../android/freud-ds-theme/src/main/res/font');
  }

  private copyResources() {
    const ttfOnlyFilter = (file: string) => /\.ttf$/gi.test(file)
    const transformResourceName = (name: string) => name.toLowerCase().replace(/[^a-z0-9_.]+/gi, '_')
    copyFolderRecursiveSync(this.assetsFontsFoldersPath, this.iosFontsAssetFolder, { includingFolder: false, filter: ttfOnlyFilter });
    copyFolderRecursiveSync(this.assetsFontsFoldersPath, this.androidFontsAssetFolder, { includingFolder: false, filter: ttfOnlyFilter, fileNameTransform: transformResourceName });
    copyFolderRecursiveSync(this.assetsFontsFoldersPath, this.androidFontsAssetFolder, { includingFolder: false, filter: ttfOnlyFilter, fileNameTransform: transformResourceName });
    copyFolderRecursiveSync(this.assetsFontsFoldersPath, this.storybookFontsAssetFolder, { includingFolder: false });
  }

  private async buildStyleTokens() {
    console.log(chalk.bold.yellow('> Generating tokens'));

    // Creates tokens
    for(const dictionary of Object.values(Dictionaries)) {
      this.tokensBuilder.build(dictionary);
    }

    // Extracts temporary files to root
    copyFolderRecursiveSync(this.tmpFolderPath, this.rootFolderPath, { includingFolder: false });
    fs.rmSync(this.tmpFolderPath, { recursive: true, force: true });
  }

  async cleanUp(recreate = false) {
    const folders = ['css', 'scss', this.tmpFolderPath];
    const files = ['index.js', 'index.d.ts'];

    // Cleans previous builds and recreate folders
    for(const folder of folders) {
      fs.rmSync(path.resolve(folder), { recursive: true, force: true });
      recreate && fs.mkdirSync(path.resolve(folder));
    }

    // Cleans copied assets folders
    const assetsFolders = getDirectories(this.assetsFoldersPath);
    for(const folder of assetsFolders) {
      const rootReferenceFolder = path.join(this.rootFolderPath, folder.replace(this.assetsFoldersPath, ''));
      const iosReferenceFolder = path.join(this.rootFolderPath, folder.replace(this.iosFontsAssetFolder, ''));
      const androidReferenceFolder = path.join(this.rootFolderPath, folder.replace(this.androidFontsAssetFolder, ''));
      fs.rmSync(path.resolve(rootReferenceFolder), { recursive: true, force: true });
      fs.rmSync(path.resolve(iosReferenceFolder), { recursive: true, force: true });
      fs.rmSync(path.resolve(androidReferenceFolder), { recursive: true, force: true });
    }

    // Cleans previous files
    for(const file of files) {
      fs.rmSync(path.resolve(file), { recursive: true, force: true });
    }
  }

  async build() {
    try {
      await this.cleanUp(true);
      await this.buildStyleTokens();

      // Copies assets folders
      this.copyResources();

      console.log(chalk.bold.green('\nBuild completed successfully!'));
    } catch(e) {
      console.error(logSymbols.error, e);
    }
  }
}
