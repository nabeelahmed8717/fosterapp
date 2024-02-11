import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import heroVector from "../../assets/img/hero-vector.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { createGradient } from "@root/theme/palette";

const UnderConstruction = () => {
    const router = useRouter();
    const logoutHandler = () => {
        localStorage.removeItem("loginToken");
        router.replace("/auth/login");
    };

    return (
        <Box
            sx={{
                height: {
                    xs: "100vh",
                },
                position: "relative",
                background: "linear-gradient(359deg, rgba(14, 145, 140, 0.40) -37.09%, rgba(217, 217, 217, 0.00) 92.95%)",
                clipPath: "ellipse(98% 100% at 50% 40%)"
            }}
        >
            <Image src={heroVector} alt={"heroVector"} style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute" }} />
            <Box
                sx={{ height: "100vh" }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"center"}
                gap={5}
            >
                <Box
                    pl={2}
                    pr={2}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Typography
                        mb={3}
                        sx={{
                            width: { xs: "100%", xl: "96%", lg: "96%", md: "97%", sm: "98%" },
                            fontSize: {
                                xs: "20px",
                                sm: "30px",
                                md: "40px",
                                lg: "50px",
                                xl: "55px",
                            },
                            fontWeight: "600",
                        }}
                    >
                        Exciting news – our website is getting a makeover! 🛠️
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            width: { xs: "90%", xl: "70%", lg: "70%", md: "70%", sm: "60%" },
                            whiteSpace: "pre-wrap",
                            fontSize: {
                                xs: "16px",
                                sm: "18px",
                                md: "20px",
                                lg: "22px",
                                xl: "25px",
                            },
                        }}
                        textAlign={"center"}
                    >
                        Thanks a bunch for reaching out to us. We’ve got your info and we’re
                        thrilled to connect with you soon! Our friendly representative will
                        be in touch with all the awesome details and information you need.
                    </Typography>
                    <Typography
                        mt={6}
                        variant="body1"
                        textAlign={"center"}
                        sx={{
                            fontSize: {
                                xs: "16px",
                                md: "18px",
                                lg: "20px",
                                xl: "22px",
                            },
                        }}
                    >
                        Hang tight and talk to you real soon! 🚀
                    </Typography>
                    <Stack mt={3} spacing={2} gap={1} direction="row">
                            <Link
                                href="/home"
                                style={{ textDecoration: "none" }}
                            >
                                <Typography variant="subtitle2" sx={styles.contactButton}>
                                    Home
                                </Typography>
                            </Link>
                            <Link
                                href=""
                                style={{ textDecoration: "none" }}
                                onClick={logoutHandler}
                            >
                                <Typography variant="subtitle2" sx={styles.contactButton}>
                                    Logout
                                </Typography>
                            </Link>

                    </Stack>
                </Box>
            </Box>

            {/* </Box> */}
        </Box>
    );
};

export default UnderConstruction;

// styles
const styles = {
    imgBackground: {
        "@media (max-width: 280px)": {
            display: "none",
        },
    },
    contactButton: (theme: any) => ({
        fontWeight: 500,
        color: theme.palette.grey[0],
        background: createGradient(
          theme.palette.primary.dark,
          theme.palette.primary.light
        ),
        padding: "10px 30px",
        borderRadius: "4px",
        margin: { md: "10px 0 0 0", lg: 0 },
        fontSize: { xs: "14px", lg: "12px", xl: "14px" },
        cursor:"pointer",
        zIndex: 99999,
        position:"relative"
      }),
};
