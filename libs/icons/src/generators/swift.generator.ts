import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import { TemplateBuilder } from '../templates/template-builder';
import capitalize from 'lodash/capitalize';
import { IconographyGenerator } from './iconography.generator';
import { copyFolderRecursiveSync, logSymbols } from '../utils';
import { swiftEnumNameTemplate, swiftIconTemplate } from '../templates/swift.template';

interface ResourceData {
  name: string;
  source: string;
}

function camelCase(str: string) {
  return str.split(/[^a-z0-9]/gi).join(' ').replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function pascalCase(str: string): string {
  return capitalize(camelCase(str))
}

export class SwiftIconographyGenerator {
  private iconName: string;
  private className: string;
  private licenseText: string[];
  private resources: ResourceData[] = []

  constructor(private generator: IconographyGenerator) {
    this.iconName = pascalCase(generator.getFontName())
    this.className = `FreudDS${pascalCase(this.iconName.replace('freud-', ''))}`;
  }

  private get libRelativeCodePath() {
    return path.resolve('../../ios/FreudDSIcons/Sources');
  }

  private get libRelativeResPath() {
    return path.resolve('../../ios/FreudDSIcons/Resources');
  }

  private get headerContents() {
    const header = [...this.licenseText];
    const today = new Date()
    header.push('', 'Do not edit directly', `Generated on ${today.toUTCString()}`);
    return header
  }

  private copyIconFont() {
    const sourceFolder = this.generator.getDestinationFolder();
    const name = this.generator.getFontName();

    const sourcePath = path.resolve(sourceFolder, `${name}.ttf`);
    const destinyPath = path.resolve(this.libRelativeResPath, `${pascalCase(name)}.ttf`)
    fs.copyFileSync(sourcePath, destinyPath);
  }

  private generateEnum() {
    this.copyIconFont();
    const charsMap = this.generator.getCharsMap();

    const enumValues = Object.keys(charsMap).map((key) => {
      return TemplateBuilder
        .with(swiftEnumNameTemplate)
        .setReplacement('NAME', camelCase(key))
        .setReplacement('CODE', `\\u{${Number(charsMap[key]).toString(16)}}`)
        .build()
    }).join("\n  ")

    const code = TemplateBuilder
      .with(swiftIconTemplate)
      .setReplacement('ENUM_VALUES', enumValues)
      .setReplacement('ENUM_NAME', this.className)
      .setReplacement('ICON_FAMILY', this.iconName)
      .build();

    const header = this.getHeader();
    const content = `${header}\n${code}`;

    const filePath = path.resolve(this.libRelativeCodePath, `${this.className}.swift`);
    fs.writeFileSync(filePath, content);
  }

  private getHeader() {
    const headerStr = this.headerContents.join("\n * ");
    return `/**\n * ${headerStr}\n*/`;
  }

  private generateResource(resource: ResourceData) {
    const source = path.resolve(resource.source);

    const includingFolder = false;
    const resourceName = pascalCase(resource.name);

    const fileNameTransform = (name: string) => {
      const extension = name.slice((name.lastIndexOf(".") - 1 >>> 0) + 2)
      const _name = pascalCase(name.replace(extension, ''));
      return `${resourceName}${_name}.${extension}`;
    }

    copyFolderRecursiveSync(source, this.libRelativeResPath, { includingFolder, fileNameTransform });
  }

  private generateResources() {
    for(const resource of this.resources) {
      this.generateResource(resource);
    }
  }

  // Mark: public
  public setLicenseText(license: string[]){
    this.licenseText = license;
    return this;
  }

  public setResource(name: string, source: string){
    this.resources.push({ name, source });
    return this;
  }

  public async generate() {
    console.log(chalk.bold(`Generating Swift Resources`));

    this.copyIconFont();
    this.generateEnum();
    this.generateResources();

    console.log(logSymbols.success, chalk.bold.green('Done\n'));
  }

  public static with(generator: IconographyGenerator) {
    return new SwiftIconographyGenerator(generator);
  }
}
