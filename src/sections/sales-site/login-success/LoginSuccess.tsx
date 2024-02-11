import React from "react";
import heroVector from "@root/assets/img/hero-vector.png";
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import gifAnimation from "@root/assets/gif/gif_animation.gif";
import Link from "next/link";
import Image from "next/image";

const LoginSuccess = () => {
  const theme: any = useTheme();

  return (
    <Box sx={styles.mainWrapper}>
      <Grid container justifyContent={"center"} sx={{ mt: 10, mb: 10 }}>
        <Grid
          item
          xs={12}
          md={8}
          xl={6}
          sx={{ p: { xs: "0 15px 15px 15px", sm: "0 50px 50px 50px", lg: 0 } }}
        >
          <Card
            sx={{
              p: { xs: 2, sm: 4 },
              boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Image
                src={gifAnimation}
                alt="gif"
                style={{ width: "73px", height: "73px", margin: "0 auto" }}
              />
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  mt: 2,
                }}
              >
                Thank You !
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.grey[700],
                  mb: 2,
                }}
              >
                {`Let’s Get you Verified`}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{
                  fontWeight: 500,
                  color: theme.palette.grey[600],
                  whiteSpace: { xs: "normal", sm: "wrap" },
                  lineHeight: "24px",
                }}
              >
                {`A verification link has been sent to your email account. Please click on the link for further\n verification to proceed.`}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div"
                sx={{
                  fontWeight: 500,
                  color: theme.palette.grey[600],
                  whiteSpace: { xs: "normal", sm: "wrap" },
                  lineHeight: "24px",
                  mt: 2,
                }}
              >
                {`If you don’t get the verification email click on `}
                <Link
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  }}
                >
                  Resend link
                </Link>
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginSuccess;

const styles: any = {
  mainWrapper: (theme: any) => ({
    backgroundColor: theme.palette.grey[0],
    backgroundImage: `url(${heroVector.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }),
};
