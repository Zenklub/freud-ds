import { FilterType } from "../types";

export const CategoriesFiltersList: FilterType[] = [
  {
    name: 'isSize',
    matcher: function(token) {
      return token.attributes.category === 'size';
    }
  },
  {
    name: 'isNotSize',
    matcher: function(token) {
      return token.attributes.category !== 'size';
    }
  },
  {
    name: 'isOpacity',
    matcher: function(token) {
      return token.attributes.category === 'opacity';
    }
  },
  {
    name: 'isColor',
    matcher: function(token) {
      return token.attributes.category === 'color';
    }
  },
];
