import { SCALE_PRECISION } from "../tokens-builder/transformers/transformer-helpers";
import { ShadowComponent } from "../tokens-builder/types";

type Value = { value: unknown, comments?: string  };
type KTTypes = 'String' | 'Int' | 'Float' | 'Boolean' | 'Any' | 'Map' | 'Array';

export class KotlinTokenFileBuilder {
  private properties: Record<string, Value> = {};
  private header = '';

  addProperty(name: string, value: unknown, comments?: string) {
    this.properties[name] = {
      value,
      comments,
    }
    return this
  }

  addHeader(text: string) {
    this.header += `\n${text}`;
    return this
  }

  build() {
    const properties = this.processProperties();

    return `${this.header}\npackage com.zenklub.freudds.theme\n\nopen class FreudDSTokens {\n\t${properties}\n}`;
  }

  private processProperties() {
    return Object.keys(this.properties).flatMap((propertyName) => {
      return this.processProperty(propertyName);
    }).join('\n\t');
  }

  private processProperty(propertyName: string) {
    const val = [];

    const { comments } = this.properties[propertyName];
    if (comments) {
      val.push('', comments);
    }

    const value = this.processValueAndType(propertyName);

    val.push(`open val ${propertyName} = ${(value)}`);

    return val
  }

  private processShadow(value: ShadowComponent[]) {
    const indentation = '\n\t\t';

    const list = value.map((shadow) => {
        let {
          offsetX,
          offsetY,
          blurRadius,
          spreadRadius,
          color,
        } = shadow;

        if (!offsetX || offsetX === 'nil') offsetX = '2.00';
        if (!offsetY || offsetY === 'nil') offsetY = '2.00';
        if (!blurRadius || blurRadius === 'nil') blurRadius = '2.00';
        if (!spreadRadius || spreadRadius === 'nil') spreadRadius = '2.00';
        if (!color || color === 'nil') color = '#FF000000';
        return `FreudDSShadow(${offsetX}f, ${offsetY}f, ${blurRadius}f, ${spreadRadius}f, "${color}", ${shadow.inset})`
      })
      .join(`,${indentation}`);

    return `listOf(${indentation}${list}\n\t)`
  }

  private processValueAndType(propertyName: string) {
    const type = this.getPropertyType(propertyName);

    const { value: originalVal } = this.properties[propertyName];

    let value = `${JSON.stringify(originalVal)}`;
    if (type === 'Array') {
      const v1 = originalVal[0];
      if (v1.type === 'shadow') {
        value = this.processShadow(originalVal as ShadowComponent[]);
      } else {
        value = "";
      }
    } else if (type === 'String') {
      value = `"${originalVal}"`
    } else if (type === 'Int' || type === 'Float') {
      value = `${parseFloat(`${originalVal}`).toFixed(SCALE_PRECISION)}f`
    }

    return value;
  }

  private getPropertyType(propKey: string): KTTypes {
    const value = this.properties[propKey].value;
    switch(typeof value) {
      case 'string':
        return 'String';
      case 'bigint':
      case 'number':
        return 'Float';
      case 'boolean':
        return 'Boolean';
      case 'object':
        return Array.isArray(value) ? 'Array' : 'Map';
      default:
        return 'Any'
    }
  }
}
