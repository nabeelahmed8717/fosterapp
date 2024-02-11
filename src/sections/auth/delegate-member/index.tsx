import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const delegatesMembers = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "firstName",
      label: "First Name",
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
    gridLength: 6,
    otherOptions: {
      name: "email",
      label: "Email",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "bussinessName",
      label: "Bussiness Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "companyName",
      label: "Company Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "compantRegNumber",
      label: "Company Registration Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "bussinessEmail",
      label: "Bussiness Email",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 8,
    otherOptions: {
      name: "serviceOffered",
      label: "Service Offered",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "fosterCarer",
        label: "Foster Carer",
      },
      {
        value: "child",
        label: "Child",
      },
      {
        value: "safeGuarding",
        label: "Safeguarding",
      },
      {
        value: "localAuthority",
        label: "Local Authority",
      },
      {
        value: "panel",
        label: "Panel",
      },
      {
        value: "carerRecruitment",
        label: "Carer Recruitment",
      },
      {
        value: "placement",
        label: "Placement",
      },
      {
        value: "training",
        label: "Training",
      },
      {
        value: "audits",
        label: "Audits",
      },
      {
        value: "advocacy",
        label: "Advocacy",
      },
      {
        value: "compliance",
        label: "Compliance",
      },
      {
        value: "marketing",
        label: "Marketing",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
  },

  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "serviceDescription",
      label: "Service Description",
      multiline: true,
      minRows: 2,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  bussinessName: "",
  companyName: "",
  serviceOffered: "",
  phoneNumber: "",
  bussinessEmail: "",
  compantRegNumber: "",
  password: "",
  confirmPassword: "",
};

export const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  bussinessName: Yup.string().required("Required"),
  companyName: Yup.string().required("Required"),
  serviceOffered: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
  compantRegNumber: Yup.string().required("Required"),
  bussinessEmail: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required"),
});

export { default as ReactHookForm } from "./DelegateMembers";
