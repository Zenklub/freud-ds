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
 * Generated on Tue, 20 Dec 2022 18:15:33 GMT
 */


extension FreudDSFontFamily: FreudDSFontFamilyProtocol {
  // Highlight
  private func highlightPath(forWeight weight: FreudDSFontWeight) -> String {
    switch(weight) {
    case .thin:
      return "SourceSansPro-Regular"
    case .regular:
      return "SourceSansPro-Regular"
    case .semibold:
      return "SourceSansPro-SemiBold"
    case .bold:
      return "SourceSansPro-Bold"
    }
  }
  private func highlightName(forWeight weight: FreudDSFontWeight) -> String {
    switch(weight) {
    case .thin:
      return "SourceSansPro-Regular"
    case .regular:
      return "SourceSansPro-Regular"
    case .semibold:
      return "SourceSansPro-SemiBold"
    case .bold:
      return "SourceSansPro-Bold"
    }
  }

  // Base
  private func basePath(forWeight weight: FreudDSFontWeight) -> String {
    switch(weight) {
    case .thin:
      return "SourceSansPro-Regular"
    case .regular:
      return "SourceSansPro-Regular"
    case .semibold:
      return "SourceSansPro-SemiBold"
    case .bold:
      return "SourceSansPro-Bold"
    }
  }

  private func baseName(forWeight weight: FreudDSFontWeight) -> String {
    switch(weight) {
    case .thin:
      return "SourceSansPro-Regular"
    case .regular:
      return "SourceSansPro-Regular"
    case .semibold:
      return "SourceSansPro-SemiBold"
    case .bold:
      return "SourceSansPro-Bold"
    }
  }

  // Implementation
  public func path(forWeight weight: FreudDSFontWeight) -> String {
    switch(self) {
    case .base:
      return self.basePath(forWeight: weight);
    case .highlight:
      return self.highlightPath(forWeight: weight);
    }
  }

  public func name(forWeight weight: FreudDSFontWeight) -> String {
    switch(self) {
    case .base:
      return self.baseName(forWeight: weight);
    case .highlight:
      return self.highlightName(forWeight: weight);
    }
  }
}