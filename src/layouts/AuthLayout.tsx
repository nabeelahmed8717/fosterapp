// components
import { Box, Divider, Stack, Typography } from "@mui/material";
import authImg from "@root/assets/img/auth-img-1.png";
import authImg2 from "@root/assets/img/auth-img-2.png";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import Logo from "@root/components/Logo";
import { useTheme } from "@mui/material/styles";
import Image from "@root/components/Image";
import Link from "next/link";
import useResponsive from "@root/hooks/useResponsive";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

// ----------------------------------------------------------------------
// Constanst

const SOCIAL_LINKS = [
  { id: 1, link: "https://twitter.com/FosterApp05", icon: <BsTwitter /> },
  {
    id: 2,
    link: "https://www.facebook.com/fosterappuk",
    icon: <FaFacebookF />,
  },
  {
    id: 3,
    link: "https://www.instagram.com/_fosterapp_/?hl=en",
    icon: <BsInstagram />,
  },
  {
    id: 4,
    link: "https://www.linkedin.com/company/fosterappuk/",
    icon: <FaLinkedinIn />,
  },
  {
    id: 5,
    link: "",
    icon: <LocalPostOfficeIcon sx={{ width: 16, height: 16 }} />,
  },
];

const GENERAL_PAGES = [
  {
    title: "Cookie Policy",
    link: "/cookie-policy",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    link: "/terms-conditions",
  },
  {
    title: "Data Security",
    link: "/data-security",
  },
];

// ----------------------------------------------------------------------

export default function AuthLayout({ children, title, imageNum = 1 }: any) {
  const theme: any = useTheme();
  const isSmall = useResponsive("down", "sm");

  const image = imageNum === 1 ? authImg : authImg2;

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          pt: { xs: 2.5, sm: 6 },
          pl: { xs: 3, sm: 8 },
        }}
      >
        <Link href="/home">
          <KeyboardBackspaceIcon
            sx={{ color: theme.palette.grey[600], fontSize: "30px" }}
          />
        </Link>
      </Box>
      <Stack sx={styles.rootStack}>
        <Box sx={{ mt: { xs: 0, xl: 6.5 } }}>
          <Image
            alt="Foster App Features"
            src={image}
            sx={styles.sideImageContainer}
            style={styles.sideImage}
          />
        </Box>
        <Stack sx={styles.formStack}>
          <Logo {...styles.logo} />
          <Box sx={styles.formBox}>
            <Typography component="h1" variant="h4" sx={styles.title}>
              {title}
            </Typography>
            {children}
          </Box>
        </Stack>
      </Stack>

      <Box sx={styles.footer()}>
        <Box>
          <Typography sx={{ color: theme.palette.grey[500] }} variant="body2">
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              ©Webotic Limited{" "}
            </Box>
            2023, All rights reserved
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          {SOCIAL_LINKS.map((link: any, index) => (
            <Link
              target="__blank"
              key={link + index}
              href={link.id === 5 ? "mailto:Info@FosterApp.co.uk" : link.link}
              passHref
            >
              <Box sx={styles.socialLink}>{link.icon}</Box>
            </Link>
          ))}
        </Stack>
        <Stack
          direction="row"
          divider={!isSmall && <Divider orientation="vertical" flexItem />}
          sx={styles.generalLinksStack}
          gap={2}
          flexWrap="wrap"
        >
          {GENERAL_PAGES.map((data, index) => (
            <Link
              href={data.link}
              key={index}
              style={styles.generalLink({ isSmall, theme })}
            >
              {data.title}
            </Link>
          ))}
        </Stack>
      </Box>
    </>
  );
}

// Styles
const styles: any = {
  rootStack: (theme: any) => ({
    pt: {
      xs: theme.spacing(3),
      sm: theme.spacing(9),
      md: theme.spacing(20),
      lg: theme.spacing(4),
    },
    px: { xs: theme.spacing(0), md: theme.spacing(8) },
    flexDirection: { xs: "column", lg: "row" },
    alignItems: { xs: "center", lg: "flex-start", xl: "center" },
    justifyContent: "center",
    gap: { xs: theme.spacing(3), lg: theme.spacing(5) },
    "&>*": { flexGrow: 1 },
  }),
  formStack: (theme: any) => ({
    alignItems: "center",
    width: { xs: "90%", md: "40rem", lg: "55rem", xl: "45rem" },
    gap: theme.spacing(4),
  }),
  formBox: (theme: any) => ({
    padding: {
      xs: theme.spacing(2, 3),
      sm: theme.spacing(2, 4),
      lg: theme.spacing(2, 3, 3, 3),
      xl: theme.spacing(3, 3, 3, 3),
    },
    border: 0.5,
    borderRadius: 1,
    borderColor: theme.palette.grey[300],
    textAlign: "center",
    width: "100%",
    boxShadow: theme.shadows[5],
    position: "relative",
  }),
  sideImageContainer: {
    display: { xs: "none", lg: "block" },
  },
  sideImage: { objectFit: "contain" },
  logo: { iconHeight: 65, iconWidth: 250, variant: "theme" },
  title: { mb: 3, fontWeight: 700, textTransform: "capitalize" },
  socialLink: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: 1,
    borderRadius: "50%",
    color: theme.palette.grey[0],
  }),
  footer: () => ({
    position: { xs: "relative", sm: "fixed" },
    bottom: "0",
    backgroundColor: "transparent",
    px: 2,
    py: 1,
    mt: { xs: 2, md: 0 },
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    alignItems: "center",
    width: "100%",
    gap: 3,
    flexWrap: "wrap",
  }),
  generalLinksStack: { justifyItems: "center", "&>*": { flexGrow: 1 } },
  generalLink: ({ isSmall, theme }: any) => ({
    textAlign: isSmall ? "start" : "center",
    textDecoration: "none",
    color: theme.palette.grey[500],
  }),
};
