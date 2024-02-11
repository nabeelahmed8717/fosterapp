// @mui
import { styled } from "@mui/material/styles";
import { Logo } from "@root/assets/svg";
//

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 99999,
  width: "100%",
  height: "100%",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LoadingScreen() {
  return (
    <RootStyle>
      <Logo variant="theme" iconWidth={200} iconHeight={120} />
    </RootStyle>
  );
}
