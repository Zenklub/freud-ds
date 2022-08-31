import { AndroidFormatters } from "./android.format";
import { FontFaceFormatters } from "./font-face.format";
import { IOSSwiftFormatters } from "./ios-swift.format";
import { JsonFormatters } from "./json-flat.format";

export const FormattersList = [
  ...AndroidFormatters,
  ...IOSSwiftFormatters,
  ...FontFaceFormatters,
  ...JsonFormatters,
];
