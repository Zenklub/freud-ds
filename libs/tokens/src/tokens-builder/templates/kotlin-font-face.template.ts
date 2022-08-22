export default `
package com.zenklub.freudds.theme

enum class DefaultFreudDSFontFamily: FreudDSFontFamily {
  BASE, HIGHLIGHT;

  override fun getName(): String {
    return when (this) {
      DefaultFreudDSFontFamily.BASE -> {{BASE_NAME}}
      DefaultFreudDSFontFamily.HIGHLIGHT -> {{HIGHLIGHT_NAME}}
    }
  }

  override fun getPaths(): Array<String> {
    return when (this) {
      DefaultFreudDSFontFamily.BASE -> arrayOf({{BASE_PATHS}})
      DefaultFreudDSFontFamily.HIGHLIGHT -> arrayOf({{HIGHLIGHT_PATHS}})
    }
  }

  override fun getWeights(): Array<Int> {
    return when (this) {
      DefaultFreudDSFontFamily.BASE -> arrayOf({{BASE_WEIGHTS}})
      DefaultFreudDSFontFamily.HIGHLIGHT -> arrayOf({{HIGHLIGHT_WEIGHTS}})
    }
  }
}
`.trim()
