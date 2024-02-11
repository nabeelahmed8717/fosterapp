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
     
    </>
  );
}

// ----------------------------------------------------------------------

function SnackbarIcon({ icon, color }: any) {
  return (
   <></>
  );
}
