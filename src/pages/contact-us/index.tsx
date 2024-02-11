import Layout from "@root/layouts";
import React from "react";
import ContactForm from "@root/sections/sales-site/contact-us/ContactForm";

const PAGE_TITLE = "Contact Us";
ContactUs.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function ContactUs() {
  return (
    <>
      <ContactForm />
    </>
  );
}
