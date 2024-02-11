import Layout from "@root/layouts";
import React from "react";
import LoginSuccess from "@root/sections/sales-site/login-success/LoginSuccess";

const PAGE_TITLE = "Verification";
Verification.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="main" title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function Verification() {
  return (
    <>
      <LoginSuccess />
    </>
  );
}
