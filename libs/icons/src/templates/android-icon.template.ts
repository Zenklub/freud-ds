export const enumNameTemplate = `{{NAME}}({{CODE}})`;

export const iconTemplate = `
package com.zenklub.freudds.icons;

public enum {{ENUM_NAME}} {
  {{ENUM_VALUES}};

  public final int iconCode;

  public final int font() {
    return R.font.{{ICON_FAMILY}};
  }

  {{ENUM_NAME}}(int iconCode) {
    this.iconCode = iconCode;
  }
}
`;

export const stringResourceTemplate = `<?xml version="1.0" encoding="utf-8"?>\n{{HEADER}}\n<resources>\n{{RESOURCES}}\n</resources>`;
export const stringTemplate = `<string name="{{NAME}}">{{CODE}}</string>`;
