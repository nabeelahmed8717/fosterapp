import { ReactNode, useRef } from "react";
import { SnackbarProvider } from "notistack";
// @mui
import { alpha, useTheme } from "@mui/material/styles";
import { Box, GlobalStyles, IconButton } from "@mui/material";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
// ----------------------------------------------------------------------

function SnackbarStyles() {
  const theme: any = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <GlobalStyles
      styles={{
        "#__next": {
          "& .SnackbarContent-root": {
            width: "100%",
            padding: theme.spacing(1),
            margin: theme.spacing(0.25, 0),
            boxShadow: theme.customShadows.z8,
            borderRadius: theme.shape.borderRadius,
            color: theme.palette.grey[isLight ? 0 : 800],
            backgroundColor: theme.palette.grey[isLight ? 900 : 0],
            "&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo":
              {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
              },
            [theme.breakpoints.up("md")]: {
              minWidth: 240,
            },
          },
          "& .SnackbarItem-message": {
            padding: "0 !important",
            fontWeight: theme.typography.fontWeightMedium,
          },
          "& .SnackbarItem-action": {
            marginRight: 0,
            color: theme.palette.action.active,
            "& svg": { width: 20, height: 20 },
          },
        },
      }}
    />
  );
}

// ----------------------------------------------------------------------

export default function NotistackProvider({
  children,
}: {
  children: ReactNode;
}) {
  const notistackRef: any = useRef(null);
  const theme = useTheme();
  const iconColor = theme.palette.grey["100"];

  const onClose = (key: string) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <>
      <SnackbarStyles />

      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    </>
  );
}

// ----------------------------------------------------------------------

