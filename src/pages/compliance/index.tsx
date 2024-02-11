import Layout from "@root/layouts";
import NewCompliance from "@root/sections/sales-site/compliance/Compliance";
import React from "react";

const PAGE_TITLE = "Compliances";
Compliance.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function Compliance() {
  return (
    <>
      <NewCompliance />
    </>
  );
}
