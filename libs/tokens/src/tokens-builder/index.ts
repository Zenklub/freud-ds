import * as fs from "fs";
import StyleDictionary, { Config } from "style-dictionary";
import { TransformersGroupsList, TransformersList } from "./transformers";
import { FormattersList } from "./formatters";

export class StyleTokensBuilder {
  constructor() {
    this.registerTransforms();
    this.registerFormats();
  };

  // Register the custom transforms
  private registerTransforms() {
    TransformersList.forEach((transform) => {
      StyleDictionary.registerTransform(transform);
    });

    TransformersGroupsList.forEach((transform) => {
      StyleDictionary.registerTransformGroup(transform);
    });
  }

  // Register the custom formatters
  private registerFormats() {
    FormattersList.forEach((formatter) => {
      StyleDictionary.registerFormat(formatter);
    });
  }

  build(config: string | Config) {
    StyleDictionary.extend(config).buildAllPlatforms();
    return this;
  }
}
