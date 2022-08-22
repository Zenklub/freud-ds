export default `
extension FreudDSFontFamily: FreudDSFontFamilyProtocol {
  func getName() -> String {
    switch(self) {
    case .base:
      return {{BASE_NAME}}
    case .highlight:
      return {{HIGHLIGHT_NAME}}
    }
  }

  func getPaths() -> Array<String> {
    switch(self) {
    case .base:
      return [{{BASE_PATHS}}]
    case .highlight:
      return [{{HIGHLIGHT_PATHS}}]
    }
  }

  func getWeights() -> Array<Int> {
    switch(self) {
    case .base:
      return [{{BASE_WEIGHTS}}]
    case .highlight:
      return [{{HIGHLIGHT_WEIGHTS}}]
    }
  }
}
`.trim()
