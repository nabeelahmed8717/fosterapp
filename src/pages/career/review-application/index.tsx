import Layout from "@root/layouts";
import ReviewApplicationDetails from "@root/sections/sales-site/careers/review-application-details/ReviewApplicationDetails";
import React from "react";

const PAGE_TITLE = "Review Application";
ReviewApplication.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function ReviewApplication() {
  return (
    <>
      <ReviewApplicationDetails />
    </>
  );
}
