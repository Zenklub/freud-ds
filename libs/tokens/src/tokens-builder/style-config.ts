import * as path from 'path';
import * as fs from 'fs';
import { Config } from "style-dictionary";

let licenseContents = [];

const root = path.resolve('../../');

function getLicenseContents() {
  if (!licenseContents.length) {
    const licensePath = path.resolve(root, 'LICENSE');
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
    `${root}/resources/tokens/asset/font.json`
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
            fontPathPrefix: 'fonts/'
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
            fontPathPrefix: 'fonts/'
          }
        }
      ]
    },
    'Font Face (ios)': {
      transforms: ['attribute/font'],
      buildPath: `${root}/ios/FreudDSTheme/`,
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
      buildPath: `${root}/android/freud-ds-theme/src/main/java/com/zenklub/freudds/theme/`,
      files: [
        {
          destination: 'FreudDSDefaultFonts.java',
          format: 'font/face/java',
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
    `${root}/resources/tokens/asset/{border,color,font,opacity,shadow,spacing}/*.json`
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
      buildPath: `${root}/ios/FreudDSTheme/`,
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
      transformGroup: "freud/android/java",
      buildPath: `${root}/android/freud-ds-theme/src/main/java/com/zenklub/freudds/theme/`,
      files: [
        {
          format: "freud/android/java",
          destination: "FreudDSTokens.java",
          options: {
            fileHeader: 'license',
          }
        },
      ],
    },
    'android (dimensions)': {
      transformGroup: "android",
      transforms: [
       "attribute/cti",
       "color/hex8android",
       'size/platformSpecific',
       'size/percentageToScale',
       'freud/shadow/android',
       "size/pxToDp",
       "name/ti/snake",
      ],
      buildPath: `${root}/android/freud-ds-theme/src/main/res/values/`,
      files: [
        {
          format: "android/resources",
          destination: "freud_sizes.xml",
          filter: "isSize",
          options: {
            fileHeader: 'license',
          }
        },
      ],
    },
    'android (colors)': {
      transformGroup: "android",
      transforms: [
       "attribute/cti",
       "color/hex8android",
       'size/platformSpecific',
       'size/percentageToScale',
       'freud/shadow/android',
       "size/pxToDp",
       "name/ti/snake",
      ],
      buildPath: `${root}/android/freud-ds-theme/src/main/res/values/`,
      files: [
        {
          format: "android/resources",
          destination: "freud_colors.xml",
          filter: "isColor",
          options: {
            fileHeader: 'license',
          }
        },
      ],
    },
    'android (opacities)': {
      transformGroup: "android",
      transforms: [
       "attribute/cti",
       "color/hex8android",
       'size/platformSpecific',
       'size/percentageToScale',
       'freud/shadow/android',
       "size/pxToDp",
       "name/ti/snake",
      ],
      buildPath:`${root}/android/freud-ds-theme/src/main/res/values/`,
      files: [
        {
          format: "android/resources",
          destination: "freud_opacities.xml",
          filter: "isOpacity",
          options: {
            fileHeader: 'license',
          }
        },
      ],
    },
    'android (shadows)': {
      transformGroup: "android",
      transforms: [
       "attribute/cti",
       "color/hex8android",
       'size/platformSpecific',
       'size/percentageToScale',
       'freud/shadow/android',
       "size/pxToDp",
       "name/ti/snake",
      ],
      buildPath: `${root}/android/freud-ds-theme/src/main/res/values/`,
      files: [
        {
          format: "freud/android/shadowResources",
          destination: "freud_shadows.xml",
          filter: "isShadow",
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
