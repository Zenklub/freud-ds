import { TransformersType } from "../types";
import { SCALE_PRECISION, throwSizeError } from "./transformer-helpers";

export const SizeTransformers: TransformersType[] = [
  {
    name: 'size/object',
    type: 'value',
    matcher: function(token) {
      if (token.path.includes('shadow')) return false;
      return /(px|r?em)$/gi.test(token.value.toString() || '');
    },
    transformer: function(token) {
      const val = parseFloat(token.value);
      if (isNaN(val)) throwSizeError(token.name, token.value, "object");

      return token.value?.toString()?.includes('px') ? val : val / 100;
    }
  },
  {
    name: 'size/percentageToScale',
    type: 'value',
    matcher: function(prop) {
      return prop.value?.toString()?.match(/^[\d.]+%$/);
    },
    transformer: function(prop) {
      return parseFloat((parseFloat(prop.value?.toString()?.replace(/%$/, '')) / 100).toPrecision(SCALE_PRECISION));
    }
  },
  {
    name: 'size/platformSpecific',
    type: 'value',
    matcher: function(prop) {
      return typeof prop.platform !== 'undefined';
    },
    transformer: function(prop, options) {
      return prop.platform[options.transformGroup] ?? prop.value
    }
  }
]
