import { SCALE_PRECISION } from "../tokens-builder/transformers/transformer-helpers";
import { ShadowComponent } from "../tokens-builder/types";

type Value = { shadows: ShadowComponent[], comments?: string  };

export class AndroidShadowTokenFileBuilder {
  private properties: Record<string, Value> = {};
  private header = '';

  addProperty(name: string, shadows: ShadowComponent[], comments?: string) {
    this.properties[name] = {
      shadows,
      comments,
    }
    return this
  }

  addHeader(text: string) {
    this.header += `\n${text}\n`;
    return this
  }

  build() {
    const properties = this.processProperties();

    return `<?xml version="1.0" encoding="utf-8"?>${this.header}\n<resources>\n\t${properties}\n</resources>`;
  }

  private genTag(tag: 'dimen' | 'color' | 'bool', name: string, value: string | boolean | number) {
    const val = tag === 'dimen' ? `${parseFloat(`${value}`).toFixed(SCALE_PRECISION)}dp` : `${value}`;
    return `<${tag} name="${name}">${val}</${tag}>`
  }

  private processProperties() {
    return Object.keys(this.properties).flatMap((propertyName, index) => {
      return this.processProperty(propertyName, index + 1);
    }).join('\n\t');
  }

  private processProperty(propertyName: string, level: number) {
    const val = [];

    const { comments, shadows } = this.properties[propertyName];

    if (comments) {
      val.push('', `<!--\nShadow level ${level}\n ${comments}\n-->`);
    } else {
      val.push(`<!-- Shadow level ${level} -->`);
    }


    const tags = shadows.flatMap((shadow, index) => {
      const suffix = shadows.length > 1 ? `${propertyName}_${index}` : propertyName;
      return [
        this.genTag('dimen', `${suffix}_offset_x`, shadow.offsetX ?? 0.00),
        this.genTag('dimen', `${suffix}_offset_y`, shadow.offsetY ?? 0.00),
        this.genTag('dimen', `${suffix}_blur_radius`, shadow.blurRadius ?? 0.00),
        this.genTag('dimen', `${suffix}_spread_radius`, shadow.spreadRadius ?? 0.00),
        this.genTag('bool', `${suffix}_inset`, shadow.inset),
        this.genTag('color', `${suffix}_color`, shadow.color),
        '',
      ];
    });
    val.push(...tags)


    return val
  }
}
