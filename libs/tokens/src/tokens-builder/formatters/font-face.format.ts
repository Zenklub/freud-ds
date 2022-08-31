
import fileHeader from "style-dictionary/lib/common/formatHelpers/fileHeader";
import { FormatterArguments } from "style-dictionary/types/Format";
import { FormattersType } from "../types";
import swiftTemplate from "../templates/swift-font-face.template";
import javaTemplate from "../templates/java-font-face.template";

type FontWeights = 'thin' | 'regular' | 'semibold' | 'bold'
interface FontData {
  family: string;
  font: string;
  fontStyle?: string;
  extensions: Array<string>;
  weight: number | string;
}
interface FontType {
  value: Record<FontWeights, FontData>;
  style?: string;
  filePath: string;
  isSource: boolean;
  original: unknown;
  name: 'base' | 'highlight';
  attributes: {
    category: "asset";
    type: "font";
    weight: 'thin' | 'regular' | 'semibold' | 'bold';
  },
  path: string[];

}

// https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
const formatsMap = {
  'woff2': 'woff2',
  'woff': 'woff',
  'ttf': 'truetype',
  'otf': 'opentype',
  'svg': 'svg',
  'eot': 'embedded-opentype'
};

function cssFontFaceFormatter({ dictionary, file, options }: FormatterArguments) {
  const fontPathPrefix = options.fontPathPrefix as string || 'fonts';
  const process = ({ name, value }: FontType) => {
    return Object.keys(value).flatMap((weightName) => {
        const {
          weight,
          family,
          font,
          extensions,
          fontStyle = "normal",
        } = value[weightName] as FontData;

      const urls = extensions.map((extension: string) => `url("${fontPathPrefix}${font}.${extension}") format("${formatsMap[extension]}")`);
      return [
        `/* Font Faces for "${name}" (${weightName}) */`,
        '@font-face {',
        `\tfont-family: "${family}";`,
        `\tfont-style: ${fontStyle};`,
        `\tfont-weight: ${weight};`,
        `\tsrc: ${urls.join(',\n\t\t\t ')};`,
        '\tfont-display: fallback;',
        '}\n'
      ]
    })
  }

  const fontFaces = dictionary.allTokens as FontType[];

  const face = fontFaces.reduce((fontList: string[], prop) => {
    return [
      ...fontList,
      ...process(prop),
    ]
  }, []);

  const header = fileHeader({ file });
  return [header, face].flat().join('\n');
}


export const FontFaceFormatters: FormattersType[] = [
  {
    name: 'font/face',
    formatter: cssFontFaceFormatter
  },
  {
    name: 'font/face/swift',
    formatter: function (token: FormatterArguments) {
      return formatFaceWithTemplate(token, 'swift')
    }
  },
  {
    name: 'font/face/java',
    formatter: function (token: FormatterArguments) {
      return formatFaceWithTemplate(token, 'java')
    }
  }
];

function formatFaceWithTemplate(token: FormatterArguments, platform: 'swift' | 'java') {
  const templateStr = platform === 'swift' ? swiftTemplate : javaTemplate
  const fontFaces = token.dictionary.allTokens as FontType[];

  const params = {
    BASE_THIN_PATH: '',
    BASE_REGULAR_PATH: '',
    BASE_SEMIBOLD_PATH: '',
    BASE_BOLD_PATH: '',

    BASE_THIN_NAME: '',
    BASE_REGULAR_NAME: '',
    BASE_SEMIBOLD_NAME: '',
    BASE_BOLD_NAME: '',

    HIGHLIGHT_THIN_PATH: '',
    HIGHLIGHT_REGULAR_PATH: '',
    HIGHLIGHT_SEMIBOLD_PATH: '',
    HIGHLIGHT_BOLD_PATH: '',

    HIGHLIGHT_THIN_NAME: '',
    HIGHLIGHT_REGULAR_NAME: '',
    HIGHLIGHT_SEMIBOLD_NAME: '',
    HIGHLIGHT_BOLD_NAME: '',
  }

  const fallbacks = ['THIN', 'REGULAR', 'SEMIBOLD', 'BOLD'];

  let keys = fontFaces.reduce((params, fontType) => {
    const name = fontType.name
    const values = fontType.value

    return Object.keys(values).reduce((params, weight) => {
      const data: FontData = values[weight];

      const key = `${name}_${weight}`.toUpperCase();

      const path = platform === 'swift'
        ? data.font
        : data.font
          .toLowerCase()
          .replace(/[^a-z0-9_.]+/gi, '_');

      return {
        ...params,
        [`${key}_PATH`]: JSON.stringify(path),
        [`${key}_NAME`]: JSON.stringify(data.font)
      }
    }, params);
  }, params);

  // Fix missing weight with fallback
  keys = Object.keys(keys).reduce((keys, key) => {
    let val = keys[key];
    if (!val) {
      const [, style, weight, arg] = key.match(/(BASE|HIGHLIGHT)_(.+)_(PATH|NAME)/);
      let index = fallbacks.findIndex((v) => v === weight);
      const dir = index + 1 === fallbacks.length ? -1 : 1

      while(index < fallbacks.length && index >= 0) {
        const fallbackKey = `${style}_${fallbacks[index]}_${arg}`
        if (keys[fallbackKey]) {
          val = keys[fallbackKey];
          break
        }
        index += dir
      }
    }
    return {
      ...keys,
      [key]: val,
    }
  }, keys);

  const template = new TemplateBuilder(templateStr);
  template.setReplacements(keys);

  const body = template.build()

  const header = fileHeader({file: token.file });
  return [header, body].flat().join('\n');
}

class TemplateBuilder {
  constructor(private template: string) {}

  private replacements: Record<string, string> = {};

  setReplacement(key: string, value: string): TemplateBuilder {
    return this.setReplacements({ [key]: value });
  }

  setReplacements(values: Record<string, string>): TemplateBuilder {
    this.replacements = {
      ...this.replacements,
      ...values,
    }
    return this;
  }

  build() {
    return Object.keys(this.replacements).reduce((template, key) => {
      const value = this.replacements[key];
      return template.replace(new RegExp(`{{\\s?${key}\\s?}}`), value)
    }, this.template)
  }
}
