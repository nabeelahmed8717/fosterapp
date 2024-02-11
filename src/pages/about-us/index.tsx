import Layout from "@root/layouts";
import About from "@root/sections/sales-site/about-us/About";
import React from "react";

const PAGE_TITLE = "About Us";
AboutUs.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function AboutUs() {
  return (
    <>
      <About />
    </>
  );
}
