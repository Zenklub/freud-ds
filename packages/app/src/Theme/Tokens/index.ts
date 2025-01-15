import * as Tokens from '../../../../tokens/dist/style/react-native/variables';

export const typography = {
  letterSpacings: {
    xs: '-0.05em',
    sm: '-0.025em',
    md: 0,
    lg: '0.025em',
    xl: '0.05em',
    '2xl': '0.1em',
  },
  lineHeights: {
    auto: `${Tokens.lineHeightAuto}`,
    xs: `${Tokens.lineHeightXs}`,
    sm: `${Tokens.lineHeightSm}`,
    md: `${Tokens.lineHeightMd}`,
    lg: `${Tokens.lineHeightLg}`,
  },
  fontWeights: {
    regular: Tokens.fontWeightRegular,
    medium: Tokens.fontWeightSemibold,
    bold: Tokens.fontWeightBold,
  },
  fontSizes: {
    '2xs': Tokens.fontSizeNano,
    xs: Tokens.fontSizeXxxs,
    sm: Tokens.fontSizeXxs,
    md: Tokens.fontSizeXs,
    lg: Tokens.fontSizeSm,
    xl: Tokens.fontSizeMd,
    '2xl': Tokens.fontSizeLg,
    '3xl': Tokens.fontSizeXl,
    '4xl': Tokens.fontSizeXxl,
    '5xl': Tokens.fontSizeXxxl,
    '6xl': Tokens.fontSizeGiant,
  },
  fontConfig: {
    SourceSansPro: {
      [Tokens.fontWeightRegular]: {
        normal: 'SourceSansPro-Regular',
      },
      [Tokens.fontWeightSemibold]: {
        normal: 'SourceSansPro-SemiBold',
      },
      [Tokens.fontWeightBold]: {
        normal: 'SourceSansPro-Bold',
      },
    },
  },
  fonts: {
    heading: 'SourceSansPro',
    body: 'SourceSansPro',
    mono: 'SourceSansPro',
    customFont: 'SourceSansPro',
  },
};

export const opacity = {
  none: 0,
  level1: Tokens.opacityLevel1,
  level2: Tokens.opacityLevel2,
  level3: Tokens.opacityLevel3,
  level4: Tokens.opacityLevel4,
  level5: Tokens.opacityLevel5,
  level6: Tokens.opacityLevel6,
  level7: Tokens.opacityLevel7,
  level8: Tokens.opacityLevel8,
  full: 1,
};

export const borderWidths = {
  none: Tokens.borderWidthNone,
  sm: Tokens.borderWidthSm,
  md: Tokens.borderWidthMd,
  lg: Tokens.borderWidthLg,
  xl: Tokens.borderWidthXl,
  xxl: Tokens.borderWidthXxl,
};

export const radii = {
  none: Tokens.borderRadiusNone,
  sm: Tokens.borderRadiusSm,
  md: Tokens.borderRadiusMd,
  lg: Tokens.borderRadiusLg,
  xl: Tokens.borderRadiusXl,
  pill: Tokens.borderRadiusPill,
  circular: Tokens.borderRadiusCircular,
};

export const spacing = {
  minimum: Tokens.spacingSizeMinimum,
  quark: Tokens.spacingSizeQuark,
  nano: Tokens.spacingSizeNano,
  xxxs: Tokens.spacingSizeXxxs,
  xxs: Tokens.spacingSizeXxs,
  xs: Tokens.spacingSizeXs,
  sm: Tokens.spacingSizeSm,
  md: Tokens.spacingSizeMd,
  lg: Tokens.spacingSizeLg,
  xl: Tokens.spacingSizeXl,
  xxl: Tokens.spacingSizeXxl,
  xxxl: Tokens.spacingSizeXxxl,
  big: Tokens.spacingSizeBig,
  huge: Tokens.spacingSizeHuge,
  giant: Tokens.spacingSizeGiant,
  '1/10': '10%',
  '1/5': '20%',
  '1/4': '25%',
  '1/3': '33.333%',
  '2/5': '40%',
  '2/4': '50%',
  '3/5': '60%',
  '3/4': '75%',
  '4/5': '80%',
  full: '100%',
};

export const colors = {
  brand: {
    pure: Tokens.brandColorPure,
    brandColor01: Tokens.brandColor01,
    brandColor02: Tokens.brandColor02,
    brandColor03: Tokens.brandColor03,
    brandColor04: Tokens.brandColor04,
    brandColor05: Tokens.brandColor05,
    brandColor06: Tokens.brandColor06,
  },
  complementary: {
    funny: {
      funnyPure: Tokens.complementaryColorFunnyPure,
      funny01: Tokens.complementaryColorFunny01,
      funny02: Tokens.complementaryColorFunny02,
      funny03: Tokens.complementaryColorFunny03,
      funny04: Tokens.complementaryColorFunny04,
      funny05: Tokens.complementaryColorFunny05,
      funny06: Tokens.complementaryColorFunny06,
    },
    colorLike: {
      pure: Tokens.complementaryColorFunnyPure,
      like01: Tokens.complementaryColorLike01,
      like02: Tokens.complementaryColorLike02,
      like03: Tokens.complementaryColorLike03,
      like04: Tokens.complementaryColorLike04,
      like05: Tokens.complementaryColorLike05,
      like06: Tokens.complementaryColorLike06,
    },
  },
  feedback: {
    neutral: {
      neutralPure: Tokens.feedbackColorNeutralPure,
      neutral01: Tokens.feedbackColorNeutral01,
      neutral02: Tokens.feedbackColorNeutral02,
      neutral03: Tokens.feedbackColorNeutral03,
      neutral04: Tokens.feedbackColorNeutral04,
      neutral05: Tokens.feedbackColorNeutral05,
      neutral06: Tokens.feedbackColorNeutral06,
    },
    positive: {
      pure: Tokens.feedbackColorPositivePure,
      positive01: Tokens.feedbackColorPositive01,
      positive02: Tokens.feedbackColorPositive02,
      positive03: Tokens.feedbackColorPositive03,
      positive04: Tokens.feedbackColorPositive04,
      positive05: Tokens.feedbackColorPositive05,
      positive06: Tokens.feedbackColorPositive06,
    },
    warning: {
      pure: Tokens.feedbackColorWarningPure,
      warning01: Tokens.feedbackColorWarning01,
      warning02: Tokens.feedbackColorWarning02,
      warning03: Tokens.feedbackColorWarning03,
      warning04: Tokens.feedbackColorWarning04,
      warning05: Tokens.feedbackColorWarning05,
      warning06: Tokens.feedbackColorWarning06,
    },
    alert: {
      pure: Tokens.feedbackColorAlertPure,
      alert01: Tokens.feedbackColorAlert01,
      alert02: Tokens.feedbackColorAlert02,
      alert03: Tokens.feedbackColorAlert03,
      alert04: Tokens.feedbackColorAlert04,
      alert05: Tokens.feedbackColorAlert05,
      alert06: Tokens.feedbackColorAlert06,
    },
    negative: {
      pure: Tokens.feedbackColorNegativePure,
      negative01: Tokens.feedbackColorNegative01,
      negative02: Tokens.feedbackColorNegative02,
      negative03: Tokens.feedbackColorNegative03,
      negative04: Tokens.feedbackColorNegative04,
      negative05: Tokens.feedbackColorNegative05,
      negative06: Tokens.feedbackColorNegative06,
    },
  },
  neutral: {
    white: Tokens.neutralColorWhite,
    black: Tokens.neutralColorBlack,
    dark: {
      dark01: Tokens.neutralColorDark01,
      dark02: Tokens.neutralColorDark02,
      dark03: Tokens.neutralColorDark03,
      dark04: Tokens.neutralColorDark04,
    },
    light: {
      light01: Tokens.neutralColorLight01,
      light02: Tokens.neutralColorLight02,
      light03: Tokens.neutralColorLight03,
      light04: Tokens.neutralColorLight04,
    },
  },
};

export const shadow = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  shadowFocusedZen: {
    shadowColor: '#E7E0F6',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 1,
  },
  shadowLevel1: {
    shadowColor: 'rgba(31, 41, 55, 0.08)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.08,
    elevation: 2,
  },
  shadowLevel2: {
    shadowColor: 'rgba(31, 41, 55, 0.12)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.12,
    elevation: 3,
  },
  shadowLevel3: {
    shadowColor: 'rgba(31, 41, 55, 0.14)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.14,
    elevation: 4,
  },
  shadowLevel4: {
    shadowColor: 'rgba(31, 41, 55, 0.16)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.16,
    elevation: 5,
  },
  shadowLevel5: {
    shadowColor: 'rgba(31, 41, 55, 0.16)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 16,
    shadowOpacity: 0.16,
    elevation: 6,
  },
  shadowLevel6: {
    shadowColor: 'rgba(31, 41, 55, 0.16)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    shadowOpacity: 0.16,
    elevation: 7,
  },
  shadowLevel7: {
    shadowColor: 'rgba(31, 41, 55, 0.16)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 16,
    shadowOpacity: 0.16,
    elevation: 8,
  },
  shadowLevel8: {
    shadowColor: 'rgba(31, 41, 55, 0.2)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowRadius: 24,
    shadowOpacity: 0.2,
    elevation: 9,
  },
};
