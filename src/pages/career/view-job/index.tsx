import Layout from "@root/layouts";
import React from "react";
import ViewJobDetails from "@root/sections/sales-site/careers/view-job-details/ViewJobDetails";

const PAGE_TITLE = "View Job";
ViewJob.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function ViewJob() {
  return (
    <>
      <ViewJobDetails />
    </>
  );
}
