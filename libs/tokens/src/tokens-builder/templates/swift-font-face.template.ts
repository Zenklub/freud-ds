export default `
extension FreudDSFontFamily: FreudDSFontFamilyProtocol {
  // Highlight
  private func highlightPath(forWeight weight: FreudDSFontWeight) -> String {
    switch(weight) {
    case .thin:
      return {{HIGHLIGHT_THIN_PATH}}
    case .regular:
      return {{HIGHLIGHT_REGULAR_PATH}}
    case .semibold:
      return {{HIGHLIGHT_SEMIBOLD_PATH}}
    case .bold:
      return {{HIGHLIGHT_BOLD_PATH}}
    }
  }
  private func highlightName(forWeight weight: FreudDSFontWeight) -> String {
    switch(weight) {
    case .thin:
      return {{HIGHLIGHT_THIN_NAME}}
    case .regular:
      return {{HIGHLIGHT_REGULAR_NAME}}
    case .semibold:
      return {{HIGHLIGHT_SEMIBOLD_NAME}}
    case .bold:
      return {{HIGHLIGHT_BOLD_NAME}}
    }
  }

  // Base
  private func basePath(forWeight weight: FreudDSFontWeight) -> String {
    switch(weight) {
    case .thin:
      return {{BASE_THIN_PATH}}
    case .regular:
      return {{BASE_REGULAR_PATH}}
    case .semibold:
      return {{BASE_SEMIBOLD_PATH}}
    case .bold:
      return {{BASE_BOLD_PATH}}
    }
  }

  private func baseName(forWeight weight: FreudDSFontWeight) -> String {
    switch(weight) {
    case .thin:
      return {{BASE_THIN_NAME}}
    case .regular:
      return {{BASE_REGULAR_NAME}}
    case .semibold:
      return {{BASE_SEMIBOLD_NAME}}
    case .bold:
      return {{BASE_BOLD_NAME}}
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
`.trim()
