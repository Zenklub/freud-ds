import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import { iconTemplate, enumNameTemplate, stringTemplate, stringResourceTemplate } from '../templates/android-icon.template';
import { TemplateBuilder } from '../templates/template-builder';
import capitalize from 'lodash/capitalize';
import { IconographyGenerator } from './iconography.generator';
import { copyFolderRecursiveSync, logSymbols } from '../utils';

interface ResourceData {
  name: string;
  source: string;
}

export class AndroidIconographyGenerator {
  private iconName: string;
  private familyName: string;
  private className: string;
  private fontName: string;
  private licenseText: string[];
  private resources: ResourceData[] = []

  constructor(private generator: IconographyGenerator) {
    this.iconName = generator.getFontName().replace('freud-', '');
    this.familyName = `freud_ds_${this.iconName}`;
    this.className = `FreudDS${capitalize(this.iconName)}`;


    const targetName = this.iconName.toLowerCase().replace(/[^a-z0-9_.]+/gi, '_');
    this.fontName = `freud_ds_${targetName}`
  }

  private get libRelativeCodePath() {
    return path.resolve('../../android/freud-ds-icons/src/main/java/com/zenklub/freudds/icons');
  }

  private get libRelativeResPath() {
    return path.resolve('../../android/freud-ds-icons/src/main/res');
  }

  private get stringsPath() {
    return path.resolve(this.libRelativeResPath, 'values', `freud_${this.iconName}.xml`);
  }

  private get currentStrings() {
    if (!fs.existsSync(this.stringsPath)) return '';

    return fs.readFileSync(this.stringsPath, 'utf8');
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
    const destinyPath = path.resolve(this.libRelativeResPath, 'font', `${this.fontName}.ttf`)
    fs.copyFileSync(sourcePath, destinyPath);
  }

  private generateString() {

    const charsMap = this.generator.getCharsMap();
    const strings = Object.keys(charsMap).map((key) => {
      const name = `${this.iconName}_${key.replace(/-/gi, "_").toLowerCase()}`
      return TemplateBuilder
        .with(stringTemplate)
        .setReplacement('NAME', name)
        .setReplacement('CODE', `&#x${Number(charsMap[key]).toString(16)};`)
        .build()
    }).join(",\n  ")

    let current = this.currentStrings;

    if (current) {
      current = current
        .replace('<?xml version="1.0" encoding="utf-8"?>', '')
        .replace('<resources>', '')
        .replace('</resources>', '')
        .replace(/(?=<!--)([\s\S]*?)-->/gm, '')
        .trim() + '\n  '
    }

    const header = this.getXmlHeader();

    const content = TemplateBuilder
      .with(stringResourceTemplate)
      .setReplacement('HEADER', header)
      .setReplacement('RESOURCES', `  ${current}${strings}`)
      .build();

    fs.writeFileSync(this.stringsPath, content);
  }

  private generateEnum() {
    this.copyIconFont();
    const charsMap = this.generator.getCharsMap();

    const enumValues = Object.keys(charsMap).map((key) => {
      return TemplateBuilder
        .with(enumNameTemplate)
        .setReplacement('NAME', key.replace(/-/gi, "_").toUpperCase())
        .setReplacement('CODE', `0x${Number(charsMap[key]).toString(16)}`)
        .build()
    }).join(",\n  ")

    const code = TemplateBuilder
      .with(iconTemplate)
      .setReplacement('ENUM_VALUES', enumValues)
      .setReplacement('ENUM_NAME', this.className)
      .setReplacement('ICON_FAMILY', this.familyName)
      .build();

    const header = this.getHeader();
    const content = `${header}\n${code}`;

    const filePath = path.resolve(this.libRelativeCodePath, `${this.className}.java`);
    fs.writeFileSync(filePath, content);
  }

  private getHeader() {
    const headerStr = this.headerContents.join("\n * ");
    return `/**\n * ${headerStr}\n*/`;
  }

  private getXmlHeader() {
    const headerStr = this.headerContents.join("\n  ");
    return `<!--\n  ${headerStr}\n-->`;
  }

  private generateResource(resource: ResourceData) {
    const source = path.resolve(resource.source);
    const target = path.resolve(this.libRelativeResPath, 'raw');

    const includingFolder = false;
    const fileNameTransform = (name: string) => `${resource.name}_${name.replace(/-/gi, "_").toLowerCase()}`;

    copyFolderRecursiveSync(source, target, { includingFolder, fileNameTransform });
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
    console.log(chalk.bold(`Generating Android Resources`));

    this.copyIconFont();
    this.generateEnum();
    this.generateString();
    this.generateResources();

    console.log(logSymbols.success, chalk.bold.green('Done\n'));
  }

  public static with(generator: IconographyGenerator) {
    return new AndroidIconographyGenerator(generator);
  }
}
