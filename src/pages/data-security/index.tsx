import { Box } from "@mui/material";
import HeroSection from "@root/components/static-page/HeroSection";
import Layout from "@root/layouts";
import DataAndSecurity from "@root/sections/sales-site/data-and-security/DataAndSecurity";
import React from "react";

const PAGE_TITLE = "Data Security";
DataSecurity.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function DataSecurity() {
  return (
    <>
      {/* Data Security Section */}
      <DataAndSecurity />
    </>
  );
}
