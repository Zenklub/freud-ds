import { TransformersType } from "../types";

export const OpacityTransformers: TransformersType[] = [
  {
    name: 'opacity/CGFloat',
    type: 'value',
    matcher: function(prop) {
      return prop.attributes.category === 'opacity';
    },
    transformer: function(prop) {
      return `CGFloat(${prop.value.toString()})`;
    }
  }
]
