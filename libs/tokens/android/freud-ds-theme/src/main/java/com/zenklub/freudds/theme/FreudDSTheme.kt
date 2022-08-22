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
 */

package com.zenklub.freudds.theme

class FreudDSTheme(tokens: FreudDSTokens = FreudDSTokens()) {
  private var tokens = tokens
  private var baseFontFamily: FreudDSFontFamily = DefaultFreudDSFontFamily.BASE
  private var highlightFontFamily: FreudDSFontFamily = DefaultFreudDSFontFamily.HIGHLIGHT

  companion object {
    var current = FreudDSTheme(FreudDSTokens())
      private set
  }

  fun setTheme(theme: FreudDSTokens): FreudDSTheme {
    this.tokens = theme
    return this;
  }

  fun theme(): FreudDSTokens {
    return tokens
  }

  fun setBaseFontFamily(fontFamily: FreudDSFontFamily): FreudDSTheme {
    this.baseFontFamily = fontFamily
    return this;
  }

  fun setHightlightFontFamily(fontFamily: FreudDSFontFamily): FreudDSTheme {
    this.highlightFontFamily = fontFamily
    return this;
  }

  fun getBaseFontFamily(): FreudDSFontFamily {
    return this.baseFontFamily
  }

  fun getHighlightFontFamily(): FreudDSFontFamily {
    return this.highlightFontFamily
  }
}
