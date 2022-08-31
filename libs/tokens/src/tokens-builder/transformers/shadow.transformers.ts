import { Platform } from "style-dictionary/types/Platform";
import { TransformedToken } from "style-dictionary/types/TransformedToken";
import { TransformersType } from "../types";
import { convertColorValue, cssShadowToComponent, isShadow, SCALE_PRECISION } from "./transformer-helpers";

const transformer = (prop: TransformedToken, options: Platform, isAndroid = false) => {
  return cssShadowToComponent(prop.value.toString() ?? '').map((shadow) => ({
    type: 'shadow',
    offsetX: parseFloat(shadow.offsetX?.replace(/\D+/gi, '') ?? '2.00').toFixed(SCALE_PRECISION),
    offsetY: parseFloat(shadow.offsetY?.replace(/\D+/gi, '') ?? '2.00').toFixed(SCALE_PRECISION),
    blurRadius: parseFloat(shadow.offsetY?.replace(/\D+/gi, '') ?? '2.00').toFixed(SCALE_PRECISION),
    spreadRadius: parseFloat(shadow.offsetY?.replace(/\D+/gi, '') ?? '2.00').toFixed(SCALE_PRECISION),
    color: convertColorValue(shadow.color, isAndroid ? 'hex8android' : 'hex8', options),
    inset: shadow.inset
  }));
}

export const ShadowsTransformers: TransformersType[] = [
  {
    name: 'freud/shadow/swift',
    type: 'value',
    matcher: isShadow,
    transformer: function(prop, options) {
      return transformer(prop, options);
    }
  },
  {
    name: 'freud/shadow/android',
    type: 'value',
    matcher: isShadow,
    transformer: function(prop, options) {
      return transformer(prop, options, true);
    }
  },
  {
    name: 'freud/shadow/androidXml',
    type: 'value',
    matcher: isShadow,
    transformer: function(prop, options) {
      return transformer(prop, options, true);
    }
  }
]
