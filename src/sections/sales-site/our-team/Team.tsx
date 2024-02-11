import {
  Box,
  Grid,
  Typography,
  IconButton,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import heroVector from "@root/assets/img/hero-vector.png";
import Image from "next/image";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import bottomBottomArrow from "@root/assets/img/teams-bottom-arrow.png";
import bottomTopArrow from "@root/assets/img/teams-top-arrow.png";
import bottomRightArrow from "@root/assets/img/teams-right-arrow.png";
import { avatarsData } from ".";

const Team = () => {
  const theme: any = useTheme();
  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={{ p: { xs: "0", lg: "20px 0 10px 0", xl: "35px 0 35px 0" } }}>
        <SalesSiteHeader title="Our Team" />
      </Box>

      <Grid container justifyContent={"center"} rowSpacing={{ xs: 3, sm: 3 }}>
        {avatarsData.map((item: any) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={item.id === 3 ? 12 : 6}
            xl={item.id === 3 ? 12 : 5.5}
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative", zIndex: 9, overflow: "visible" }}>
              <Box
                sx={{
                  display: { xs: "none", lg: "unset" },
                  clipPath: "circle(50% at 50% 100%)",
                  width: 300,
                  height: 300,
                  transform: "rotate(180deg)",
                  bgcolor: item.circleColor,
                  position: "absolute",
                  top: "45%",
                  bottom: 0,
                  left: "-28%",
                  zIndex: -9,
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  left: "-36%",
                  bottom: "42%",
                  display: { xs: "none", lg: "unset" },
                }}
              >
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    mt: 1.5,
                    fontWeight: 700,
                    color: "#B8B8B8",
                    fontSize: "49px",
                  }}
                >
                  {item.shortName}
                </Typography>
              </Box>
              <Card
                sx={{
                  width: { xs: 345, md: 380 },
                  minHeight: "100%",
                  boxShadow: `0px 0px 5px 0px ${item.boxShadow}`,
                  borderRadius: "12px",
                }}
              >
                <CardContent sx={{ textAlign: "start", p: "0 20px 0 20px " }}>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{
                      mt: 1.5,
                      color: item.textColor,
                      fontWeight: 700,
                      mb: 0,
                    }}
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.grey[600],
                      mb: 1.5,
                      whiteSpace: "normal",
                      fontWeight: 500,
                    }}
                  >
                    {item.desgination}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.grey[600], lineHeight: "23px" }}
                  >
                    {item.description}
                  </Typography>
                  <Box sx={styles.socialWrapper}>
                    <IconButton href={item.facebook} sx={styles.socialIcons}>
                      <FacebookOutlinedIcon sx={styles.iconsStyling} />
                    </IconButton>
                    <IconButton href={item.twitter} sx={styles.socialIcons}>
                      <TwitterIcon sx={styles.iconsStyling} />
                    </IconButton>
                    <IconButton href={item.instagram} sx={styles.socialIcons}>
                      <InstagramIcon sx={styles.iconsStyling} />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
        <Box
          sx={{
            position: "absolute",
            left: { xs: "10%", xl: "18%" },
            bottom: 0,
            display: { xs: "none", lg: "unset" },
          }}
        >
          <Image src={bottomBottomArrow} alt="bottom-arrow" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: { xs: "8%", xl: "18%" },
            top: "25%",
            display: { xs: "none", lg: "unset" },
          }}
        >
          <Image src={bottomTopArrow} alt="bottom-arrow" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: { xs: "14%", xl: "22%" },
            top: { xs: "33%", xl: "35%" },
            display: { xs: "none", lg: "unset" },
          }}
        >
          <Image src={bottomRightArrow} alt="bottom-arrow" />
        </Box>
      </Grid>
    </Box>
  );
};

export default Team;

const styles = {
  mainWrapper: (theme: any) => ({
    backgroundColor: theme.palette.grey[0],
    // backgroundImage: `url(${heroVector.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    zIndex: 3,
    pb: { xs: 5, sm: 6, lg: 8 },
  }),

  socialWrapper: {
    display: "flex",
    justifyContent: "start",
    mt: 2,
    gap: 1,
    textAlign: "center",
  },
  socialIcons: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    color: "#888888",
    border: "1px solid #888888",
    backgroundColor: theme.palette.grey[0],
    p: 0.4,
    ":hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.grey[0],
    },
  }),
  iconsStyling: {
    height: "18px",
    width: "18px",
  },
};
