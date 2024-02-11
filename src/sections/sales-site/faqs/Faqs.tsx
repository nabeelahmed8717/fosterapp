import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Grid,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import React from "react";
import { faqsAccordian } from ".";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Link from "next/link";
import Image from "next/image";
import pageBg from "@root/assets/img/bg-lines.png";

const Faqs = () => {
  const [accordianExpanded, setAccordianExpanded] = React.useState(false);
  const theme: any = useTheme();
  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={styles.bgWrapper}>
        <Image
          src={pageBg}
          alt="icons"
          style={{ position: "absolute", top: 0, zIndex: 0 }}
        />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          mt: { xs: 2, md: 3 },
          color: theme.palette.warning.darker,
        }}
      >
        Every thing you need
      </Typography>
      <Typography variant="h2" sx={styles.mainTitle}>
        FAQ
      </Typography>
      <Typography variant="subtitle1" sx={styles.titleDesc}>
        Find the answers to all of our most frequently asked questions
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        sx={{ mb: 4, position: "relative", zIndex: 2 }}
      >
        {faqsAccordian?.map((item: any) => (
          <Grid item sm={10} lg={8} key={item.id}>
            <Accordion disableGutters sx={styles.accordionStyling}>
              <AccordionSummary
                sx={styles.accordianSummaryStyling}
                aria-controls="panel1d-content"
                id="panel1d-header"
                expandIcon={
                  <Avatar sx={styles.avatarStyling}>
                    {accordianExpanded ? (
                      <ArrowDropUpIcon sx={{ color: theme.palette.grey[0] }} />
                    ) : (
                      <ArrowDropDownIcon
                        sx={{ color: theme.palette.grey[0] }}
                      />
                    )}
                  </Avatar>
                }
              >
                <Typography
                  variant="subtitle1"
                  className="title"
                  sx={styles.accordianMainTitle}
                >
                  {item?.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ textAlign: "start", p: "20px 0 0  30px" }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: theme.palette.grey[600],
                    fontWeight: 500,
                    lineHeight: "28px",
                  }}
                >
                  {item?.description}{" "}
                  {item?.ankerTag?.map((item: any) => (
                    <Link
                      href={item?.link}
                      key={item?.title}
                      style={{
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      {item?.title}
                    </Link>
                  ))}
                  {/* Browser Support Handeled Here */}
                  <Grid container sx={{ mt: 2 }}>
                    {item?.desktopSupport?.map((list: any) => (
                      <Grid item sm={6} key={list?.title}>
                        <Box sx={styles.mainIconsStyling}>
                          <Image
                            src={list?.icon}
                            alt="icons"
                            width={34}
                            height={34}
                          />
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: theme.palette.grey[600],
                              fontWeight: 700,
                            }}
                          >
                            {list?.title}
                          </Typography>
                        </Box>
                        {list?.browserInfo?.map((newItem: any) => {
                          return (
                            <Box
                              key={newItem?.title}
                              sx={styles.subIconsStyling}
                            >
                              <Image
                                src={newItem?.icon}
                                alt="icons"
                                width={24}
                                height={24}
                              />
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  color: theme.palette.grey[600],
                                  fontWeight: 400,
                                }}
                              >
                                {newItem?.title}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Grid>
                    ))}
                    {item?.mobileSupport?.map((list: any) => (
                      <Grid item sm={6} key={list?.title}>
                        <Box sx={styles.mainIconsStyling}>
                          <Image
                            src={list?.icon}
                            alt="icons"
                            width={34}
                            height={34}
                          />
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: theme.palette.grey[600],
                              fontWeight: 700,
                            }}
                          >
                            {list?.title}
                          </Typography>
                        </Box>
                        {list?.browserInfo?.map((newItem: any) => {
                          return (
                            <Box
                              key={newItem?.title}
                              sx={styles.subIconsStyling}
                            >
                              <Image
                                src={newItem?.icon}
                                alt="icons"
                                width={24}
                                height={24}
                              />
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  color: theme.palette.grey[600],
                                  fontWeight: 400,
                                }}
                              >
                                {newItem?.title}
                              </Typography>
                            </Box>
                          );
                        })}
                      </Grid>
                    ))}
                  </Grid>
                </Typography>
                {item?.sublist?.map((newItem: any) => (
                  <Box key={newItem.id}>
                    <ul style={{ padding: "8px 8px 0 12px" }}>
                      <li style={{ color: theme.palette.grey[600] }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.grey[600],
                            fontWeight: 400,
                          }}
                        >
                          {newItem?.list}
                        </Typography>
                      </li>
                    </ul>
                  </Box>
                ))}
                <Box sx={{ mt: 1, mb: "20px" }}>
                  {item?.footer?.map((newItem: any) => (
                    <Link
                      target="__blank"
                      key={item.newItem}
                      href={newItem?.link}
                      style={{
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        fontWeight: 500,
                        display: "inline-block",
                      }}
                    >
                      <Typography variant="subtitle2">
                        {newItem?.title}
                      </Typography>
                    </Link>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faqs;

const styles: any = {
  mainWrapper: (theme: any) => ({
    textAlign: "center",
    p: { xs: 1, md: 5 },
    backgroundColor: theme.palette.grey[0],
  }),
  bgWrapper: (theme: any) => ({
    position: "relative",
    zIndex: 2,
    display: { xs: "none", lg: "block" },
  }),
  mainTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    display: "inline-block",
    fontWeight: 700,
    mb: 3,
    zIndex: 3,
    position: "relative",
  }),
  titleDesc: (theme: any) => ({
    color: theme.palette.grey[600],
    mb: { xs: 3, md: 5 },
    position: "relative",
    zIndex: 2,
  }),
  accordionStyling: (theme: any) => ({
    marginTop: "20px",
    borderRadius: "5px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }),
  mainIconsStyling: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 1.5,
  }),
  avatarStyling: (theme: any) => ({
    width: "22px",
    height: "22px",
    backgroundColor: theme.palette.primary.main,
  }),
  subIconsStyling: (theme: any) => ({
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 1,
  }),
  accordianMainTitle: (theme: any) => ({
    padding: "5px 10px",
    textAlign: "start",
    fontWeight: 500,
    color:
      theme.palette.mode === "dark"
        ? theme.palette.grey[500]
        : theme.palette.grey[700],
  }),
  accordianSummaryStyling: (theme: any) => ({
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: "20px",
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.grey[700]
        : alpha(theme.palette.primary.light, 0.12),
    borderRadius: "10px",
  }),
};
