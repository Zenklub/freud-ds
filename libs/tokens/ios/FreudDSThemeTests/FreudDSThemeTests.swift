//
//  FreudDSThemeTests.swift
//  FreudDSThemeTests
//
//  Created by Erick on 20/08/22.
//

import XCTest
@testable import FreudDSTheme

class FreudDSThemeTests: XCTestCase {
  override func setUpWithError() throws {
      // Put setup code here. This method is called before the invocation of each test method in the class.
  }

  override func tearDownWithError() throws {
      // Put teardown code here. This method is called after the invocation of each test method in the class.
  }

  func test_GetTheme() throws {
    let theme = FreudDSTheme.current.theme()
    XCTAssertEqual(theme.borderRadiusLg, 16.00)
    XCTAssertEqual(theme.borderRadiusMd, 8.00)
  }
  
  func test_SetTheme() throws {
    struct CustomTokens: FreudDSTokens {
      let borderRadiusMd: Float = 5.0
    }
    
    let tokens = CustomTokens()
    FreudDSTheme.current.setTheme(with: tokens)
    
    let theme = FreudDSTheme.current.theme()
    XCTAssertEqual(theme.borderRadiusLg, 16.00)
    XCTAssertEqual(theme.borderRadiusMd, 5.00)
  
  }
  
  func test_GetFontFamily() throws {
    var fontFamily = FreudDSTheme.current.getBaseFontFamily()
    XCTAssertEqual(fontFamily.getName(), "Source Sans Pro")
    
    fontFamily = FreudDSTheme.current.getHighlightFontFamily()
    XCTAssertEqual(fontFamily.getName(), "Source Sans Pro")
  }
  
  
  func test_SetFontFamily() throws {
    var fontFamily = FreudDSTheme.current.getBaseFontFamily()
    XCTAssertEqual(fontFamily.getName(), "Source Sans Pro")
    
    fontFamily = FreudDSTheme.current
      .setFontFamily(base: CustomFontFamily.someFamily)
      .setFontFamily(hightlight: CustomFontFamily.anotherFamily)
      .getBaseFontFamily()
    XCTAssertEqual(fontFamily.getName(), "Some Family")
    
    
    fontFamily = FreudDSTheme.current
      .getHighlightFontFamily()
    XCTAssertEqual(fontFamily.getName(), "Another Family")
  }
}

enum CustomFontFamily: FreudDSFontFamilyProtocol {
  case someFamily, anotherFamily;
  
  func getName() -> String {
    switch(self) {
    case .someFamily:
      return "Some Family"
    case .anotherFamily:
      return "Another Family"
    }
  }
  
  func getPaths() -> Array<String> {
    switch(self) {
    case .someFamily:
      return ["Some Family"]
    case .anotherFamily:
      return ["Another Family"]
    }
  }
  
  func getWeights() -> Array<Int> {
    switch(self) {
    case .someFamily:
      return [100, 500, 800]
    case .anotherFamily:
      return [100, 500, 800]
    }
  }
}
