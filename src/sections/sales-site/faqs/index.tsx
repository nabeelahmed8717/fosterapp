import laptopIcon from "@root/assets/img/laptop-icon.png";
import mobileIcon from "@root/assets/img/mobile-icon.png";
import chromeIcon from "@root/assets/img/chrome.png";
import firefoxIcon from "@root/assets/img/firefox.png";
import operaIcon from "@root/assets/img/opera.png";
import safariIcon from "@root/assets/img/safari.png";
import bravoIcon from "@root/assets/img/bravo.png";

export const faqsAccordian = [
  {
    id: 1,
    title: `Q1) What is an Independent Fostering Agency (IFA)?`,
    description: `An Independent Fostering Agency (IFA), is a private organization which recruits, trains and supports its own foster parents.Local authorities don't always have the resources to meet the increasing demand for foster homes and frequently send referrals to IFAs to find suitable foster parents for children in need of care.`,
  },
  {
    id: 2,
    title: `Q2) Who do I contact if there is a problem with the software?`,
    description: `Please raise your concerns with IT Helpdesk within the software Or please contact Us with the information in the link:`,
    ankerTag: [
      {
        title: `Contact Us`,
        link: `/contact-us`,
      },
    ],
  },
  {
    id: 3,
    title: `Q3) What is the technical support?`,
    description: `Technical support refers to services that entities provide to users of technology products or services. There is a dedicated Team working to fix , upgrade the software.`,
  },
  {
    id: 4,
    title: `Q4) Who do I contact if I have a complaint or compliment?`,
    description: `You can use our`,
    ankerTag: [
      {
        title: `Contact Us`,
        link: `/contact-us`,
      },
    ],
  },
  {
    id: 5,
    title: `Q5) Is FosterApp Ofsted compliant?`,
    description: `FosterApp is fully compliant with ofsted , and we are also compliant with :`,
    sublist: [
      {
        list: `National Minimum Standards (NMS) applicable to the provision of fostering services`,
      },
      {
        list: `Fully compliant to Fostering Services (England) Regulations 2011`,
      },
      {
        list: `Secure Hosted Independent Data Centre with ISO Certification`,
      },
      {
        list: `GDPR Compliant`,
      },
      {
        list: `Advance Notifications for Compliance (Statutory) Checks`,
      },
      {
        list: `Secure Web Login`,
      },
    ],
    footer: [
      {
        title: "Please see on FosterApp",
        link: `https://app-dev.fosterapp.co.uk/`,
      },
    ],
  },
  {
    id: 6,
    title: `Q6) How can I request for a Demo ?`,
    description: `Please use contact us using`,
    ankerTag: [
      {
        title: `Register your Interest form`,
        link: `/auth/sign-up`,
      },
    ],
  },
  {
    id: 7,
    title: `Q7) What is Around-the Clock Support ?`,
    description: `You’ll be introduced to an entire network of support, including your own dedicated social worker and other foster parents. You'll also have access to a 24/7 helpline, so you're never alone.`,
  },
  {
    id: 8,
    title: `Q8) How does FosterApp Work ?`,
    description: `There are minimal steps involved in FosterApp Set-up , please go through the steps on`,
    ankerTag: [
      {
        title: `How it works`,
        link: `/how-it-works`,
      },
    ],
  },
  {
    id: 9,
    title: `Q9) How can I alter the Access Levels of each User to specific Modules ?`,
    description: `There is a dedicated Module for Altering the Access Levels , Visibility , using which the IFA system Admin can change permissions anytime using Simple user friendly Screens.`,
  },
  {
    id: 10,
    title: `Q10) What Browsers is FosterApp Compactable with ?`,
    description: `FosterApp is fully compactable in the below browsers.`,
    desktopSupport: [
      {
        icon: laptopIcon,
        title: `For Desktop`,
        browserInfo: [
          {
            icon: chromeIcon,
            title: `For Chrome`,
          },
          {
            icon: firefoxIcon,
            title: `Firefox`,
          },
          {
            icon: operaIcon,
            title: `Opera`,
          },
          {
            icon: safariIcon,
            title: `Safari`,
          },
          {
            icon: bravoIcon,
            title: `Bravo`,
          },
        ],
      },
    ],
    mobileSupport: [
      {
        icon: mobileIcon,
        title: `For Mobile`,
        browserInfo: [
          {
            icon: chromeIcon,
            title: `For Chrome`,
          },
          {
            icon: firefoxIcon,
            title: `Firefox`,
          },
          {
            icon: operaIcon,
            title: `Opera`,
          },
          {
            icon: safariIcon,
            title: `Safari`,
          },
          {
            icon: bravoIcon,
            title: `Bravo`,
          },
        ],
      },
    ],
  },
];
