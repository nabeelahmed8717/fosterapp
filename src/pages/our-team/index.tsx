import Layout from "@root/layouts";
import React from "react";
import Team from "@root/sections/sales-site/our-team/Team";

const PAGE_TITLE = "Our Team";
OurTeam.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function OurTeam() {
  return (
    <>
      <Team />
    </>
  );
}
