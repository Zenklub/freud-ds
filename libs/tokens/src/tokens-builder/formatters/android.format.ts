import fileHeader from "style-dictionary/lib/common/formatHelpers/fileHeader";
import { FormatterArguments } from "style-dictionary/types/Format";
import { JavaTokenFileBuilder } from "../../generators/java.generator";
import { AndroidShadowTokenFileBuilder } from "../../generators/android-shadow.generator";
import { FormattersType } from "../types";


export const AndroidFormatters: FormattersType[] = [
  {
    name: 'freud/android/java',
    formatter: function ({ dictionary, file }: FormatterArguments) {
      const header = fileHeader({ file });

      const { allTokens } = dictionary;

      const builder = new JavaTokenFileBuilder();
      builder.addHeader(header);

      for (const token of allTokens) {
        builder.addProperty(token.name, token.value, token.comment);
      }

      return builder.build()
    }
  },
  {
    name: 'freud/android/shadowResources',
    formatter: function ({ dictionary, file }: FormatterArguments) {
      const header = fileHeader({ file, commentStyle: 'xml' });

      const { allTokens } = dictionary;

      const builder = new AndroidShadowTokenFileBuilder();
      builder.addHeader(header);

      for (const token of allTokens) {
        builder.addProperty(token.name, token.value, token.comment);
      }

      return builder.build()
    }
  }
]
