import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import pageBg from "@root/assets/img/bg-lines.png";
import Image from "next/image";
import IconArrowLine from "@root/assets/svg/IconArrowLine";
import howItWorksImage from "@root/assets/img/how-works-bg-image.png";
import shadowBg from "@root/assets/img/shadow-effect.png";
import shadowBgBottom from "@root/assets/img//shadow-effect-bottom.png";

const HowWorks = () => {
  const theme: any = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.grey[0],
      }}
    >
      <Box sx={styles.bgImageStyling}>
        <Image
          src={pageBg}
          alt="icons"
          style={{
            position: "absolute",
            top: "50px",
            zIndex: 0,
            left: "30px",
          }}
        />
      </Box>
      <Box sx={styles.bgImageStyling}>
        <Image
          src={shadowBg}
          alt="icons"
          style={{ position: "absolute", top: "-100px", zIndex: 0, right: 0 }}
        />
      </Box>
      <Box
        sx={{
          p: { xs: "35px 35px 0 0" },
          position: "relative",
          Zindex: 1,
          textAlign: { xs: "center" },
        }}
      >
        <SalesSiteHeader
          title="How FosterApp Works"
          smallTitle="How it Works"
        />
      </Box>
      <Container>
        <Typography variant="body1" sx={styles.paragraphStyling}>
          {`Fostering children is one of the most rewarding and compassionate things that a person can do for a child. Sadly, there is a national shortage of foster carers leading to more children needing foster families.\n
         The fostering process is rightly thorough to ensure the safety of all, especially children, so it can sometimes feel like a never-ending, bureaucratic journey. We want to change this.\n
         FosterApp is the future of fostering because we streamline the process in one place. Every stakeholder, including the Independent Fostering Agencies (IFAs), foster carers and foster children, will have access to their own, personal interactive dashboard. Each type of login is customized according to the needs of the individual user.\n
         This way, every step can be recorded and every voice can be heard to secure the best outcomes for all.`}
        </Typography>
      </Container>
      {/* How it works section started */}
      <Grid container sx={{ mb: { xs: 5, sm: 6, md: 8 } }}>
        <Grid xs={12} item sx={{ display: "flex", justifyContent: "center" }}>
          <IconArrowLine
            sx={{
              fontSize: "100vw",
              height: { xs: 110, sm: 220, md: 260, lg: 320, xl: 400 },
              zIndex: 2,
              mt: { xs: 3, md: 5, lg: 6, xl: 7 },
              position: "relative",
            }}
          />
        </Grid>
      </Grid>
      <Box sx={styles.bgImageStyling}>
        <Image
          src={shadowBgBottom}
          alt="icons"
          style={{ position: "absolute", zIndex: 0, left: 0, top: "-100px" }}
        />
      </Box>
      <Container sx={{ mb: { xs: 3, sm: 4, lg: 8 } }}>
        <Typography variant="body1" sx={styles.secondParagraphStyling}>
          {`Instead of IFAs resorting to a paper-based system of form management, these can be stored and updated on our platform, at all stages of the fostering process from the recruitment of potential foster carers all the way through their fostering career.\n
         Our easy-to-use system allows IFA staff to view any forms or comments from foster carers or foster children in real time, making communication smoother and simpler.\n
         We are here to help IFAs track and monitor progress, allowing them to focus on providing safe care to children, foster carers and staff with awareness of outcomes achieved.\n
         Give your IFA that personal touch whilst also demonstrating legal and Ofsted compliance and your understanding of the legislations that surrounds the care of our vulnerable children. Working with our systems, including a complaints system, outcome tracker, assessment and review evaluation will set your IFA apart from others.`}
        </Typography>
      </Container>

      <Container sx={{ mb: { xs: 5, sm: 6, md: 8 } }}>
        <Image
          src={howItWorksImage}
          alt="process-image"
          style={{ width: "1200px", height: "auto" }}
        />
      </Container>
    </Box>
  );
};

export default HowWorks;

const styles: any = {
  paragraphStyling: (theme: any) => ({
    color: theme.palette.grey[600],
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
    mb: { xs: 0, lg: 3 },
    lineHeight: "28px",
    zIndex: 2,
    textAlign: { xs: "center", md: "start" },
    p: { xs: 1.5, lg: 0 },
    position: "relative",
  }),

  secondParagraphStyling: (theme: any) => ({
    color: theme.palette.grey[600],
    whiteSpace: { xs: "normal", md: "pre-line" },
    fontWeight: 500,
    mb: { xs: 0, lg: 3 },
    lineHeight: "28px",
    zIndex: 2,
    textAlign: { xs: "center", md: "start" },
    p: { xs: 1.5, lg: 0 },
    position: "relative",
  }),

  bgImageStyling: (theme: any) => ({
    position: "relative",
    display: { xs: "none", lg: "block" },
  }),
};
