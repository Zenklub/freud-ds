import { FilterType } from "../types";

export const ShadowsFiltersList: FilterType[] = [
  {
    name: 'isShadow',
    matcher: function(token) {
      return token.attributes.category === 'shadow';
    }
  },
  {
    name: 'isNotShadow',
    matcher: function(token) {
      return token.attributes.category !== 'shadow';
    }
  }
];
