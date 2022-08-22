
import { TransformersType } from "../types";
import kebabCase from 'lodash/kebabCase';

export const NamesTransformers: TransformersType[] = [
  {
    name: 'name/ti/kebab',
    type: 'name',
    transformer: function(token, options) {
      return kebabCase([options.prefix].concat(token.path.slice(1, token.path.length)).join(' '));
    }
  }
]
