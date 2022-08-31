import { TransformersType } from "../types";

export const FontFaceTransformers: TransformersType[] = [
  {
    name: 'attribute/font',
    type: 'attribute',
    transformer: function(token) {
      return {
        category: token.path[0],
        type: token.path[1],
      }
    }
  }
];
