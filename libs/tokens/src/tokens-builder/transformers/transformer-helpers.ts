import { Platform, TransformedToken } from "style-dictionary";
import Transforms from "style-dictionary/lib/common/transforms";
import { ShadowComponent } from "../types";

export function throwSizeError(name: string, value: string, unitType: string) {
  throw `Invalid Number: '${name}: ${value}' is not a valid number, cannot transform to '${unitType}' \n`;
}

export const SCALE_PRECISION = 2;

export const shadowRegex = /(inset\s+)?(-?\d+\w+?\s+|-?\d+\s+)(-?\d+\w+?\s+|-?\d+\s+)(-?\d+\w+?\s+|-?\d+\s+)?(-?\d+\w+?\s+|-?\d+\s+)?(rgba?\(.+\)|#[a-f0-9]+|[a-z]+)(.)?/

export function isShadow(prop: TransformedToken) {
  return prop.attributes.category === 'shadow'
}

export function targetNil(target: 'swift' | 'plist' | 'android') {
  if (['swift', 'plist'].includes(target)) return 'nil';
  return 'null';
}

export function convertColorValue(value: string, toType: 'hex8' | 'hex8android', options?: Platform) {
  const { transformer } = Transforms[`color/${toType}`] ?? {};
  return transformer?.({ value, name: 'convertColorValue' }, options) ?? 'nil'
}

export function cssShadowToComponent(value: string): ShadowComponent[] {

  const [, inset, offsetX, offsetY, blurRadius, spreadRadius, color, rest] = value.match(shadowRegex);
  const shadow: ShadowComponent = {
    type: 'shadow',
    inset: !!inset,
    offsetX: offsetX?.trim(),
    offsetY: offsetY?.trim(),
    blurRadius: blurRadius?.trim(),
    spreadRadius: spreadRadius?.trim(),
    color: color ?? '#000000'
  };

  if (rest) {
    const restShadows = cssShadowToComponent(rest)
    return [shadow, ...restShadows].filter(Boolean);
  }

  return [shadow];
}
