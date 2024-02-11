import React, { useEffect, useState } from "react";
import heroVector from "@root/assets/img/hero-vector.png";
import { Box, Button, Card, Grid, Typography, useTheme } from "@mui/material";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import { coverLetterData, cvData, personalInformation } from ".";
import Image from "next/image";
import { LoadingButton } from "@mui/lab";
import gifAnimation from "@root/assets/gif/gif_animation.gif";
import { useRouter } from "next/router";

const ReviewApplicationDetails = () => {
  const theme: any = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router: any = useRouter();

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      const delay = setTimeout(() => {
        router.push("/career");
      }, 4000);
      return () => clearTimeout(delay);
    }
  }, [isSubmitted, router]);

  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={{ p: 3.5 }}>
        <SalesSiteHeader title="Join Our Team" />
      </Box>
      <Grid container justifyContent={"center"} sx={{ pb: 8 }}>
        <Grid
          item
          xs={12}
          md={8}
          xl={5}
          sx={{ p: { xs: "0 15px 15px 15px", sm: "0 50px 50px 50px", lg: 0 } }}
        >
          <Card
            sx={{
              p: { xs: 2, sm: 4 },
              boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
            }}
          >
            {isSubmitted ? (
              <Box sx={{ textAlign: "center" }}>
                <Image
                  src={gifAnimation}
                  alt="gif"
                  style={{ width: "73px", height: "73px", margin: "0 auto" }}
                />

                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    mb: 2,
                  }}
                >
                  Application Submitted Successfully
                </Typography>
                <Typography
                  variant="subtitle2"
                  component="div"
                  sx={{
                    fontWeight: 400,
                    color: theme.palette.grey[600],
                    whiteSpace: { xs: "normal", sm: "pre-line" },
                    lineHeight: "24px",
                  }}
                >
                  {`We will carefully consider your application and contact you if you are selected to\n continue in recruitment process.`}
                </Typography>
              </Box>
            ) : (
              <>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.grey[700],
                    mb: 3,
                  }}
                >
                  Please Review Your Application
                </Typography>
                {personalInformation?.map((item: any) => (
                  <Box key={item.id} sx={styles.mainTitleWrapper}>
                    <Box sx={styles.cardHeaderWrapper}>
                      <Typography
                        variant="subtitle2"
                        component="div"
                        sx={styles.mainTitleStyling}
                      >
                        {item.mainTitle}
                      </Typography>
                      {/* View Button */}
                      <Button sx={styles.buttonStyling}>Edit</Button>
                    </Box>
                    {item?.personalDetails?.map((list: any, index: any) => (
                      <Box key={index}>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={{
                            m: 0,
                            color: theme.palette.grey[700],
                          }}
                        >
                          {list.label}
                        </Typography>
                        <Typography
                          key={index}
                          variant="caption"
                          component="div"
                          sx={{
                            mb: 1,
                            color: theme.palette.grey[600],
                            fontWeight: 500,
                          }}
                        >
                          {list.title}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ))}

                {/* Cv Data */}
                <Box sx={{ mt: 3 }}>
                  {cvData?.map((item: any) => (
                    <Box key={item.id} sx={styles.mainTitleWrapper}>
                      <Box sx={styles.cardHeaderWrapper}>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={styles.mainTitleStyling}
                        >
                          {item.mainTitle}
                        </Typography>
                        {/* View Button */}
                        <Button sx={styles.buttonStyling}>Edit</Button>
                      </Box>
                      {item?.docDetails?.map((list: any, index: any) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            mb: 1,
                          }}
                        >
                          <Image
                            src={list.icon}
                            alt="icon"
                            width={24}
                            height={20}
                          />
                          <Typography
                            key={index}
                            variant="caption"
                            component="div"
                            sx={{
                              color: theme.palette.grey[600],
                              fontWeight: 500,
                            }}
                          >
                            {list.title}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  ))}
                </Box>

                {/* Cover Letter Data */}
                <Box sx={{ mt: 3 }}>
                  {coverLetterData?.map((item: any) => (
                    <Box key={item.id} sx={styles.mainTitleWrapper}>
                      <Box sx={styles.cardHeaderWrapper}>
                        <Typography
                          variant="subtitle2"
                          component="div"
                          sx={styles.mainTitleStyling}
                        >
                          {item.mainTitle}
                        </Typography>
                        {/* View Button */}
                        <Button sx={styles.buttonStyling}>Edit</Button>
                      </Box>
                      {item?.docDetails?.map((list: any, index: any) => (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            mb: 1,
                          }}
                        >
                          <Image
                            src={list.icon}
                            alt="icon"
                            width={24}
                            height={20}
                          />
                          <Typography
                            key={index}
                            variant="caption"
                            component="div"
                            sx={{
                              color: theme.palette.grey[600],
                              fontWeight: 500,
                            }}
                          >
                            {list.title}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  ))}
                </Box>
                <LoadingButton
                  type="submit"
                  sx={styles.loadingButtonStyling}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Submit your application
                </LoadingButton>
              </>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewApplicationDetails;

const styles: any = {
  mainWrapper: (theme: any) => ({
    backgroundColor: theme.palette.grey[0],
    backgroundImage: `url(${heroVector.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }),

  cardHeaderWrapper: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 1,
  }),

  mainTitleWrapper: (theme: any) => ({
    borderRadius: "8px",
    border: `1px solid ${theme.palette.grey[500]}`,
    p: 2,
  }),

  mainTitleStyling: (theme: any) => ({
    m: 0,
    color: theme.palette.grey[700],
    fontWeight: 700,
  }),

  buttonStyling: (theme: any) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: "13px",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  }),

  loadingButtonStyling: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    "&:hover": { bgcolor: theme.palette.primary.main },
    width: "100%",
    py: 1,
    mt: 2,
    fontWeight: 500,
  }),
};
