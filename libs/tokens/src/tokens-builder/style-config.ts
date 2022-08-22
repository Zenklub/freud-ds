import * as path from 'path';
import * as fs from 'fs';
import { Config } from "style-dictionary";

let licenseContents = [];

function getLicenseContents() {
  if (!licenseContents.length) {
    const licensePath = path.resolve('../../LICENSE');
    licenseContents = fs.readFileSync(licensePath, 'utf8').split('\n');
  }
  return licenseContents;
}

function getLicenseHeaders(headers: string[]) {
  return [
    ...getLicenseContents(),
    ...headers,
  ]
}

export const fontFaceDictionary: Config = {
  fileHeader: {
    license: getLicenseHeaders,
  },
  source: [
    "src/tokens/asset/font.json"
  ],
  platforms: {
    'Font Face (css)': {
      transforms: ['attribute/font'],
      buildPath: 'css/',
      files: [
        {
          destination: 'fonts.css',
          format: 'font/face',
          filter: {
            attributes: {
              category: 'asset',
              type: 'font'
            }
          },
          options: {
            fileHeader: 'license',
            fontPathPrefix: '../'
          }
        }
      ]
    },
    'Font Face (scss)': {
      transforms: ['attribute/font'],
      buildPath: 'scss/',
      files: [
        {
          destination: '_fonts.scss',
          format: 'font/face',
          filter: {
            attributes: {
              category: 'asset',
              type: 'font'
            }
          },
          options: {
            fileHeader: 'license',
            fontPathPrefix: '#{$font-path}/'
          }
        }
      ]
    },
    'Font Face (ios)': {
      transforms: ['attribute/font'],
      buildPath: 'ios/FreudDSTheme/',
      files: [
        {
          destination: 'FreudDSFontFamily+Values.swift',
          format: 'font/face/swift',
          filter: {
            attributes: {
              category: 'asset',
              type: 'font'
            }
          },
          options: {
            fileHeader: 'license',
            fontPathPrefix: '#{$font-path}/'
          }
        }
      ]
    },
    'Font Face (android)': {
      transforms: ['attribute/font'],
      buildPath: "android/freud-ds-theme/src/main/java/com/zenklub/freudds/theme/",
      files: [
        {
          destination: 'FreudDSFontFamily.kt',
          format: 'font/face/kotlin',
          filter: {
            attributes: {
              category: 'asset',
              type: 'font'
            }
          },
          options: {
            fileHeader: 'license',
            fontPathPrefix: '#{$font-path}/'
          }
        }
      ]
    }
  }
}

export const tokensDictionary: Config = {
  fileHeader: {
    license: getLicenseHeaders,
  },
  source: [
    "src/tokens/{border,color,font,opacity,shadow,spacing}/*.json"
  ],
  platforms: {
    css: {
      transforms: [
        'attribute/cti',
        'time/seconds',
        'content/icon',
        'color/css',
        'name/ti/kebab'
      ],
      buildPath: "css/",
      files: [
        {
          format: "css/variables",
          destination: "variables.css",
          options: {
            fileHeader: 'license',
          }
        },
      ],
    },
    scss: {
      buildPath: "scss/",
      transforms: [
        'attribute/cti',
        'time/seconds',
        'content/icon',
        'color/css',
        'name/ti/kebab',
      ],
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
          options: {
            fileHeader: 'license',
            themeable: true,
          }
        },
      ],
    },
    ios: {
      transformGroup: "freud/ios/swift",
      buildPath: "ios/FreudDSTheme/",
      files: [
        {
          format: "freud/ios/extension.swift",
          destination: "FreudDSTokens+Values.swift",
          className: "FreudDSTokens",
          options: {
            import: ['Foundation'],
            fileHeader: 'license',
          }
        },
      ],
    },
    android: {
      transformGroup: "freud/android/kotlin",
      buildPath: "android/freud-ds-theme/src/main/java/com/zenklub/freudds/theme/",
      files: [
        {
          format: "freud/android/kotlin",
          destination: "FreudDSTokens.kt",
          options: {
            fileHeader: 'license',
          }
        },
      ],
    },
    rn: {
      transformGroup: "react-native",
      buildPath: "tmp/",
      transforms: [
        'color/css',
        'size/object',
        'name/ti/camel',
      ],
      files: [
        {
          destination: "react-native/tokens.js",
          format: "javascript/es6",
          options: {
            fileHeader: 'license',
          },
        },
        {
          format: "typescript/module-declarations",
          destination: "react-native/tokens.d.ts",
          options: {
            fileHeader: 'license',
          },
        }
      ],
    },
    ts: {
      transformGroup: "js",
      buildPath: "tmp/",
      transforms: [
        'color/css',
        'size/object',
        'name/ti/camel',
      ],
      files: [
        {
          format: "javascript/es6",
          destination: "index.js",
          options: {
            fileHeader: 'license',
          }
        },
        {
          format: "typescript/es6-declarations",
          destination: "index.d.ts",
          options: {
            fileHeader: 'license',
          }
        }
      ],
    },
  },
}
