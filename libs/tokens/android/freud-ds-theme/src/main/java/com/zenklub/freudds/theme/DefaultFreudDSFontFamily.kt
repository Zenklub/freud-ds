package com.zenklub.freudds.theme

enum class DefaultFreudDSFontFamily: FreudDSFontFamily {
  BASE, HIGHLIGHT;

  override fun getName(): String {
    return when (this) {
      DefaultFreudDSFontFamily.BASE -> "Source Sans Pro"
      DefaultFreudDSFontFamily.HIGHLIGHT -> "Source Sans Pro"
    }
  }

  override fun getPaths(): Array<String> {
    return when (this) {
      DefaultFreudDSFontFamily.BASE -> arrayOf("fonts/SourceSansPro-Regular","fonts/SourceSansPro-Semibold","fonts/SourceSansPro-Bold")
      DefaultFreudDSFontFamily.HIGHLIGHT -> arrayOf("fonts/SourceSansPro-Regular","fonts/SourceSansPro-Semibold","fonts/SourceSansPro-Bold")
    }
  }

  override fun getWeights(): Array<Int> {
    return when (this) {
      DefaultFreudDSFontFamily.BASE -> arrayOf(400,600,700)
      DefaultFreudDSFontFamily.HIGHLIGHT -> arrayOf(400,600,700)
    }
  }
}
