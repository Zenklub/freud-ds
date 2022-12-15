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
import UIKit

struct FreudDefaultTokens: FreudDSTokens {}

extension Sequence where Iterator.Element: Hashable {
  var unique: [Iterator.Element] {
    var seen: [Iterator.Element: Bool] = [:]
    return self.filter { seen.updateValue(true, forKey: $0) == nil }
  }
}

public class FreudDSTheme {
  private var tokens: FreudDSTokens
  private var baseFontFamily: FreudDSFontFamilyProtocol = FreudDSFontFamily.base
  private var highlightFontFamily: FreudDSFontFamilyProtocol = FreudDSFontFamily.highlight
  
  private func registerFonts() {
    var paths: [String] = []
    FreudDSFontWeight.allCases.forEach { weight in
      paths.append(self.baseFontFamily.path(forWeight: weight))
      paths.append(self.highlightFontFamily.path(forWeight: weight))
    }
    
    paths.unique.forEach { path in
      self.registerFont(at: path)
    }
  }
  
  init(tokens: FreudDSTokens) {
    self.tokens = tokens
    self.registerFonts()
  }
  
  private func registerFont(at path: String) {
    let podBundle = Bundle(for: FreudDSTheme.self)
    guard let bundleURL = podBundle.url(forResource: "FreudDSThemeFonts", withExtension: "bundle") else {
      print("could not find podBundle")
      return
    }
    guard let url = Bundle(url: bundleURL)?.url(forResource: path, withExtension: "ttf") else {
      print("could not find font \(path)")
      return
    }
    
    print("registering font at \(url.absoluteString)")
    guard let fontDataProvider = CGDataProvider(url: url as CFURL) else {
      print("Could not create font data provider for \(url).")
      return
    }
    guard let font = CGFont(fontDataProvider) else {
      print("could not create font")
      return
    }
    var error: Unmanaged<CFError>?
    if !CTFontManagerRegisterGraphicsFont(font, &error) {
      print(error!.takeUnretainedValue())
    }
  }
  
  public static private(set) var current = FreudDSTheme(tokens: FreudDefaultTokens())
  
  @discardableResult
  public func setTheme(with tokens: FreudDSTokens) -> FreudDSTheme {
    self.tokens = tokens
    return self
  }
  
  public func theme() -> FreudDSTokens {
    return self.tokens
  }
  
  public func setFontFamily(base fontFamily: FreudDSFontFamilyProtocol) -> FreudDSTheme {
    self.baseFontFamily = fontFamily
    return self
  }
  
  public func setFontFamily(hightlight fontFamily: FreudDSFontFamilyProtocol) -> FreudDSTheme {
    self.highlightFontFamily = fontFamily
    return self
  }
  
  public func getBaseFontFamily() -> FreudDSFontFamilyProtocol {
    return self.baseFontFamily
  }
  
  public func getHighlightFontFamily() -> FreudDSFontFamilyProtocol {
    return self.highlightFontFamily
  }
  
  public func font(type: FreudDSFontFamily, weight: FreudDSFontWeight, size: CGFloat) -> UIFont {
    let family = type == .highlight ? self.highlightFontFamily : self.baseFontFamily
    
    let name = family.name(forWeight: weight)
    
    guard let font = UIFont(name: name, size: size) else {
      registerFont(at: family.path(forWeight: weight))
      if let font = UIFont(name: name, size: size) {
        return font
      }
      
      return UIFont.systemFont(ofSize: size, weight: self.uiFontWeight(with: weight))
    }
    
    return font
  }
  
  public func uiFontWeight(with weight: FreudDSFontWeight) -> UIFont.Weight {
    switch(weight) {
    case .thin:
      return UIFont.Weight.thin
    case .regular:
      return UIFont.Weight.regular
    case .semibold:
      return UIFont.Weight.semibold
    case .bold:
      return UIFont.Weight.bold
    }
  }
}
