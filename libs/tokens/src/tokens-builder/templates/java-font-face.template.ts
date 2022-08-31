export default `
package com.zenklub.freudds.theme;

public class FreudDSDefaultFonts {
  static class FreudDSBaseFontFamily implements FreudDSFontFamily {

    @Override
    public String path(FreudDSFontWeight weight) {
      switch (weight) {
        case THIN:
          return {{BASE_THIN_PATH}};
        case REGULAR:
          return {{BASE_REGULAR_PATH}};
        case SEMIBOLD:
          return {{BASE_SEMIBOLD_PATH}};
        case BOLD:
          return {{BASE_BOLD_PATH}};
      }
      return null;
    }

    @Override
    public String name(FreudDSFontWeight weight) {
      switch (weight) {
        case THIN:
          return {{BASE_THIN_NAME}};
        case REGULAR:
          return {{BASE_REGULAR_NAME}};
        case SEMIBOLD:
          return {{BASE_SEMIBOLD_NAME}};
        case BOLD:
          return {{BASE_BOLD_NAME}};
      }
      return null;
    }
  }
  static class FreudDSHighlightFontFamily implements FreudDSFontFamily {

    @Override
    public String path(FreudDSFontWeight weight) {
      switch (weight) {
        case THIN:
          return {{HIGHLIGHT_THIN_PATH}};
        case REGULAR:
          return {{HIGHLIGHT_REGULAR_PATH}};
        case SEMIBOLD:
          return {{HIGHLIGHT_SEMIBOLD_PATH}};
        case BOLD:
          return {{HIGHLIGHT_BOLD_PATH}};
      }
      return null;
    }

    @Override
    public String name(FreudDSFontWeight weight) {
      switch (weight) {
        case THIN:
          return {{HIGHLIGHT_THIN_NAME}};
        case REGULAR:
          return {{HIGHLIGHT_REGULAR_NAME}};
        case SEMIBOLD:
          return {{HIGHLIGHT_SEMIBOLD_NAME}};
        case BOLD:
          return {{HIGHLIGHT_BOLD_NAME}};
      }
      return null;
    }
  }
}
`.trim()
