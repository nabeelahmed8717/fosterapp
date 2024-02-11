import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import React from "react";
import { packagesData } from ".";
import Link from "next/link";

const Package = () => {
  const theme: any = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.grey[0] }}>
      <Box sx={{ p: { xs: 1, sm: 3 } }}>
        <SalesSiteHeader title="Packages" />

        <Grid
          container
          justifyContent={"center"}
          spacing={{ xs: 4, lg: 0, xl: 6 }}
          sx={{ px: { xs: 0, xl: 18 }, mb: { xs: 5, xl: 8 } }}
        >
          {packagesData?.map((item: any) => (
            <Grid
              key={item.title}
              item
              xs={12}
              sm={6}
              lg={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  height: "100%",
                  boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
                  background: item.bgColor,
                  width: { xs: "auto", lg: 400 },
                }}
              >
                <CardContent
                  sx={{
                    textAlign: "center",
                    height: "100%",
                    whiteSpace: "pre-line",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mb: 3,
                        fontWeight: 700,
                        color: item?.color,
                      }}
                    >
                      {item?.title}
                    </Typography>
                    <Divider />
                    {item?.basicPackage?.map((newItem: any) => (
                      <Typography
                        key={newItem.title}
                        gutterBottom
                        variant="subtitle2"
                        component="div"
                        sx={{
                          mb: 3,
                          fontWeight: 700,
                          color: newItem?.color,
                          backgroundColor: newItem?.bgColor,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          p: "10px 20px",
                          borderRadius: "50px",
                        }}
                      >
                        {newItem.title}
                      </Typography>
                    ))}
                  </Box>
                  {/* <Divider sx={{ mb: 2 }} />
                  {item?.monthlyPackage?.map((item: any) => (
                    <Typography
                      key={item.title}
                      variant="h4"
                      component="div"
                      sx={{
                        mb: 1,
                        fontWeight: 700,
                        color: item?.color,
                      }}
                    >
                      {item?.packageTitle}
                    </Typography>
                  ))}
                  {item?.billingPackage?.map((newItem: any) => (
                    <Typography
                      key={newItem.title}
                      variant="subtitle2"
                      component="div"
                      sx={{
                        mb: 3,
                        fontWeight: 600,
                        color: newItem?.color,
                        backgroundColor: newItem.bgColor,
                        display: "inline-block",
                        borderRadius: "50px",
                        p: "8px 30px",
                      }}
                    >
                      {newItem.title}
                    </Typography>
                  ))} */}
                  <Divider sx={{ mb: 2 }} />
                  {item?.description?.map((list: any) => (
                    <Typography
                      key={list.title}
                      variant="subtitle2"
                      sx={{
                        fontWeight: list.fontWeight,
                        color: list?.color,
                        mb: 3,
                      }}
                    >
                      {list?.title}
                    </Typography>
                  ))}
                  {item?.actionButton?.map((list: any) => (
                    <Link
                      key={list.title}
                      href={list.link}
                      style={{
                        textDecoration: "none",
                        color: list?.color,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: list?.color,
                          mb: 3,
                          border: `1px solid ${theme.palette.grey[500]}`,
                          display: "inline-block",
                          p: "10px 30px",
                          borderRadius: "50px",
                          backgroundColor: list?.bgColor,
                          fontWeight: 700,
                        }}
                      >
                        {list?.title}
                      </Typography>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Package;
