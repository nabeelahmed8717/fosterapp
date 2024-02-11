import { Box, Container, Typography, useTheme } from "@mui/material";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import React from "react";
import { complianceData, complianceData2 } from "./index";
import complianceImage from "@root/assets/img/compliance-img.png";
import Image from "next/image";
import StepperComponent from "./StepperComponent";
import pageBg from "@root/assets/img/bg-lines.png";
import authImg from "@root/assets/img/auth-img-1.png";

const NewCompliance = () => {
  const theme: any = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.grey[0] }}>
      <Box sx={styles.backgroundImage}>
        <Image
          src={pageBg}
          alt="icons"
          style={{ position: "absolute", top: "50px", left: "30px", zIndex: 0 }}
        />
      </Box>
      <Box sx={{ p: { xs: 0, sm: 3 }, zIndex: 2, position: "relative" }}>
        <SalesSiteHeader title="Compliance" />
      </Box>
      <Box sx={styles.firstStepperWrapper}>
        {/* Stepper Component */}
        <StepperComponent
          mappingData={complianceData}
          activeStep={5}
          height={50}
        />
        <Box sx={styles.rightGridImage}>
          <Image
            src={complianceImage}
            alt="compliance-img"
            style={{ height: "auto", width: "100%" }}
          />
        </Box>
      </Box>
      <Container sx={{ mb: { xs: 3, md: 5, xl: 9 }, mt: { xs: 0, xl: 3 } }}>
        <Typography variant="subtitle1" sx={styles.paragraphStyling}>
          {`System is aimed at Cognitive Automation, which means pre-trained to automate specific business processes. Also, it offers cognitive input to humans working on specific tasks, adding to their analytical capabilities. This software is aimed at bringing intelligence to \ninformation-intensive processes`}
        </Typography>
      </Container>
      <Box sx={styles.secondStepperWrapper}>
        <Box sx={styles.rightGridImage}>
          <Image
            alt="Foster App Features"
            src={authImg}
            style={{ height: "auto", width: "80%" }}
          />
        </Box>
        {/* Stepper Component */}
        <StepperComponent
          mappingData={complianceData2}
          activeStep={10}
          height={7}
        />
      </Box>
    </Box>
  );
};

export default NewCompliance;

const styles: any = {
  firstStepperWrapper: (theme: any) => ({
    pb: { xs: 4, sm: 8 },
    display: "flex",
    justifyContent: "center",
    gap: { xs: 1, sm: 5, md: 8, lg: 20 },
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  }),
  secondStepperWrapper: (theme: any) => ({
    pb: { xs: 4, sm: 7, lg: 15 },
    display: "flex",
    justifyContent: "center",
    gap: { xs: 1, sm: 5, md: 8, lg: 10 },
    flexDirection: { xs: "column", lg: "row" },
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  }),

  backgroundImage: {
    position: "relative",
    zIndex: 2,
    display: { xs: "none", md: "block" },
  },

  rightGridImage: (theme: any) => ({
    p: { xs: 2, sm: 0 },
    display: "flex",
    justifyContent: "center",
  }),

  paragraphStyling: (theme: any) => ({
    color: theme.palette.grey[600],
    whiteSpace: { xs: "normal", lg: "pre-line" },
    fontWeight: 400,
    mb: { xs: 0, lg: 3 },
    lineHeight: "28px",
    textAlign: { xs: "center", lg: "start" },
    fontSize: "18px",
  }),
};
