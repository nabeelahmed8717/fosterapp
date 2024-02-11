import React from "react";
import heroVector from "@root/assets/img/hero-vector.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import { individualJobData, teamsData } from "..";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import jobIcon from "@root/assets/img/job-icon.png";
import clockIcon from "@root/assets/img/clock-icon.png";
import Image from "next/image";
import Link from "next/link";

const ViewJobDetails = () => {
  const theme: any = useTheme();
  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={{ p: 3 }}>
        <SalesSiteHeader title="Join Our Team" />
      </Box>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} md={10} lg={9}>
          {individualJobData.map((item: any) => (
            <Grid item xs={12} key={item.id} sx={{ p: { xs: 2, md: 0 } }}>
              <Card
                sx={{
                  boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
                  mb: { xs: 1, md: 3 },
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      m: 0,
                      fontWeight: 800,
                      color: theme.palette.grey[700],
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 0.5,
                      gap: 0.5,
                    }}
                  >
                    <LocationOnIcon
                      sx={{ width: "18px", color: theme.palette.grey[600] }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: theme.palette.grey[600] }}
                    >
                      {item.location}
                    </Typography>
                  </Box>

                  <Link
                    href="/career/apply-now"
                    style={{ textDecoration: "none" }}
                  >
                    <Button sx={styles.buttonStyling}>Apply Now</Button>
                  </Link>

                  <Box sx={styles.jobTitles}>
                    <Image src={jobIcon} alt="job-icon" />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.grey[700],
                      }}
                    >
                      Job Type
                    </Typography>
                  </Box>
                  <Box sx={styles.shiftWrapper}>
                    {item?.jobType?.map((list: any) => (
                      <Typography
                        key={list.title}
                        variant="caption"
                        sx={styles.jobBadgeStyling}
                      >
                        {list.title}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={styles.jobTitles}>
                    <Image src={clockIcon} alt="clock-icon" />
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.grey[700],
                      }}
                    >
                      Shift and Schedule
                    </Typography>
                  </Box>

                  <Box sx={styles.shiftWrapper}>
                    {item?.shift?.map((list: any) => (
                      <Typography
                        key={list.title}
                        variant="caption"
                        sx={styles.listStyling}
                      >
                        {list.title}
                      </Typography>
                    ))}
                  </Box>
                  <Divider sx={{ mt: 5 }} />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.grey[700],
                      mt: 4,
                    }}
                  >
                    About Foster App: 
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={styles.descriptionStyling}
                  >
                    {item.about}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.grey[700],
                      mt: 4,
                    }}
                  >
                    Job Description: 
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={styles.descriptionStyling}
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.grey[700],
                      mt: 4,
                      mb: 2,
                    }}
                  >
                    Key Responsibilities: 
                  </Typography>
                  {item?.responsibilities?.map((newItem: any) => (
                    <Box key={newItem.id}>
                      <ul
                        style={{
                          padding: "0 0 5px 20px",
                        }}
                      >
                        <li style={{ color: theme.palette.grey[500] }}>
                          <Typography variant="subtitle2" sx={styles.listItem}>
                            {newItem.title}
                          </Typography>
                        </li>
                      </ul>
                    </Box>
                  ))}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.grey[700],
                      mt: 4,
                      mb: 2,
                    }}
                  >
                    Qualifications: 
                  </Typography>
                  {item?.qualifications?.map((newItem: any) => (
                    <Box key={newItem.id}>
                      <ul style={{ padding: "0 0 5px 20px" }}>
                        <li style={{ color: theme.palette.grey[500] }}>
                          <Typography variant="subtitle2" sx={styles.listItem}>
                            {newItem.title}
                          </Typography>
                        </li>
                      </ul>
                    </Box>
                  ))}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.grey[700],
                      mt: 4,
                      mb: 2,
                    }}
                  >
                    What We Offer: 
                  </Typography>
                  {item?.weOffer?.map((newItem: any) => (
                    <Box key={newItem.id}>
                      <ul style={{ padding: "0 0 5px 20px" }}>
                        <li style={{ color: theme.palette.grey[500] }}>
                          <Typography variant="subtitle2" sx={styles.listItem}>
                            {newItem.title}
                          </Typography>
                        </li>
                      </ul>
                    </Box>
                  ))}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.grey[700],
                      mt: 4,
                    }}
                  >
                    How to Apply: 
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={styles.descriptionStyling}
                  >
                    {item.apply}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewJobDetails;

const styles: any = {
  mainWrapper: (theme: any) => ({
    backgroundColor: theme.palette.grey[0],
    backgroundImage: `url(${heroVector.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    pb: 5,
  }),

  buttonStyling: (theme: any) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[0],
    fontWeight: 500,
    px: 3,
    mt: 1,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.grey[0],
    },
  }),

  jobTitles: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    mt: 4,
    gap: 1,
  }),

  jobBadgeStyling: (theme: any) => ({
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[600],
    fontWeight: 500,
    borderRadius: "4px",
    p: "3px 10px 3px 10px",
  }),

  listStyling: (theme: any) => ({
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[600],
    fontWeight: 500,
    borderRadius: "4px",
    p: "3px 10px 3px 10px",
  }),

  listItem: (theme: any) => ({
    lineHeight: "28px",
    fontWeight: 500,
    color: theme.palette.grey[500],
  }),

  shiftWrapper: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    mt: 2,
    gap: 1,
  }),

  descriptionStyling: (theme: any) => ({
    lineHeight: "28px",
    fontWeight: 500,
    color: theme.palette.grey[500],
    mb: 2,
    whiteSpace: "pre-line",
    mt: 2,
  }),
};
