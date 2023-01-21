import { extendTheme } from 'native-base';
import { Components } from './Components';

import * as zenTheme from './Tokens';

export const theme = extendTheme({
  borderWidths: zenTheme.borderWidths,
  colors: zenTheme.colors,
  opacity: zenTheme.opacity,
  radii: zenTheme.radii,
  shadow: zenTheme.shadow,
  spacing: zenTheme.spacing,
  ...zenTheme.typography,
  components: Components,
  config: {
    useSystemColorMode: true,
  },
});
