
import fileHeader from "style-dictionary/lib/common/formatHelpers/fileHeader";
import { FormatterArguments } from "style-dictionary/types/Format";
import { FormattersType } from "../types";
import swiftTemplate from "../templates/swift-font-face.template";
import kotlinTemplate from "../templates/kotlin-font-face.template";

interface FontType {
  value: string;
  paths: Array<string>;
  formats: Array<string>;
  style?: string;
  weights: Array<number | string>;
  filePath: string;
  isSource: boolean;
  original: unknown;
  name: string;
  attributes: {
    category: "asset";
    type: "font";
    name: string;
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

function formatter(token: FormatterArguments, options: Record<string, unknown>) {
  const fontPathPrefix = options.fontPathPrefix as string || '../';
  const process = ({
    paths,
    weights,
    formats,
    style = 'normal',
    value: family,
  }: FontType) => {
    return paths
    .flatMap((path, index) => {
        const weight = weights[index];
        const urls = formats.map((extension: string | number) => `url("${fontPathPrefix}${path}.${extension}") format("${formatsMap[extension]}")`);
        return [
          '@font-face {',
          `\tfont-family: "${family}";`,
          `\tfont-style: ${style};`,
          `\tfont-weight: ${weight};`,
          `\tsrc: ${urls.join(',\n\t\t\t ')};`,
          '\tfont-display: fallback;',
          '}\n'
        ]
      })
    }

  const fontFaces = token.dictionary.allTokens as FontType[];

  const face = fontFaces.reduce((fontList: string[], prop) => {
    return [
      ...fontList,
      `/* Font Faces for "${prop.name}" fonts */`,
      ...process(prop),
    ]
  }, []);

  const header = fileHeader({file: token.file });
  return [header, face].flat().join('\n');
}


export const FontFaceFormatters: FormattersType[] = [
  {
    name: 'font/face',
    formatter: formatter as FormattersType['formatter']
  },
  {
    name: 'font/face/swift',
    formatter: function (token: FormatterArguments) {
      return formatFaceWithTemplate(token, swiftTemplate)
    }
  },
  {
    name: 'font/face/kotlin',
    formatter: function (token: FormatterArguments) {
      return formatFaceWithTemplate(token, kotlinTemplate)
    }
  }
];

function formatFaceWithTemplate(token: FormatterArguments, templateStr: string) {
  const fontFaces = token.dictionary.allTokens as FontType[];
      type FreudDSFFace = { base: { name: string; weights: string[]; paths: string[] }, highlight: { name: string; weights: string[]; paths: string[] } };

      const BaseFace: FreudDSFFace = {
        base: {
          name: '',
          weights: [],
          paths: []
        },
        highlight: {
          name: '',
          weights: [],
          paths: []
        }
      }

      const faces = fontFaces.reduce((fontList, prop) => {
        return {
          ...fontList,
          [prop.name]: {
            name:  prop.value,
            weights: prop.weights,
            paths: prop.paths
          }
        }
      }, BaseFace);
      const header = fileHeader({file: token.file });

      const template = new TemplateBuilder(templateStr);
      Object.keys(faces).forEach((faceKey) => {
        const face = faces[faceKey]
        Object.keys(face).forEach((key) => {
          const value = JSON.stringify(face[key]).replace(new RegExp('([\\[\\]])', 'gi'), '');
          template.setReplacement(`${faceKey}_${key}`.toUpperCase(), value)
        })
      })
      const body = template.build();

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
