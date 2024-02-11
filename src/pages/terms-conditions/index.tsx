import HeroSection from "@root/components/static-page/HeroSection";
import Layout from "@root/layouts";
import TermsAndConditions from "@root/sections/sales-site/terms-and-conditions/TermsAndConditions";
import React from "react";

const PAGE_TITLE = "Terms & Conditions";
TermsConditions.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function TermsConditions() {
  return (
    <>
      {/* Terms & Conditions Page */}
      <TermsAndConditions />
    </>
  );
}
