import { AndroidXmlFormatters } from "./android-kotlin.format";
import { FontFaceFormatters } from "./font-face.format";
import { IOSSwiftFormatters } from "./ios-swift.format";
import { JsonFormatters } from "./json-flat.format";

export const FormattersList = [
  ...AndroidXmlFormatters,
  ...IOSSwiftFormatters,
  ...FontFaceFormatters,
  ...JsonFormatters,
];
