import * as path from 'path';
import * as fs from 'fs';
import chalk from 'chalk';
import { FontAssetType, generateFonts, OtherAssetType, RunnerOptions } from 'fantasticon';
import { createDir, logSymbols, executeCommand, ProgressBar } from '../utils';

export class IconographyGenerator {
  private progress = new ProgressBar();
  private sourceIconsDir: string;
  private destinationDir: string;
  private destinationSvgDir: string;
  private _charsMap: Record<string, string> = {};

  constructor(private fontName: string, private sourceFolder: string) {
    this.sourceIconsDir = path.resolve(`../../resources/${sourceFolder}`);
    this.destinationDir = path.resolve(`./${fontName}`);
    this.destinationSvgDir = path.resolve(`./${fontName}/svg`);
  }

  public getDestinationFolder() {
    return this.destinationDir
  }

  public getCharsMap() {
    return this._charsMap
  }

  public getFontName() {
    return this.fontName
  }

  public async generate() {
    console.log(chalk.bold.yellow(`> Transforming ${this.sourceFolder} into font (${this.fontName})\n`));

    // await this.clearFont();
    // await this.convertSvgToFontStep();

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    this._charsMap = require(path.resolve(this.destinationDir, `${this.fontName}.json`));
  }

  private async clearFont() {
    console.log(chalk.bold('Optimizing SVGs'));

    createDir(this.destinationSvgDir);
    const files = await fs.promises.readdir(this.sourceIconsDir);
    const numOfIcons = files.length;

    this.progress.reset().setTotal(numOfIcons);

    let position = 0;
    for(const file of files) {
      const fromPath = path.join(this.sourceIconsDir, file);
      const stat = await fs.promises.stat(fromPath);

      if(stat.isFile()) {
        const toPath = path.join(this.destinationSvgDir, file);

        const { stderr } = await executeCommand(`picosvg ${fromPath} > ${toPath}`);
        if (stderr) {
          console.error(logSymbols.error, stderr)
          return;
        }
        position++;
        this.progress.update(position, `[${position}/${numOfIcons}]`, file)
      }
    }

    this.progress.clear();
    console.log(logSymbols.success, chalk.bold.green('Done\n'));
  }

  async convertSvgToFontStep() {
    console.log(chalk.bold('Creating font'));

    const iconsConfig: RunnerOptions = {
      name: this.fontName,
      inputDir: this.destinationSvgDir,
      outputDir: this.destinationDir,
      fontTypes: [FontAssetType.TTF, FontAssetType.WOFF, FontAssetType.WOFF2],
      // assetTypes: ['ts', 'css', 'sass', 'json', 'html'],
      assetTypes: [OtherAssetType.TS, OtherAssetType.CSS, OtherAssetType.SCSS, OtherAssetType.JSON, OtherAssetType.HTML],
      fontsUrl: '.',
      formatOptions: {
        json: {
          indent: 2
        },
        ts: {
          // ['enum', 'constant', 'literalId', 'literalKey']
          types: ['constant', 'literalId'],
          singleQuotes: true
        }
      },
      // Customize generated icon IDs (unavailable with `.json` config file)
      getIconId: ({
        basename, // `string` - Example: 'foo';
        // relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
        // absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
        // relativeFilePath, // `string` - Example: 'foo.svg'
        // index // `number` - Example: `0`
      }) => basename // 'icon-foo'
    }
    createDir(iconsConfig.outputDir);

    await generateFonts(iconsConfig);
    console.log(logSymbols.success, chalk.bold.green('Done\n'));
  }
}
