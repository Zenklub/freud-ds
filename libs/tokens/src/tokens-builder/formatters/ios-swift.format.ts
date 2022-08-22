import fileHeader from "style-dictionary/lib/common/formatHelpers/fileHeader";
import { FormatterArguments } from "style-dictionary/types/Format";
import { FormattersType } from "../types";
import { SwiftTokenFileBuilder } from "../../generators/swift.generator";


export const IOSSwiftFormatters: FormattersType[] = [
  {
    name: 'freud/ios/extension.swift',
    formatter: function ({ dictionary, file, }: FormatterArguments) {
      const header = fileHeader({ file });

      const { allTokens } = dictionary;
      const builder = new SwiftTokenFileBuilder();
      builder
        .addHeader(header)
        .addImports(...(file.options?.import ?? []))

      if (file.className) builder.setClassName(file.className)


      for (const token of allTokens) {
        builder.addProperty(token.name, token.value, token.comment);
      }

      return builder.build()
    }
}
];
