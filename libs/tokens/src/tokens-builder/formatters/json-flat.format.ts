import { FormatterArguments } from "style-dictionary/types/Format";
import { FormattersType } from "../types";


export const JsonFormatters: FormattersType[] = [
  {
    name: 'json/flat',
    formatter: function({ dictionary }: FormatterArguments) {
        return JSON.stringify(dictionary.allProperties, null, 2);
    }
  }
];
