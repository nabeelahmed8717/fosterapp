import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import platFormChart from "@root/assets/img/platform-chart.png";
import Image from "next/image";
import { ourPlatFormData } from "./index";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import jobDots from "@root/assets/img/jobs-dots.png";
import pageBg from "@root/assets/img/bg-lines.png";

const Platform = () => {
  const theme: any = useTheme();
  const [showFullDescriptions, setShowFullDescriptions] = useState<{
    [key: number]: boolean;
  }>(Object.fromEntries(ourPlatFormData.map((item) => [item.id, false])));

  const toggleDescription = (id: number) => {
    setShowFullDescriptions((prevState: any) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.grey[0] }}>
      <Box sx={styles.backgroundImage}>
        <Image
          src={pageBg}
          alt="icons"
          style={{
            position: "absolute",
            top: "50px",
            left: "30px",
          }}
        />
      </Box>
      <Box sx={{ textAlign: "center", p: { xs: 2, sm: 3 } }}>
        <SalesSiteHeader title="Our Platform" />
        <Grid
          container
          spacing={{ xs: 4, lg: 6 }}
          sx={{ px: { xs: 0, xl: 16 }, position: "relative" }}
        >
          {ourPlatFormData.map((item: any) => (
            <Grid
              item
              key={item.title}
              xs={12}
              sm={6}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: { xs: 3, sm: 4 },
              }}
            >
              <Card
                sx={(theme) => ({
                  ...styles.cardStyling(theme),
                  maxHeight: {
                    xs: showFullDescriptions[item.id] ? "auto" : "300px",
                    lg: showFullDescriptions[item.id] ? "auto" : "280px",
                  },
                })}
              >
                <CardContent sx={styles.cardContentStyling}>
                  <Image
                    src={item.icon}
                    alt="header-image"
                    width={77}
                    height={77}
                    style={{
                      position: "absolute",
                      zIndex: 3,
                      top: "-38px",
                    }}
                  />
                  <Image
                    src={jobDots}
                    alt="jobs-dots"
                    style={{
                      position: "absolute",
                      right: 0,
                      zIndex: 0,
                      top: "2px",
                    }}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={styles.cardTitleStyling}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mb: 2,
                      fontWeight: 500,
                      color: theme.palette.grey[600],
                    }}
                  >
                    {showFullDescriptions[item.id]
                      ? item.description
                      : item.description.split("\n\n").slice(0, 2).join("\n\n")}
                  </Typography>
                  {item.description.split("\n\n").length > 2 && (
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        cursor: "pointer",
                        display: "inline-block",
                      }}
                      variant="subtitle2"
                      onClick={() => toggleDescription(item.id)}
                    >
                      {showFullDescriptions[item.id]
                        ? "Show less"
                        : "Show more"}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: { xs: 2, sm: 1, md: 0 },
        }}
      >
        <Image
          src={platFormChart}
          alt="header-image"
          style={{ height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default Platform;

const styles: any = {
  cardStyling: (theme: any) => ({
    // minHeight: "280px",
    boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
    maxWidth: { xs: 450, sm: 320, md: 380, lg: 450 },
    borderRadius: "12px 12px 89px 12px",
    overflow: "visible",
    position: "relative",
    zIndex: 3,
  }),
  backgroundImage: {
    zIndex: 2,
    display: { xs: "none", lg: "block" },
    position: "relative",
  },

  cardContentStyling: (theme: any) => ({
    textAlign: "start",
    whiteSpace: "pre-line",
    position: "relative",
    zIndex: 3,
  }),

  cardTitleStyling: (theme: any) => ({
    mb: 2,
    fontWeight: 600,
    color: theme.palette.grey[700],
    marginTop: "30px",
  }),

  cardDescStyling: (theme: any) => ({
    color: theme.palette.grey[600],
    lineHeight: "28px",
    fontWeight: 400,
  }),
};
