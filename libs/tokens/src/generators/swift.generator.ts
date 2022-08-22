import { SCALE_PRECISION } from "../tokens-builder/transformers/transformer-helpers";
import { ShadowComponent } from "../tokens-builder/types";

type Value = { value: unknown, comments?: string  };
type KTTypes = 'String' | 'Int' | 'Float' | 'Bool' | 'Any' | 'Map' | 'Array' | '[FreudDSShadow]';

export class SwiftTokenFileBuilder {
  private properties: Record<string, Value> = {};
  private header = '';
  private className = 'FreudDSTokens';
  private imports: string[] = [];

  addProperty(name: string, value: unknown, comments?: string) {
    this.properties[name] = {
      value,
      comments,
    }
    return this
  }

  addHeader(text: string) {
    this.header += `\n${text}`;
    return this;
  }

  setClassName(className: string) {
    this.className = className;
    return this;
  }

  addImports(...importNames: string[]) {
    this.imports.push(...importNames);
    return this;
  }

  build() {
    const properties = this.processProperties();
    const imports = this.imports.map((item) => `import ${item}\n`);

    return `${this.header}\n${imports}\n\nextension ${this.className} {\n\t${properties}\n}`;
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

    const { value, type } = this.processValueAndType(propertyName);

    val.push(`var ${propertyName}: ${type} { ${(value)} }`);

    return val
  }

  private processShadow(value: ShadowComponent[]) {
    const indentation = '\n\t\t\t';

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
        return `FreudDSShadow(offsetX: ${offsetX}, offsetY: ${offsetY}, blurRadius: ${blurRadius}, spreadRadius: ${spreadRadius}, color: "${color}", inset: ${shadow.inset})`
      })
      .join(`,${indentation}`);

    return `\n\t\t[${indentation}${list}\n\t\t]\n`
  }

  private processValueAndType(propertyName: string) {
    let type = this.getPropertyType(propertyName);

    const { value: originalVal } = this.properties[propertyName];

    let value = `${JSON.stringify(originalVal)}`;
    if (type === 'Array') {
      const v1 = originalVal[0];
      if (v1.type === 'shadow') {
        type = '[FreudDSShadow]';
        value = this.processShadow(originalVal as ShadowComponent[]);
      } else {
        value = "";
      }
    } else if (type === 'String') {
      value = `"${originalVal}"`
    } else if (type === 'Int' || type === 'Float') {
      value = parseFloat(`${originalVal}`).toFixed(SCALE_PRECISION)
    }

    return { value, type };
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
        return 'Bool';
      case 'object':
        return Array.isArray(value) ? 'Array' : 'Map';
      default:
        return 'Any'
    }
  }
}
