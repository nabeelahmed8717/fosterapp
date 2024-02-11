import { ReactNode, useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
// hooks
import useSettings from "../hooks/useSettings";
//
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";
// ----------------------------------------------------------------------

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === "light";

  const themeOptions: any = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      spacing: 10,
      shape: { borderRadius: 4 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "&::-webkit-scrollbar": {
            width: 0,
            height: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          },
        }}
      />
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
