import Layout from "@root/layouts";
import Faqs from "@root/sections/sales-site/faqs/Faqs";
import React from "react";

const PAGE_TITLE = "FAQs";
frequentlyAskedQuestions.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function frequentlyAskedQuestions() {
  return (
    <>
      {/* Cookie Section */}
      <Faqs />
    </>
  );
}
