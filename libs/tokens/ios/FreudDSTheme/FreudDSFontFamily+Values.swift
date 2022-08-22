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
 * Generated on Mon, 22 Aug 2022 18:39:03 GMT
 */


extension FreudDSFontFamily: FreudDSFontFamilyProtocol {
  func getName() -> String {
    switch(self) {
    case .base:
      return "Source Sans Pro"
    case .highlight:
      return "Source Sans Pro"
    }
  }

  func getPaths() -> Array<String> {
    switch(self) {
    case .base:
      return ["fonts/SourceSansPro-Regular","fonts/SourceSansPro-Semibold","fonts/SourceSansPro-Bold"]
    case .highlight:
      return ["fonts/SourceSansPro-Regular","fonts/SourceSansPro-Semibold","fonts/SourceSansPro-Bold"]
    }
  }

  func getWeights() -> Array<Int> {
    switch(self) {
    case .base:
      return [400,600,700]
    case .highlight:
      return [400,600,700]
    }
  }
}