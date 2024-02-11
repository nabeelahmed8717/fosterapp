import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const teamsData = [
  {
    id: 1,
    title: `Marketing Manager`,
    location: `London, UK`,
    description: `Foster App is seeking a talented and driven Marketing Manager to lead our marketing efforts and help us raise awareness, drive engagement, and grow our user base. As the Marketing Manager, you will play a pivotal role in shaping our brand, creating marketing strategies, and executing campaigns to reach our target audience effectively. `,
    icon: "",
    shift: [
      {
        title: "Full-Time",
      },
      {
        title: "Permanent",
      },
    ],
  },
  {
    id: 2,
    title: `Sales Manager`,
    location: `London, UK`,
    description: `As a Sales Manager at Foster App, you will play a pivotal role in expanding our customer base and driving revenue growth. You will be responsible for leading our sales team, developing and executing sales strategies, and building strong client relationships. This role offers the opportunity to work with cutting-edge technology in a fast-paced and collaborative startup environment. `,
    icon: "",
    shift: [
      {
        title: "Full-Time",
      },
      {
        title: "Permanent",
      },
    ],
  },
  {
    id: 3,
    title: `Content Writer & Creator`,
    location: `London, UK`,
    description: `We are seeking a talented and passionate Content Writer & Creator to join our team. In this role, you will be responsible for crafting engaging, informative, and impactful content across various platforms. Your words will play a pivotal role in raising awareness, educating our audience, and inspiring change within the foster care community.`,
    icon: "",
    shift: [
      {
        title: "Full-Time",
      },
      {
        title: "Permanent",
      },
    ],
  },
  {
    id: 4,
    title: `Social Media Manager`,
    location: `London, UK`,
    description: `We are seeking a creative and dynamic Social Media Manager to join our team and lead our social media efforts. As our Social Media Manager, you will play a pivotal role in shaping and executing our social media strategy to raise awareness, engage our audience, and drive our mission forward. `,
    icon: "",
    shift: [
      {
        title: "Full-Time",
      },
      {
        title: "Permanent",
      },
    ],
  },
  {
    id: 5,
    title: `Compliance Officer`,
    location: `London, UK`,
    description: `We are seeking a dedicated and detail-oriented Compliance Officer to join our team at Foster App. As a Compliance Officer, you will play a critical role in ensuring that our platform operates in accordance with all relevant regulations and standards. Your primary responsibility will be to oversee and implement compliance procedures, policies, and best practices to maintain a high level of integrity and trust within our platform. `,
    icon: "",
    shift: [
      {
        title: "Full-Time",
      },
      {
        title: "Permanent",
      },
    ],
  },
  {
    id: 6,
    title: `Data Protection Officer`,
    location: `London, UK`,
    description: `Lorem ipsum dolor sit amet consectetur. Quis tellus adipiscing eu morbi cursus lacus nisl sed. Odio purus consectetur habitant a. Nibh amet morbi augue velit nunc est venenatis sollicitudin quis. Aliquam etiam quis viverra massa ac donec convallis amet varius.`,
    icon: "",
    shift: [
      {
        title: "Full-Time",
      },
      {
        title: "Permanent",
      },
    ],
  },
];

export const individualJobData = [
  {
    id: 1,
    title: `Marketing Manager`,
    location: `London, UK`,
    icon: "",
    about: `Foster App is a dynamic and innovative tech company dedicated to making a positive impact on the foster care system. We believe that every child deserves a loving and supportive home, and we're on a mission to connect foster parents with children in need, making the fostering process easier and more accessible. Join us in our mission to transform the lives of vulnerable children. `,
    description: `Foster App is seeking a talented and driven Marketing Manager to lead our marketing efforts and help us raise awareness, drive engagement, and grow our user base. As the Marketing Manager, you will play a pivotal role in shaping our brand, creating marketing strategies, and executing campaigns to reach our target audience effectively. `,
    jobType: [
      {
        title: "Full-Time",
      },
      {
        title: "Permanent",
      },
      {
        title: "Contract",
      },
    ],
    shift: [
      {
        title: "8 Hour Shift",
      },
      {
        title: "Day Shift",
      },
      {
        title: "Night Shift",
      },
      {
        title: "Monday to Friday",
      },
    ],

    responsibilities: [
      {
        title: `Develop and execute comprehensive marketing strategies to drive user acquisition, engagement, and retention.`,
      },
      {
        title: `Plan and manage multi-channel marketing campaigns, including digital marketing, social media, email marketing, and content marketing.`,
      },
      {
        title: `Collaborate with the design team to create visually appealing and impactful marketing materials.`,
      },
      {
        title: `Analyze market trends, user data, and competition to identify opportunities and refine marketing strategies.`,
      },
      {
        title: `Manage and optimize our online presence, including website content and social media platforms.`,
      },
      {
        title: `Build and maintain relationships with partners, influencers, and industry stakeholders.`,
      },
      {
        title: `Monitor and report on the effectiveness of marketing campaigns using relevant metrics.`,
      },
      {
        title: `Develop and manage the marketing budget efficiently.`,
      },
      {
        title: `Stay up to date with industry trends and best practices to ensure Foster App remains competitive.`,
      },
    ],
    qualifications: [
      {
        title: `Bachelor's degree in marketing, Business, or related field (master's degree a plus).`,
      },
      {
        title: `Proven experience as a Marketing Manager or in a similar role, with a track record of successful marketing campaigns.`,
      },
      {
        title: `Strong understanding of digital marketing channels and tools.`,
      },
      {
        title: `Excellent analytical and project management skills.`,
      },
      {
        title: `Creative thinker with the ability to generate innovative marketing ideas.`,
      },
      {
        title: `Strong communication and interpersonal skills.`,
      },
      {
        title: `Proficiency in marketing software and tools (e.g., Google Analytics, SEO tools, email marketing platforms).`,
      },
      {
        title: `Passion for making a positive social impact.`,
      },
    ],
    weOffer: [
      {
        title: `Competitive salary and performance-based bonuses.`,
      },
      {
        title: `Flexible working arrangements.`,
      },
      {
        title: `A supportive and inclusive work environment.`,
      },
      {
        title: `Opportunities for professional growth and development.`,
      },
      {
        title: `The chance to be part of a mission-driven team dedicated to improving the lives of children in foster care.`,
      },
    ],

    apply: `If you are passionate about marketing and want to make a difference in the lives of vulnerable children, we'd love to hear from you. Please submit your CV and a cover letter outlining your relevant experience and why you're excited about joining Foster App.\n\nFoster App is an equal opportunity employer. We encourage applications from candidates of all backgrounds and experiences.`,
  },
];

export const contactFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "firstName",
      label: "First Name",
      multiline: false,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "lastName",
      label: "Last Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "email",
      label: "Email",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    otherOptions: {
      name: "country",
      label: "Country",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 12,
    options: [
      {
        value: "uk",
        label: "Uk",
      },
      {
        value: "pakistan",
        label: "Pakistan",
      },
    ],
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "phone",
      label: "Phone Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  phone: "",
};
export const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string(),
  country: Yup.string(),
  phone: Yup.string().required("Required"),
});
