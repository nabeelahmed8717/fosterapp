import excellenceIcon from "@root/assets/img/excellence-icon.png";
import collabrationIcon from "@root/assets/img/collabration-icon.png";
import superIcon from "@root/assets/img/power-icon.png";
import { styled } from "@mui/material";
import { Splide } from "@splidejs/react-splide";

export const highlightsCardData = [
  {
    id: 1,
    icon: excellenceIcon,
    mainTitle: "Streamlined Excellence",
    description: `Say goodbye to administrative
     headaches. Foster App simplifies and
      optimizes your daily tasks, giving you
       more time to focus on what truly
        matters – providing exceptional care.`,
  },
  {
    id: 2,
    icon: collabrationIcon,
    mainTitle: "Real-Time Collaboration",
    description: `Foster App fosters real-time
     communication and collaboration
      among all stakeholders. Stay
       connected, share insights, and make
        informed decisions together`,
  },
  {
    id: 3,
    icon: superIcon,
    mainTitle: "Data Superpowers",
    description: `Your agency's data is a goldmine of
     potential. With Foster App's data-driven
      insights, you'll unlock trends,
       patterns, and opportunities to
        continuously improve your agency's impact. `,
  },
];

export const sliderData = [
  {
    id: 1,
    title: `“Incredible Experience”`,
    description: `"Together, we're creating a brighter future for children in foster care. Join us in reshaping the fostering landscape and making a difference, one innovative solution at a time."`,
    name: "Usman Saeed",
    desgination: "CEO, Foster App",
  },
  {
    id: 2,
    title: `“An Essential Part of Any Agency Operations”`,
    description: `"This software is outstanding and very user friendly. It provides the voice of the child where their outcomes are clearly highlighted by the system tools and progress reports."`,
    name: "Haji Younas",
    desgination: "Chairman & Co founder",
  },
];
export const CustumeSplide = styled(Splide)`
  padding: 40px 0px;
  .splide__arrow {
    display: none;
  }
  .splide {
    padding: 0px !important;
  }
`;
