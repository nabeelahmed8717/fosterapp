import React from "react";
import heroVector from "@root/assets/img/hero-vector.png";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import SalesSiteHeader from "@root/components/SalesSiteHeader";

const Careers = () => {
  const theme: any = useTheme();
  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={{ p: { xs: "0", sm: "30px 0 0 0" } }}>
        <SalesSiteHeader title="Join Our Team" />
      </Box>

      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={10} lg={9}>
          <Box sx={{ textAlign: "center", px: { xs: 1, sm: 3 } }}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                marginTop: { xs: "-50px", lg: "-30px" },
                mb: 2,
                position: "relative",
                zIndex: 3,
              }}
            >
              Career Openings
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              sx={{
                fontWeight: 500,
                color: theme.palette.grey[700],
              }}
            >
              {`Creating an inclusive & diverse environment for your success`}
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 3, md: 8 },
              px: {
                xs: 2,
                sm: 4,
                md: "auto",
              },
              minHeight: "950px",
            }}
          >
            <iframe
              src="https://jobs.orcaloholding.co.uk/jobs/companies/XEnyDRBL5vjk2JkJKMlQrWGpo0"
              width="100%"
              no-border
              title="Jobs Widget"
              style={{
                border: "none",
                minHeight: "inherit",
                boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
                borderRadius: "10px",
              }}
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Careers;

const styles: any = {
  mainWrapper: (theme: any) => ({
    backgroundColor: theme.palette.grey[0],
    backgroundImage: `url(${heroVector.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    pb: { xs: 3, md: 8 },
  }),

  inputIconsStyling: (theme: any) => ({
    width: "18px",
    color: theme.palette.grey[600],
    position: "absolute",
    top: "30%",
    right: "20px",
  }),

  buttonStyling: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[0],
    fontWeight: 500,
    px: { xs: 0, sm: 2.5 },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey[0],
    },
  }),

  badgeStyling: (theme: any) => ({
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[600],
    fontWeight: 500,
    borderRadius: "4px",
    p: "3px 10px 3px 10px",
  }),
};
