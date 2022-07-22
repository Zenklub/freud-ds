const StyleDictionary = require('style-dictionary');
const path = require('path');
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const exec = util.promisify(require('child_process').exec);
const { generateFonts } = require('fantasticon')


// Helpers
function createDir(dir) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }
}

const clearLines = (numOfLines = 1) => {
  for(let i=0; i<numOfLines; i++) {
    process.stdout.moveCursor(0, -1) // up one line
    process.stdout.clearLine(1) // from cursor to end
  }
}

const progress = (position, total) => {
  const scale = position / total;

  const percStrSize = 7;
  let percStr = `${Math.round(scale * 100)}%`
  percStr = chalk.bold(`${Array(percStrSize - percStr.length).join(' ')}${percStr}`)

  const columns = process.stdout.columns - percStrSize;

  const size = Math.round(scale * columns);
  const rest = columns - size;

  const chars = chalk.yellow(Array(size ?? columns).join("\u2588"));
  const restChars = rest > 0 ? chalk.gray(Array(rest).join("\u2588")) : '';

  return `${chars}${restChars}${percStr}`;
}


// Steps ---------------

async function createAssetsStep() {

  // REGISTER THE CUSTOM TRANFORMS

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
    transformer: function(token, options) {
      var val = parseFloat(token.value);
      if (isNaN(val)) throwSizeError(token.name, token.value, "object");

      return token.value.toString()?.includes('px') ? val : val / 100;
    }
  });

  // APPLY THE CONFIGURATION
  // IMPORTANT: the registration of custom transforms
  // needs to be done _before_ applying the configuration
  const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


  // FINALLY, BUILD ALL THE PLATFORMS
  StyleDictionaryExtended.buildAllPlatforms();
  console.log('\n');

}

const logSymbols = {
  info: chalk.blue('ℹ'),
  success: chalk.green('✔'),
  warning: chalk.yellow('⚠'),
  error: chalk.red('✖')
};


const FontName = 'freud-icons';


async function convertSvgToFontStep(fontName, svgFolder) {
  console.log(chalk.bold.yellow(`> Transforming ${svgFolder} into font (${fontName}):\n`));
  const sourceIconsDir = `${__dirname}/assets/${svgFolder}`;
  const minifiedIconsDir = `${__dirname}/assets/minified/${svgFolder}`;
  const fontIconsDir = `${__dirname}/assets/fonts/${svgFolder}`;

  try {

    createDir(minifiedIconsDir);
    createDir(fontIconsDir);

    console.log(`[1/2] Clearing svgs\n\n`);
    const files = await fs.promises.readdir( sourceIconsDir );
    const numOfIcons = files.length;
    let count = 0;
    for( const file of files ) {
      const fromPath = path.join( sourceIconsDir, file );
      const stat = await fs.promises.stat( fromPath );

      if( stat.isFile() ) {
        const toPath = path.join( minifiedIconsDir, file );

        const { stderr } = await exec(`picosvg ${fromPath} > ${toPath}`);
        clearLines(2);
        if (stderr) {
          console.error(logSymbols.error, stderr)
          return;
        }
        count++;
        console.log(progress(count, numOfIcons))
        console.log(`[${count}/${numOfIcons}]`, file);
      }
    }

    clearLines(2);
    console.log(logSymbols.success, chalk.bold.green('Done\n'));


    console.log(`[2/2] Converting to font`);
    const iconsConfig = {
      name: fontName,
      inputDir: `./assets/minified/${svgFolder}`,
      outputDir: `./dist/assets/fonts/${svgFolder}`,
      fontTypes: ['ttf', 'woff', 'woff2'],
      assetTypes: ['ts', 'css', 'sass', 'json', 'html'],
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
        relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
        absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
        relativeFilePath, // `string` - Example: 'foo.svg'
        index // `number` - Example: `0`
      }) => basename // 'icon-foo'
    }
    createDir(iconsConfig.outputDir);

    await generateFonts(iconsConfig);
    console.log(logSymbols.success, chalk.bold.green('Done\n\n'));
  } catch(err) {
    throw err;
  } finally {
    fs.rmSync(minifiedIconsDir, { recursive: true, force: true });
  }
}

(async ()=>{
  try {
    createAssetsStep();

    const fonts = [
      { fontName: 'freud-icons', svgFolder: 'icon' },
      { fontName: 'freud-emoji', svgFolder: 'emoji' },
      { fontName: 'freud-brand', svgFolder: 'brand' },
    ]
    for(config of fonts) {
      await convertSvgToFontStep(config.fontName, config.svgFolder);
    }

    console.log(chalk.bold.yellow('Build completed successfully!'));
  } catch( e ) {
    // Catch anything bad that happens
    console.error(logSymbols.error, e );
  }
})();
