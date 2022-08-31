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
 * Do not edit directly
 * Generated on Tue, 30 Aug 2022 21:22:43 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "size": {
    "border radius": {
      "none": DesignToken,
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "pill": DesignToken,
      "circular": DesignToken
    },
    "border width": {
      "none": DesignToken,
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "xxl": DesignToken
    },
    "line height": {
      "none": DesignToken,
      "xs": DesignToken,
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "xxl": DesignToken
    },
    "font": {
      "size": {
        "xxxs": DesignToken,
        "xxs": DesignToken,
        "xs": DesignToken,
        "sm": DesignToken,
        "md": DesignToken,
        "lg": DesignToken,
        "xl": DesignToken,
        "xxl": DesignToken,
        "xxxl": DesignToken,
        "display": DesignToken,
        "giant": DesignToken
      }
    },
    "font weight": {
      "bold": DesignToken,
      "semibold": DesignToken,
      "regular": DesignToken
    },
    "spacing": {
      "minimum": DesignToken,
      "quark": DesignToken,
      "nano": DesignToken,
      "xxxs": DesignToken,
      "xxs": DesignToken,
      "xs": DesignToken,
      "sm": DesignToken,
      "md": DesignToken,
      "lg": DesignToken,
      "xl": DesignToken,
      "xxl": DesignToken,
      "xxxl": DesignToken,
      "big": DesignToken,
      "huge": DesignToken,
      "giant": DesignToken
    }
  },
  "color": {
    "brand": {
      "color": {
        "pure": DesignToken,
        "01": DesignToken,
        "02": DesignToken,
        "03": DesignToken
      }
    },
    "complementary": {
      "color": {
        "pure": DesignToken,
        "01": DesignToken,
        "02": DesignToken,
        "03": DesignToken
      }
    },
    "feedback": {
      "color": {
        "positive": {
          "pure": DesignToken,
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        },
        "negative": {
          "pure": DesignToken,
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        },
        "warning": {
          "pure": DesignToken,
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        }
      }
    },
    "neutral": {
      "color": {
        "dark": {
          "pure": DesignToken,
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        },
        "light": {
          "pure": DesignToken,
          "01": DesignToken,
          "02": DesignToken,
          "03": DesignToken
        }
      }
    }
  },
  "asset": {
    "font family": {
      "highlight": DesignToken,
      "base": DesignToken
    }
  },
  "opacity": {
    "opacity": {
      "level": {
        "1": DesignToken,
        "2": DesignToken,
        "3": DesignToken,
        "4": DesignToken,
        "5": DesignToken,
        "6": DesignToken,
        "7": DesignToken,
        "8": DesignToken
      }
    }
  },
  "shadow": {
    "shadow": {
      "level": {
        "1": DesignToken,
        "2": DesignToken,
        "3": DesignToken,
        "4": DesignToken,
        "5": DesignToken
      }
    }
  }
}