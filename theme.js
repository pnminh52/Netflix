import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode(
        props.theme.semanticTokens.colors["chakra-body-bg"]._light,
        "blackAlpha.900"
      )(props),
    },
    "::-webkit-scrollbar": {
      width: "3px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "red",
    },
    "::-webkit-scrollbar-thumb:hover": {
      cursor: "pointer",
    },
    "::-webkit-scrollbar-track": {
      background: "gray.900",
    },
  }),
};

const theme = extendTheme({ config, styles });

export default theme;
