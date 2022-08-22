import StyleDictionary from "style-dictionary";

export type FormattersType = Parameters<typeof StyleDictionary.registerFormat>[0];
export type TransformersType = Parameters<typeof StyleDictionary.registerTransform>[0];
export type TransformersGroupsType = Parameters<typeof StyleDictionary.registerTransformGroup>[0];

export interface ShadowComponent {
  type: 'shadow';
  inset: boolean;
  offsetX?: string;
  offsetY?: string;
  blurRadius?: string;
  spreadRadius?: string;
  color: string;
}
