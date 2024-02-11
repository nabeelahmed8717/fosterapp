import Layout from "@root/layouts";
import React from "react";
import Careers from "@root/sections/sales-site/careers/Careers";

const PAGE_TITLE = "Career";
Career.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function Career() {
  return (
    <>
      <Careers />
    </>
  );
}
