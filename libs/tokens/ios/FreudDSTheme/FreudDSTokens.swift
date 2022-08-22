/**
 * MIT License
 *
 * Copyright (c) 2022 Zenklub
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * FreudDSTokens.swift
 * FreudDSTheme

 * Created by Erick on 20/08/22.
 */

import Foundation

protocol FreudDSTokens {
  var borderRadiusNone: Float { get }
  var borderRadiusSm: Float { get }
  var borderRadiusMd: Float { get }
  var borderRadiusLg: Float { get }
  var borderRadiusXl: Float { get }
  var borderRadiusPill: Float { get }
  var borderRadiusCircular: Float { get }
  var borderWidthNone: Float { get }
  var borderWidthSm: Float { get }
  var borderWidthMd: Float { get }
  var borderWidthLg: Float { get }
  var borderWidthXl: Float { get }
  var borderWidthXxl: Float { get }
  var lineHeightNone: Float { get }
  var lineHeightXs: Float { get }
  var lineHeightSm: Float { get }
  var lineHeightMd: Float { get }
  var lineHeightLg: Float { get }
  var lineHeightXl: Float { get }
  var lineHeightXxl: Float { get }
  var fontSizeXxxs: Float { get }
  var fontSizeXxs: Float { get }
  var fontSizeXs: Float { get }
  var fontSizeSm: Float { get }
  var fontSizeMd: Float { get }
  var fontSizeLg: Float { get }
  var fontSizeXl: Float { get }
  var fontSizeXxl: Float { get }
  var fontSizeXxxl: Float { get }
  var fontSizeDisplay: Float { get }
  var fontSizeGiant: Float { get }
  var fontWeightBold: Float { get }
  var fontWeightSemibold: Float { get }
  var fontWeightRegular: Float { get }
  var spacingMinimum: Float { get }
  var spacingQuark: Float { get }
  var spacingNano: Float { get }
  var spacingXxxs: Float { get }
  var spacingXxs: Float { get }
  var spacingXs: Float { get }
  var spacingSm: Float { get }
  var spacingMd: Float { get }
  var spacingLg: Float { get }
  var spacingXl: Float { get }
  var spacingXxl: Float { get }
  var spacingXxxl: Float { get }
  var spacingBig: Float { get }
  var spacingHuge: Float { get }
  var spacingGiant: Float { get }
  var brandColorPure: String { get }
  var brandColor01: String { get  }
  var brandColor02: String { get  }
  var brandColor03: String { get  }
  var complementaryColorPure: String { get  }
  var complementaryColor01: String { get  }
  var complementaryColor02: String { get  }
  var complementaryColor03: String { get  }
  var feedbackColorPositivePure: String { get  }
  var feedbackColorPositive01: String { get  }
  var feedbackColorPositive02: String { get  }
  var feedbackColorPositive03: String { get  }
  var feedbackColorNegativePure: String { get  }
  var feedbackColorNegative01: String { get  }
  var feedbackColorNegative02: String { get  }
  var feedbackColorNegative03: String { get  }
  var feedbackColorWarningPure: String { get  }
  var feedbackColorWarning01: String { get  }
  var feedbackColorWarning02: String { get  }
  var feedbackColorWarning03: String { get  }
  var neutralColorDarkPure: String { get  }
  var neutralColorDark01: String { get  }
  var neutralColorDark02: String { get  }
  var neutralColorDark03: String { get  }
  var neutralColorLightPure: String { get  }
  var neutralColorLight01: String { get  }
  var neutralColorLight02: String { get  }
  var neutralColorLight03: String { get  }
  var fontFamilyHighlight: String { get  }
  var fontFamilyBase: String { get  }
  var opacityLevel1: Float { get }
  var opacityLevel2: Float { get }
  var opacityLevel3: Float { get }
  var opacityLevel4: Float { get }
  var opacityLevel5: Float { get }
  var opacityLevel6: Float { get }
  var opacityLevel7: Float { get }
  var opacityLevel8: Float { get }
  var shadowLevel1: [FreudDSShadow] { get }
  var shadowLevel2: [FreudDSShadow] { get }
  var shadowLevel3: [FreudDSShadow] { get }
  var shadowLevel4: [FreudDSShadow] { get }
  var shadowLevel5: [FreudDSShadow] { get }
}
