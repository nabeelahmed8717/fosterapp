import Layout from "@root/layouts";
import React from "react";
import HowWorks from "@root/sections/sales-site/how-works/HowWorks";

const PAGE_TITLE = "How It Works";
HowItWorks.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function HowItWorks() {
  return (
    <>
      <HowWorks />
    </>
  );
}
