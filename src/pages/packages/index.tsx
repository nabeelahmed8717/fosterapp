import Layout from "@root/layouts";
import React from "react";
import Package from "@root/sections/sales-site/packages/Package";

const PAGE_TITLE = "Packages";
Packages.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function Packages() {
  return (
    <>
      <Package />
    </>
  );
}
