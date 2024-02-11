import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import locationIcon from "@root/assets/img/location-icon.png";
import callsIcon from "@root/assets/img/calls-icon.png";
import salesIcon from "@root/assets/img/sales-icon.png";
import supportIcon from "@root/assets/img/support-icon.png";

export const contactFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "first_name",
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
      name: "last_name",
      label: "Last Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "business_name",
      label: "Business Name",
      fullWidth: true,
      disabled:true
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "email",
      label: "Email",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "phone_number",
      label: "Phone Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "subject",
      label: "Subject",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "message",
      label: "Message",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  // {
  //   id: 8,
  //   gridLength: 6,
  //   otherOptions: {
  //     name: "address1",
  //     label: "Address 1",
  //     fullWidth: true,
  //   },
  //   component: RHFTextField,
  // },
  // {
  //   id: 9,
  //   gridLength: 6,
  //   otherOptions: {
  //     name: "address2",
  //     label: "Address 2",
  //     fullWidth: true,
  //   },
  //   component: RHFTextField,
  // },
  // {
  //   id: 10,
  //   otherOptions: {
  //     name: "privacy",
  //     label: "You agree to our friendly privacy policy.",
  //   },
  //   gridLength: 12,
  //   component: RHFCheckbox,
  // },
];

export const defaultValues = {
  first_name: "",
  last_name: "",
  business_name: "Foster App",
  email: "",
  phone_number: "",
  subject: "",
  message: "",
};
export const formSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  business_name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  phone_number: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
});

export const cardsData = [
  {
    id: 1,
    icon: locationIcon,
    title: "Chat to sales",
    description: `Speak to our friendly team.`,
    contact: "info@fosterapp.co.uk",
  },
  {
    id: 2,
    icon: callsIcon,
    title: "Chat to support",
    description: `We’re here to help.`,
    contact: "info@fosterapp.co.uk",
  },
  {
    id: 3,
    icon: salesIcon,
    title: "Visit us",
    description: `Orcalo Holdings`,
    contact: `6-9, The square, Stockley park, Hayes, Uxbridge UB11 1FW`,
  },
  {
    id: 4,
    icon: supportIcon,
    title: "Call us",
    description: `Mon-Fri from 8am to 5pm.`,
    contact: `+44 (0)7500 287504`,
  },
];
