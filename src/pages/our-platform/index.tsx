import Layout from "@root/layouts";
import React from "react";
import Platform from "@root/sections/sales-site/our-platform/Platform";

const PAGE_TITLE = "Our Platform";
OurPlatform.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function OurPlatform() {
  return (
    <>
      <Platform />
    </>
  );
}
