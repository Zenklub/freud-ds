import fileHeader from "style-dictionary/lib/common/formatHelpers/fileHeader";
import { FormatterArguments } from "style-dictionary/types/Format";
import { KotlinTokenFileBuilder } from "../../generators/kotlin.generator";
import { FormattersType } from "../types";


export const AndroidXmlFormatters: FormattersType[] = [
  {
    name: 'freud/android/kotlin',
    formatter: function ({ dictionary, file }: FormatterArguments) {
      const header = fileHeader({ file });

      const { allTokens } = dictionary;

      const builder = new KotlinTokenFileBuilder();
      builder.addHeader(header);

      for (const token of allTokens) {
        builder.addProperty(token.name, token.value, token.comment);
      }

      return builder.build()
    }
  }
]
