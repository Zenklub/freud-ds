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

import android.content.Context;
import android.graphics.Typeface;
import android.graphics.fonts.FontFamily;
import android.graphics.fonts.FontStyle;

import androidx.core.content.res.ResourcesCompat;

import java.io.File;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

public class FreudDSTheme<T extends FreudDSTokens> {
  private static class FreudDSDefaultTokens extends FreudDSTokens {}

  private T tokens;
  public FreudDSTheme(T tokens) {
    this.tokens = tokens;
  }

  private static FreudDSTheme _current;

  public static FreudDSTheme current() {
    if (FreudDSTheme._current == null) {
      FreudDSTokens tokens = new FreudDSDefaultTokens();
      FreudDSTheme._current = new FreudDSTheme(tokens);
    }
    return FreudDSTheme._current;
  }

  public FreudDSTheme setTheme(T theme) {
    this.tokens = theme;
    return this;
  }

  public T theme() {
    return this.tokens;
  }

  private FreudDSFontFamily baseFontFamily = new FreudDSDefaultFonts.FreudDSBaseFontFamily();
  private FreudDSFontFamily highlightFontFamily = new FreudDSDefaultFonts.FreudDSHighlightFontFamily();

  public FreudDSTheme setBaseFontFamily(FreudDSFontFamily fontFamily) {
    this.baseFontFamily = fontFamily;
    return this;
  }

  private Context appContext;

  public FreudDSTheme setAppContext(Context context) {
    this.appContext = context;
    return this;
  }

  public FreudDSTheme setHighlightFontFamily(FreudDSFontFamily fontFamily) {
    this.highlightFontFamily = fontFamily;
    return this;
  }

  public int font(FreudDSFontType type) {
    switch (type) {
      case HIGHLIGHT:
        return R.font.freud_ds_highlight_font;
      default:
        return R.font.freud_ds_base_font;
    }
  }

  public Typeface typeFace(FreudDSFontType type, FreudDSFontWeight weight) {
    int id = this.font(type);
    Typeface typeFace = ResourcesCompat.getFont(this.appContext, id);
    switch (weight) {
      case SEMIBOLD:
      case BOLD:
        return Typeface.create(typeFace, Typeface.BOLD);
      default:
        return Typeface.create(typeFace, Typeface.NORMAL);
    }

  }
}
