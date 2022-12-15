export const swiftEnumNameTemplate = `case {{NAME}} = "{{CODE}}"`;

export const swiftIconTemplate = `
public enum {{ENUM_NAME}}: String, CaseIterable {
  {{ENUM_VALUES}}

  public static let font = FontRegister.register(at: "{{ICON_FAMILY}}")
}
`;
