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
 * FreudDSTheme.swift
 * FreudDSTheme
 
 * Created by Erick on 20/08/22.
 */

import Foundation

struct FreudDefaultTokens: FreudDSTokens {}

open class FreudDSTheme {
  private var tokens: FreudDSTokens
  private var baseFontFamily: FreudDSFontFamilyProtocol = FreudDSFontFamily.base
  private var highlightFontFamily: FreudDSFontFamilyProtocol = FreudDSFontFamily.highlight
  
  init(tokens: FreudDSTokens) {
    self.tokens = tokens
  }
  
  static private(set) var current = FreudDSTheme(tokens: FreudDefaultTokens())
  
  @discardableResult
  func setTheme(with tokens: FreudDSTokens) -> FreudDSTheme {
    self.tokens = tokens
    return self
  }
  
  func theme() -> FreudDSTokens {
    return self.tokens
  }
  
  func setFontFamily(base fontFamily: FreudDSFontFamilyProtocol) -> FreudDSTheme {
    self.baseFontFamily = fontFamily
    return self;
  }
  
  func setFontFamily(hightlight fontFamily: FreudDSFontFamilyProtocol) -> FreudDSTheme {
    self.highlightFontFamily = fontFamily
    return self;
  }
  
  func getBaseFontFamily() -> FreudDSFontFamilyProtocol {
    return self.baseFontFamily
  }
  
  func getHighlightFontFamily() -> FreudDSFontFamilyProtocol {
    return self.highlightFontFamily
  }
}
