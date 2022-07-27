import * as StyleDictionary from 'style-dictionary';
import * as path from 'path';
import * as fs from 'fs';
import isCI from 'is-ci';
import chalk from 'chalk';
import { FontAssetType, generateFonts, OtherAssetType, RunnerOptions } from 'fantasticon';
import { throwSizeError, copyFolderRecursiveSync, createDir, clearLines, logSymbols, progress, executeCommand, prepareEnvironment } from './utils';



export class Builder {

  // Steps ---------------
  async createAssetsStep() {

    // REGISTER THE CUSTOM TRANSFORMS
    console.log(chalk.bold.yellow('> Generating tokens'));

    StyleDictionary.registerTransform({
      name: 'size/object', // notice: the name is an override of an existing predefined method (yes, you can do it)
      type: 'value',
      matcher: function(token) {
        if (token.path.includes('shadow')) {
          return false;
        }
        return token.value.toString()?.includes('px') || token.value.toString()?.includes('%');
      },
      transformer: function(token) {
        const val = parseFloat(token.value);
        if (isNaN(val)) throwSizeError(token.name, token.value, "object");

        return token.value.toString()?.includes('px') ? val : val / 100;
      }
    });

    // APPLY THE CONFIGURATION
    // IMPORTANT: the registration of custom transforms
    // needs to be done _before_ applying the configuration
    const StyleDictionaryExtended = StyleDictionary.extend(path.resolve('config.json'));


    // FINALLY, BUILD ALL THE PLATFORMS
    StyleDictionaryExtended.buildAllPlatforms();

    // Copy grid styles
    copyFolderRecursiveSync(path.resolve('src/tokens/grid'), path.resolve('style/scss'));

    console.log('\n');
  }


  async convertSvgToFontStep(fontName: string, svgFolder: string) {
    console.log(chalk.bold.yellow(`> Transforming ${svgFolder} into font (${fontName})\n`));
    const sourceIconsDir = path.resolve(`assets/${svgFolder}`);
    const minifiedIconsDir = path.resolve(`assets/minified/${svgFolder}`);
    const fontIconsDir = path.resolve(`assets/fonts/${svgFolder}`);

    try {

      createDir(minifiedIconsDir);
      createDir(fontIconsDir);

      console.log(`[1/2] Clearing svgs\n\n`);
      const files = await fs.promises.readdir(sourceIconsDir);
      const numOfIcons = files.length;
      let count = 0;
      for(const file of files) {
        const fromPath = path.join(sourceIconsDir, file);
        const stat = await fs.promises.stat(fromPath);

        if(stat.isFile()) {
          const toPath = path.join(minifiedIconsDir, file);

          const { stderr } = await executeCommand(`picosvg ${fromPath} > ${toPath}`);
          clearLines(2);
          if (stderr) {
            console.error(logSymbols.error, stderr)
            return;
          }
          count++;
          if (!isCI) progress(count, numOfIcons)
          console.log(`[${count}/${numOfIcons}]`, file);
        }
      }

      clearLines(2);
      console.log(logSymbols.success, chalk.bold.green('Done\n'));


      console.log(`[2/2] Converting to font`);
      const iconsConfig: RunnerOptions = {
        name: fontName,
        inputDir: path.resolve(`assets/minified/${svgFolder}`),
        outputDir: path.resolve(`assets/fonts/${svgFolder}`),
        fontTypes: [FontAssetType.TTF, FontAssetType.WOFF, FontAssetType.WOFF2],
        // assetTypes: ['ts', 'css', 'sass', 'json', 'html'],
        assetTypes: [OtherAssetType.TS, OtherAssetType.CSS, OtherAssetType.SASS, OtherAssetType.JSON, OtherAssetType.HTML],
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
      console.log(logSymbols.success, chalk.bold.green('Done\n\n'));
    } finally {
      fs.rmSync(minifiedIconsDir, { recursive: true, force: true });
    }
  }

  async run() {

    try {
      await prepareEnvironment();

      this.createAssetsStep();

      const fonts = [
        { fontName: 'freud-icons', svgFolder: 'icon' },
        { fontName: 'freud-emoji', svgFolder: 'emoji' },
        { fontName: 'freud-brand', svgFolder: 'brand' },
      ]
      for(const config of fonts) {
        await this.convertSvgToFontStep(config.fontName, config.svgFolder);
      }

      console.log(chalk.bold.green('Build completed successfully!'));
    } catch(e) {
      console.error(logSymbols.error, e);
    }
  }
}
