import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { global } from "./global";

export const theme = extendTheme({
  colors: colors,
  styles: global,
});
