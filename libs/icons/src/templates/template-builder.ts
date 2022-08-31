
export class TemplateBuilder {
  constructor(private template: string) {}

  private replacements: Record<string, string> = {};

  public static with(template: string) {
    return new TemplateBuilder(template);
  }

  setReplacement(key: string, value: string): TemplateBuilder {
    return this.setReplacements({ [key]: value });
  }

  setReplacements(values: Record<string, string>): TemplateBuilder {
    this.replacements = {
      ...this.replacements,
      ...values,
    }
    return this;
  }

  build() {
    return Object.keys(this.replacements).reduce((template, key) => {
      const value = this.replacements[key];
      return template.replace(new RegExp(`{{\\s?${key}\\s?}}`, 'gm'), value)
    }, this.template)
  }
}
