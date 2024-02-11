import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import pageBg from "@root/assets/img/bg-lines.png";
import missionBg from "@root/assets/img/mission-image.png";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import {
  childCenteredCare,
  developmentData,
  managementData,
  safetyData,
  whyUsData,
} from ".";
import foosteringIcon from "@root/assets/img/fostering-icon.png";
import whyUsImage from "@root/assets/img/why-us-image.png";
import StepperComponent from "../compliance/StepperComponent";
import FlyingKite from "@root/assets/svg/FlyingKite";
import CardComponent from "./CardComponent";
import shadowBg from "@root/assets/img/shadow-effect-about.png";

const About = () => {
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
            zIndex: 0,
            top: "50px",
            left: "30px",
          }}
        />
      </Box>
      <Box sx={{ zIndex: 3, position: "relative" }}>
        <SalesSiteHeader title="About Us" smallTitle="Who we are" />
      </Box>
      <Typography variant="subtitle1" sx={styles.paragraphStyling}>
        {` Foster care constitutes a system wherein a minor is placed under the care of a state-certified caregiver, often\n referred to as a "foster parent," residing in a ward, group home, treatment facility, or a private residence.\n Alternatively, a recognized family member can assume this role. The arrangement for the child's placement is\n typically orchestrated by governmental bodies or social service organizations. Compensation is extended to the\n foster parent, institution, or group home, barring situations involving family members.`}
      </Typography>
      <Typography variant="subtitle1" sx={styles.paragraphStyling}>
        {`The central objective of the Foster App is to establish a secure, nurturing, and stable family environment for\n children within the foster care system. The fundamental belief driving this initiative is that the optimal setting for\n a child's upbringing lies within a family unit. The well-being and needs of the child will invariably take precedence,\n and the services offered will consistently reflect this principle.`}
      </Typography>
      {/* Component for first card */}
      <Grid
        container
        justifyContent={"center"}
        columnSpacing={{ xs: 3, lg: 4, xl: 8 }}
        rowSpacing={{ xs: 3, lg: 4, xl: 5 }}
        sx={{
          mt: { xs: 0, lg: 10 },
          p: { xs: "0 20px 0 20px", lg: 0 },
          position: "relative",
        }}
      >
        <Box sx={styles.imageStyling}>
          <Image
            src={shadowBg}
            alt="icons"
            style={{
              position: "absolute",
              zIndex: 0,
              top: "-40%",
              right: "20%",
            }}
          />
        </Box>
        <Grid
          item
          xs={12}
          sm={6}
          md={5.5}
          lg={5}
          xl={6}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <CardComponent mappingData={childCenteredCare} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5.5}
          lg={5}
          xl={6}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <CardComponent mappingData={safetyData} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5.5}
          lg={5}
          xl={6}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <CardComponent mappingData={developmentData} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5.5}
          lg={5}
          xl={6}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <CardComponent mappingData={managementData} />
        </Grid>
      </Grid>
      {/* Our Mission Section Started */}
      <Grid container justifyContent={"center"} sx={{ mt: { xs: 3, lg: 15 } }}>
        <Grid
          item
          xs={12}
          md={11}
          lg={6}
          xl={5}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ p: { xs: "30px 30px 0 30px", lg: 0 } }}>
            <Typography variant="h3" sx={styles.missionTitle}>
              Our Mission
            </Typography>
            <Typography variant="subtitle1" sx={styles.missionDesc}>
              {` The product aims to establish a streamlined digital foster care system,\n designed for scalability to enhance next-gen service delivery,\n addressing emerging social care needs, and planning expansion to include\n Local Councils post a successful 6-12 month launch.`}
            </Typography>
            <Typography variant="h3" sx={styles.visionTitle}>
              Our Vision
            </Typography>
            <Typography variant="subtitle1" sx={styles.visionDesc}>
              {`The product's main mission encompasses promoting safeguarding and\n well-being while providing a digitally advanced fostering solution.\n It integrates Cognitive Automation to automate processes and enhance\n human decision-making capabilities in fostering realms.`}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          xl={5}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={styles.missionWrapper}>
            <Image
              src={missionBg}
              alt="fostering-image"
              style={{ position: "relative", zIndex: 1, height: "100%" }}
            />
            <Box sx={styles.missionIcon}>
              <Image src={foosteringIcon} alt="fostering-icon" />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Why Us Section Started */}
      <Box sx={{ mt: { xs: 3, lg: 12 } }}>
        <Box
          sx={{
            position: "relative",
            display: { xs: "none", lg: "block" },
          }}
        >
          <Box sx={{ position: "absolute", top: "-150px", left: "px" }}>
            <FlyingKite
              sx={{
                fontSize: "100vw",
                height: { xs: 110, sm: 220, md: 530 },
              }}
            />
          </Box>
        </Box>
        <Typography variant="h2" sx={styles.whyTitle}>
          Why Us
        </Typography>
        <Grid container justifyContent={"center"}>
          {/* Stepper Component */}
          <Box sx={styles.stepperWrapper}>
            {/* Stepper Component */}
            <StepperComponent
              mappingData={whyUsData}
              activeStep={10}
              height={30}
            />
            <Box
              sx={{
                p: { xs: 2, sm: 0 },
                display: "flex",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <Image
                src={whyUsImage}
                alt="compliance-img"
                style={{ height: "100%", width: "627px" }}
              />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;

const styles: any = {
  paragraphStyling: (theme: any) => ({
    color: theme.palette.grey[600],
    whiteSpace: { xs: "normal", lg: "pre-line" },
    fontWeight: 400,
    mb: { xs: 0, lg: 3 },
    lineHeight: "28px",
    zIndex: 2,
    textAlign: "center",
    p: { xs: 2.5, lg: 0 },
    position: "relative",
  }),

  bgImageStyling: (theme: any) => ({
    position: "relative",
    zIndex: 2,
    display: { xs: "none", md: "block" },
    backgroundImage: { pageBg },
  }),

  missionWrapper: (theme: any) => ({
    position: "relative",
    mb: { xs: 3, sm: 0 },
    p: { xs: "0 20px 0 20px", lg: 0 },
  }),

  missionIcon: (theme: any) => ({
    display: { xs: "none", sm: "block" },
    position: "absolute",
    top: "-60px",
    right: "-62px",
    zIndex: 0,
  }),

  missionTitle: (theme: any) => ({
    color: theme.palette.grey[700],
    fontWeight: 700,
    mt: { sm: 0, md: 3, lg: 5, xl: 7 },
  }),

  missionDesc: (theme: any) => ({
    color: theme.palette.grey[600],
    mt: 2,
    lineHeight: "30px",
    whiteSpace: { xs: "normal", lg: "pre-line" },
    fontWeight: 500,
  }),

  visionTitle: (theme: any) => ({
    color: theme.palette.grey[700],
    fontWeight: 700,
    mt: { xs: 4, md: 3, lg: 5 },
  }),

  visionDesc: (theme: any) => ({
    color: theme.palette.grey[600],
    mb: { xs: 3, sm: 8 },
    mt: 2,
    whiteSpace: { xs: "normal", lg: "pre-line" },
    lineHeight: "30px",
    fontWeight: 500,
  }),

  mainTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    fontWeight: 700,
    mb: { xs: 3, sm: 4, lg: 8 },
    mt: { xs: 3, lg: 0 },
    textAlign: "center",
  }),

  whyTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    fontWeight: 700,
    mb: { xs: 1, sm: 4, lg: 8 },
    mt: { xs: 3, lg: 0 },
    textAlign: "center",
    zIndex: 2,
    position: "relative",
  }),

  stepperWrapper: (theme: any) => ({
    pb: { xs: 4, sm: 7, xl: 8 },
    display: "flex",
    justifyContent: "center",
    gap: { xs: 1, sm: 5, md: 6, lg: 0, xl: 6 },
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
  }),

  imageStyling: (theme: any) => ({
    display: { xs: "none", lg: "block" },
  }),
};
