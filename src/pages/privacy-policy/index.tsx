import HeroSection from "@root/components/static-page/HeroSection";
import Layout from "@root/layouts";
import PrivacyAndPolicy from "@root/sections/sales-site/privacy-and-policy/PrivacyAndPolicy";
import React from "react";

const PAGE_TITLE = "Privacy Policy";
PrivacyPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function PrivacyPolicy() {
  return (
    <>
      {/* Main Privacy Page */}
      <PrivacyAndPolicy />
    </>
  );
}
