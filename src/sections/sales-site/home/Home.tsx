import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import homeHeroImage from "@root/assets/img/2x-hero-image.png";
import fosteringImage from "@root/assets/img/fostering-img.png";
import empowerVector from "@root/assets/img/empower-vector.png";
import Image from "next/image";
import { CustumeSplide, highlightsCardData, sliderData } from ".";
import Link from "next/link";
import foosteringIcon from "@root/assets/img/fostering-icon.png";
import foosteringBgImage from "@root/assets/img/fostering-bg-img.png";
import heroVector from "@root/assets/img/hero-vector.png";
import sliderVector from "@root/assets/img/slider-bg.png";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const theme: any = useTheme();
  //Initialization the AOS library
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <Box sx={{ backgroundColor: theme.palette.grey[0] }}>
      <Box sx={styles.header}>
        <Box
          sx={styles.heroSvg}
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1400"
          data-aos-easing="ease-in-out"
        >
          <Image src={heroVector} alt="fostering-icon" />
        </Box>
        <Grid container alignItems="center" sx={styles.mainGrid}>
          <Grid item xs={12} lg={6} sx={{ mt: 2, lg: 0 }}>
            <Typography
              variant="h1"
              sx={styles.heroTitle}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Innovation <br /> {`&`} {""}
              <Typography
                component={"span"}
                variant="h1"
                sx={{
                  color: theme.palette.warning.darker,
                  fontWeight: 600,
                }}
              >
                Empowering Lives
              </Typography>
            </Typography>
            <Typography
              variant="h3"
              sx={styles.heroDescription}
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Elevate Social Care With Foster App
            </Typography>
            <Link href="/contact-us" style={{ textDecoration: "none" }}>
              <Button
                sx={styles.heroButton}
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Get a Demo
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ display: { xs: "none", sm: "block" } }}
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Image
              src={homeHeroImage}
              alt="hero-image"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box sx={styles.pageSvg}>
          <Image src={foosteringBgImage} alt="fostering-icon" />
        </Box>
        <Box sx={{ textAlign: "center", mt: { xs: 4, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{ color: theme.palette.grey[700], fontWeight: 600 }}
          >
            Empowering Independent
            <Typography component={"span"} variant="h3" sx={styles.agencyTitle}>
              {` Fostering \n Agencies `}
            </Typography>
            <Typography
              component={"span"}
              variant="h3"
              sx={{ color: theme.palette.grey[700], fontWeight: 600 }}
            >
              Through Technology
            </Typography>
          </Typography>
          <Typography variant="subtitle1" sx={styles.aboutDesc}>
            {`At Foster App, we're not just a software company – we're agents of change. We're on a mission to empower independent fostering agencies\n with the technology they need to thrive in today's dynamic world. `}
          </Typography>
        </Box>
        <Grid
          container
          sx={{ p: { xs: 2, sm: 8 } }}
          alignItems="center"
          justifyContent="center"
          columnSpacing={{ xs: 0, lg: 15, xl: 15 }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "end" },
            }}
          >
            <Box sx={{ position: "relative", mb: { xs: 3, sm: 0 } }}>
              <Image
                src={fosteringImage}
                alt="fostering-image"
                style={{ zIndex: 2, position: "relative", height: "100%" }}
              />
              <Image
                src={foosteringIcon}
                alt="fostering-icon"
                style={{
                  position: "absolute",
                  top: "-60px",
                  left: "-62px",
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={styles.innovationGrid}>
            <Typography variant="h4" sx={styles.unleashTitle}>
              Unleash the Power of Innovation
            </Typography>
            <Typography variant="subtitle1" sx={styles.innovationDesc}>
              {`Imagine a world where paperwork takes a back seat, where
              communication is instant, and where data-driven insights
              steer your decisions. Welcome to Foster App – where
              innovation is our driving force.`}
            </Typography>
            <Typography variant="h4" sx={styles.barriersTitle}>
              Breaking Barriers, Connecting Hearts
            </Typography>
            <Typography variant="subtitle1" sx={styles.barriersDesc}>
              {`Our cutting-edge platform bridges the gap between fostering
              professionals, foster parents, and the children who deserve the
              very best. We're not just streamlining processes; we're nurturing
              connections that matter. `}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center", p: { xs: 2, sm: 3, lg: 8 } }}>
        <Typography
          variant="h3"
          sx={{ color: theme.palette.grey[700], fontWeight: 600 }}
        >
          Key Highlights of Foster App
        </Typography>
        <Grid
          container
          sx={{ mt: { xs: 1, sm: 3 } }}
          columnSpacing={3}
          rowSpacing={3}
          justifyContent={"center"}
        >
          {highlightsCardData.map((item: any) => (
            <Grid item xs={12} sm={6} md={6} lg={3.5} xl={3.1} key={item.id}>
              <Card sx={styles.hightlightCard}>
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Image src={item.icon} alt="icons" width={70} height={70} />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mt: 1.5,
                      mb: 2,
                      color: theme.palette.grey[700],
                      fontWeight: 500,
                    }}
                  >
                    {item.mainTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      whiteSpace: { xs: "normal", xl: "pre-line" },
                      lineHeight: "24px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Empower Change Card */}
      <Grid container justifyContent={"center"} sx={{ pb: { xs: 2, sm: 8 } }}>
        <Grid item xs={10} xl={8.5}>
          <Box sx={styles.empowerCardWrapper}>
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[0],
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Ready to Empower Change?
              </Typography>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image
                  src={empowerVector}
                  alt="empower-vector"
                  style={{
                    position: "absolute",
                    top: "-140px",
                    left: "-100px",
                    zIndex: 0,
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Typography variant="subtitle1" sx={styles.empowerDesc}>
                {` Are you prepared to lead your agency into a future powered by innovation and compassion? Let's\n embark on this transformative journey  together. Contact us to learn more about how Foster App can\n drive your agency forward.`}
              </Typography>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Image
                  src={empowerVector}
                  alt="empower-vector"
                  style={{
                    position: "absolute",
                    top: "-140px",
                    right: "-100px",
                    zIndex: 0,
                  }}
                />
              </Box>
            </Box>
            <Link href="/contact-us" style={styles.mobContactButton}>
              <Typography variant="subtitle2" sx={styles.contactButton}>
                Get In Touch Today
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
      {/* p: { xs: 2, sm: 8 } */}
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          px: { xs: 1, sm: 0 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.grey[700],
            fontWeight: 600,
            mt: { xs: 4, md: 3, lg: 5 },
          }}
        >
          Join the Movement, Be the Change
        </Typography>
      </Box>
      {/* Slider Section Started */}
      <Box style={{ position: "relative" }}>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={sliderVector}
            alt="empower-vector"
            style={{
              position: "absolute",
              zIndex: 0,
              width: "100%",
              top: "-110px",
            }}
          />
        </Box>
        <CustumeSplide hasTrack={false}>
          <SplideTrack>
            <SplideSlide>
              <Grid
                container
                sx={{
                  pb: { xs: 2, sm: 4 },
                  pl: { xs: 1.5, sm: 4, md: 0 },
                  pr: { xs: 1.5, sm: 4, md: 0 },
                }}
                justifyContent={"center"}
                columnSpacing={3}
                rowSpacing={3}
              >
                {sliderData.map((item: any) => (
                  <Grid item key={item.id} xs={12} sm={6} md={5} lg={3.5}>
                    <Card
                      sx={{
                        p: 2,
                        mt: 1,
                        textAlign: "center",
                        boxShadow: 3,
                        height: "100%",
                      }}
                    >
                      <CardContent>
                        <Typography variant="h6" sx={styles.mainTitle}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.grey[600],
                            mt: 3,
                            lineHeight: "28px",
                            fontWeight: 500,
                          }}
                        >
                          {item.description}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: theme.palette.grey[900],
                            mt: 3,
                            fontWeight: 600,
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: theme.palette.grey[600],
                            lineHeight: "28px",
                            fontWeight: 500,
                          }}
                        >
                          {item.desgination}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </SplideSlide>
          </SplideTrack>
        </CustumeSplide>
      </Box>
    </Box>
  );
};

export default Home;

const styles: any = {
  mainTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    display: "inline-block",
    fontWeight: 700,
  }),

  mainGrid: (theme: any) => ({
    maxWidth: "85%",
    margin: "0 auto",
    height: { xs: "100%", sm: "95%", md: "100%" },
  }),

  heroTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    position: "relative",
    zIndex: 3,
  }),

  heroDescription: (theme: any) => ({
    color: theme.palette.grey[600],
    mt: 2,
    fontWeight: 400,
    position: "relative",
    zIndex: 3,
  }),

  heroButton: (theme: any) => ({
    mb: { xs: 3, md: 5 },
    mt: 2,
    fontWeight: 400,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[0],
    padding: "10px 20px",
    textTransform: "unset",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey[0],
    },
  }),

  innovationGrid: (theme: any) => ({
    textAlign: { xs: "center", lg: "start" },
    mt: { xs: 2, sm: 4, lg: 0 },
    position: "relative",
    zIndex: 2,
  }),

  heroSvg: (theme: any) => ({
    position: "absolute",
    top: 0,
    left: "120px",
    display: { xs: "none", lg: "block", zIndex: 0 },
  }),

  pageSvg: (theme: any) => ({
    position: "absolute",
    right: 0,
    top: "-50px",
    display: { xs: "none", sm: "block" },
  }),

  aboutTitle: (theme: any) => ({
    color: theme.palette.grey[600],
    display: "inline-block",
    fontWeight: 700,
  }),

  aboutDesc: (theme: any) => ({
    color: theme.palette.grey[500],
    mt: 2,
    whiteSpace: "pre-line",
    p: { xs: 1, sm: 0 },
    lineHeight: "26px",
    mb: { xs: 3, sm: 0 },
    fontWeight: 500,
  }),

  agencyTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    whiteSpace: { xs: "normal", sm: "pre-line" },
    fontWeight: 600,
  }),

  barriersTitle: (theme: any) => ({
    color: theme.palette.grey[700],
    whiteSpace: { xs: "normal", sm: "pre-line" },
    fontWeight: 600,
    mt: { xs: 3, sm: 5 },
  }),

  unleashTitle: (theme: any) => ({
    color: theme.palette.grey[700],
    whiteSpace: { xs: "normal", sm: "pre-line" },
    fontWeight: 600,
  }),

  innovationDesc: (theme: any) => ({
    color: theme.palette.grey[500],
    mt: 1,
    lineHeight: "26px",
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
  }),

  barriersDesc: (theme: any) => ({
    color: theme.palette.grey[500],
    mt: 1,
    lineHeight: "26px",
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
  }),

  hightlightCard: (theme: any) => ({
    height: "100%",
    textAlign: "center",
    p: { xs: 0, lg: 3 },
    position: "relative",
    overflow: "hidden",
    backgroundColor: `rgba(72, 183, 116, 0.05)`,
    "&:hover": {
      boxShadow: "7px 6px 3.5px -1px rgb(14 145 140 / 74%)",
    },
  }),

  empowerCardWrapper: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    p: { xs: 3, lg: 8 },
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "8px 8px #C2FFE9, 16px 16px #CFE9E8",
    overflow: "hidden",
    mt: { xs: 2, sm: 0 },
  }),

  empowerDesc: (theme: any) => ({
    color: theme.palette.grey[300],
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
    mb: 3,
    position: "relative",
    zIndex: 2,
    lineHeight: "26px",
  }),

  header: (theme: any) => ({
    width: "100%",
    height: { xs: "50vh", sm: "80vh", md: "70vh", lg: "75vh" },
    background:
      "linear-gradient(359deg, rgba(14, 145, 140, 0.40) -37.09%, rgba(217, 217, 217, 0.00) 92.95%)",
    clipPath: "ellipse(98% 100% at 50% 40%)",
    borderRadius: "0 0 40px 40px",
    position: "relative",
    overflow: "hidden",
  }),

  contactButton: (theme: any) => ({
    fontWeight: 500,
    color: theme.palette.grey[0],
    background: theme.palette.warning.darker,
    padding: "10px 30px",
    borderRadius: "4px",
    display: "inline-block",
    margin: { md: "10px 0 0 0", lg: 0 },
    position: "relative",
    zIndex: 2,
  }),
};
