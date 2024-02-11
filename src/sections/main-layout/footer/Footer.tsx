import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Grid from "@mui/material/Grid";
import { Icon, useTheme } from "@mui/material";
import { Logo } from "@root/assets/svg";
import { addressItems, socialLinks, endListItems } from "./index";
import footerBg from "@root/assets/img/footer-bg.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const theme: any = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box component="footer" sx={styles.footerWrapper}>
      <Grid container sx={{ padding: { xs: "30px 0 0 0 ", md: "80px 0 0 0" } }}>
        <Grid item xs={12} lg={5} sx={styles.firstGridStyling}>
          <Image
            src={footerBg}
            alt="icons"
            style={{
              position: "absolute",
              top: "-100px",
              left: 0,
              zIndex: 0,
            }}
          />
          <Logo
            variant="light"
            iconWidth={200}
            iconHeight={50}
            sx={{ mb: 2 }}
          />
          <Typography
            variant="subtitle2"
            sx={{
              color: theme.palette.grey[500],
              zIndex: 2,
              position: "relative",
            }}
          >
            Foster App Limited <strong>(ORCALO)</strong> is a Registered Company
            in England
          </Typography>
          <Box sx={styles.socialLinksWrapper}>
            {socialLinks.map((item: any) => (
              <Link
                key={item.id}
                href={
                  item.id === 2 ? "mailto:fosterapp001@gmail.com" : item.link
                }
                target="__blank"
              >
                <Icon sx={styles.socialIcons}>{item.icon}</Icon>
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Address Column Started */}
        <Grid item xs={12} lg={5} sx={{ px: { xs: 1, lg: 0 } }}>
          <Box sx={{ textAlign: "start" }}>
            <Typography
              variant="h5"
              sx={{ mb: 2, color: theme.palette.grey[0] }}
            >
              Get In Touch
            </Typography>
            {addressItems.map((item: any) => (
              <Box key={item.id} sx={styles.addressColumnStyling}>
                <div>
                  <Icon sx={{ color: theme.palette.grey[500] }}>
                    {item.icon}
                  </Icon>
                </div>
                <div>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      whiteSpace: "pre-line",
                      color: theme.palette.grey[500],
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </Typography>
                </div>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      {/* End Footer List Started */}
      <Grid container sx={styles.endListWrapper}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            px: { xs: 1, lg: 10, xl: 20 },
          }}
        >
          <Typography variant="subtitle2" sx={styles.copyRightText}>
            ©Webotic Limited 2023, All rights reserved
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} sx={styles.endList}>
          {endListItems.map((item: any) => (
            <Link
              href={item.link}
              key={item.id}
              style={{ textDecoration: "none", textAlign: "start" }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[500], fontWeight: 500 }}
              >
                {item.title}
              </Typography>
            </Link>
          ))}
        </Grid>
      </Grid>
      {/* Scroll To Top Code Started */}
      <IconButton
        sx={styles.iconButton}
        className={`${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;

const styles: any = {
  footerWrapper: {
    backgroundColor: "#1A202E",
    position: "relative",
  },
  socialLinksWrapper: (theme: any) => ({
    display: "flex",
    gap: "10px",
    mt: 3,
    zIndex: 2,
    position: "relative",
  }),
  socialIcons: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    color: theme.palette.grey[500],
    mb: { xs: "40px", sm: "30px", lg: 10 },
    border: `1px solid ${theme.palette.grey[500]}`,
    padding: 1.8,
  }),
  firstGridStyling: (theme: any) => ({
    px: { xs: 1, sm: 2, lg: 10, xl: 20 },
    textAlign: { xs: "start" },
    position: "relative",
    zIndex: 2,
  }),
  endListWrapper: (theme: any) => ({
    borderTop: `1px solid #1C393A`,
    py: 2,
    mt: { xs: 2, sm: 0 },
  }),
  copyRightText: (theme: any) => ({
    textAlign: { xs: "start", sm: "center", lg: "start" },
    color: theme.palette.grey[500],
    fontWeight: 500,
  }),
  endList: (theme: any) => ({
    display: "flex",
    gap: "20px",
    flexDirection: { xs: "column", sm: "row" },
    px: { xs: 1, lg: 0 },
    mt: { xs: 2, lg: 0 },
    justifyContent: { xs: "start", sm: "center", lg: "start" },
  }),
  addressColumnStyling: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
    mb: 1.5,
  },
  iconButton: (theme: any) => ({
    position: "fixed",
    bottom: { xs: "30px", md: "80px" },
    right: { xs: "20px", sm: "30px" },
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    opacity: 0,
    visibility: "hidden",
    zIndex: 3,
    "&.show": {
      opacity: 1,
      visibility: "visible",
    },
    color: theme.palette.grey[0],
    background: theme.palette.primary.main,
    transition: "all 0.4s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.grey[700],
    },
  }),
};
