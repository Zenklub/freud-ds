import { FilterType } from "../types";
import { CategoriesFiltersList } from "./categories.filters";
import { ShadowsFiltersList } from "./shadows.filters";

export const FiltersList: FilterType[] = [
  ...CategoriesFiltersList,
  ...ShadowsFiltersList,
];
