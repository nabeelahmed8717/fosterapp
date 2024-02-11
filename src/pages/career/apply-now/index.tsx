import Layout from "@root/layouts";
import React from "react";
import ApplyJobNow from "@root/sections/sales-site/careers/apply-job-now/ApplyJobNow";

const PAGE_TITLE = "Appy Now";
ApplyNow.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function ApplyNow() {
  return (
    <>
      <ApplyJobNow />
    </>
  );
}
