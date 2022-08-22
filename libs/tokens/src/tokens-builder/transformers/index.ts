import { TransformersGroupsType } from "../types";
import { FontFaceTransformers } from "./font-face.transformers";
import { NamesTransformers } from "./names.transformers";
import { OpacityTransformers } from "./opacity.transformers";
import { ShadowsTransformers } from "./shadow.transformers";
import { SizeTransformers } from "./size.transformers";

export const TransformersList = [
  ...SizeTransformers,
  ...ShadowsTransformers,
  ...OpacityTransformers,
  ...NamesTransformers,
  ...FontFaceTransformers,
];


export const TransformersGroupsList: TransformersGroupsType[] = [
  {
    name: 'freud/ios/swift',
    // to see the pre-defined "ios" transformation use: console.log(StyleDictionaryPackage.transformGroup['ios']);
    transforms: [
      'attribute/cti',
      'name/ti/camel',
      'color/hex8',
      'font/swift/literal',
      'freud/shadow/swift',
      'size/platformSpecific',
      'size/percentageToScale',
      'size/object',
    ]
  },
  {
    name: 'freud/android/kotlin',
    transforms: [
      'attribute/cti',
      'name/ti/camel',
      'color/hex8android',
      'freud/shadow/android',
      'size/platformSpecific',
      'size/percentageToScale',
      'size/object',
    ]
  }
]
