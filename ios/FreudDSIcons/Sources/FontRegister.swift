//
//  FontRegister.swift
//  FreudDSIcons
//
//  Created by Erick on 31/08/22.
//

import Foundation
import UIKit

class FontRegister {
  private static var registered: UIFont?
  
  public static func register(at path: String, named: String) -> UIFont? {
    if FontRegister.registered == nil {
      let podBundle = Bundle(for: FontRegister.self)
      guard let bundleURL = podBundle.url(forResource: "FreudDSIconsFonts", withExtension: "bundle") else {
        print("could not find podBundle")
        return nil
      }
      guard let url = Bundle(url: bundleURL)?.url(forResource: path, withExtension: "ttf") else {
        print("could not find font \(path)")
        return nil
      }
      
      print("registering font at \(url.absoluteString)")
      guard let fontDataProvider = CGDataProvider(url: url as CFURL) else {
        print("Could not create font data provider for \(url).")
        return nil
      }
      guard let font = CGFont(fontDataProvider) else {
        print("could not create font")
        return nil
      }
      var error: Unmanaged<CFError>?
      if !CTFontManagerRegisterGraphicsFont(font, &error) {
        print(error!.takeUnretainedValue())
      }
      
      FontRegister.registered = UIFont(name: named, size: 24)
    }
    return FontRegister.registered
  }
}
