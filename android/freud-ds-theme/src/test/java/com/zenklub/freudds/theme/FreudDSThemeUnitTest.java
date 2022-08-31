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
 */
package com.zenklub.freudds.theme;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.*;
import org.junit.Assert;
import org.junit.Test;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
public class FreudDSThemeUnitTest {
  @Test
  public void getTheme_isCorrect() {
    FreudDSTokens theme = FreudDSTheme.current().theme();
    assertEquals(16.00f, theme.borderRadiusLg, 0.0f);
    assertEquals(8.00f, theme.borderRadiusMd, 0.0f);
  }
  @Test
  public void  setTheme_isCorrect() {
    FreudDSTokens theme = FreudDSTheme.current().theme();
    assertEquals(16.00f, theme.borderRadiusLg, 0.0f);
    assertEquals(8.00f, theme.borderRadiusMd, 0.0f);

    class CustomTheme extends FreudDSTokens {
      float borderRadiusMd = 5.00f;
    }

    CustomTheme custom = new CustomTheme();
    FreudDSTheme.current().setTheme(custom);

    CustomTheme customTheme = (CustomTheme) FreudDSTheme.current().theme();

    assertEquals(5.00F, custom.borderRadiusMd, 0.0f);
    assertEquals(5.00F, customTheme.borderRadiusMd, 0.0f);
  }

//  @Test
//  public void  fontFamily_isCorrect() {
//    FreudDSTokens fontFamily = FreudDSTheme.current().getBaseFontFamily()
//    assertEquals(fontFamily.getName(), "Source Sans Pro")
//
//    fontFamily = FreudDSTheme.current().getHighlightFontFamily()
//    assertEquals(fontFamily.getName(), "Source Sans Pro")
//  }
//
//  @Test
//  public void  setCustomFontFamily_isCorrect() {
//    FreudDSTheme fontFamily = FreudDSTheme.current().font(FreudDSFontType.BASE, FreudDSFontWeight.BOLD, 12f);
//    assertEquals(fontFamily.getName(), "Source Sans Pro")
//
//
//    fontFamily = FreudDSTheme.current
//      .setBaseFontFamily(CustomFontFamily.SOME_FAMILY)
//      .setHightlightFontFamily(CustomFontFamily.ANOTHER_FAMILY)
//      .getBaseFontFamily()
//    assertEquals(fontFamily.getName(), "Some Family")
//
//
//    fontFamily = FreudDSTheme.current
//      .getHighlightFontFamily()
//    assertEquals(fontFamily.getName(), "Another Family")
//  }
}

//enum CustomFontFamily: FreudDSFontFamily {
//  SOME_FAMILY, ANOTHER_FAMILY;
//
//  override public void  getName(): String {
//  return when (this) {
//  CustomFontFamily.SOME_FAMILY -> "Some Family"
//  CustomFontFamily.ANOTHER_FAMILY -> "Another Family"
//  }
//  }
//
//  override public void  getPaths(): Array<String> {
//  return when (this) {
//  CustomFontFamily.SOME_FAMILY -> arrayOf("Some Family")
//  CustomFontFamily.ANOTHER_FAMILY -> arrayOf("Another Family")
//  }
//  }
//
//  override public void  getWeights(): Array<Int> {
//  return when (this) {
//  CustomFontFamily.SOME_FAMILY -> arrayOf(100, 500, 800)
//  CustomFontFamily.ANOTHER_FAMILY -> arrayOf(100, 500, 800)
//  }
//  }
//  }
