// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page from "../../../components/Page";
import Layout from "@root/layouts";
import DelegateMembers from "@root/sections/auth/delegate-member/DelegateMembers";

DelegateMember.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Create your Partner account now">
      {page}
    </Layout>
  );
};

export default function DelegateMember() {
  return (
    <Page title="Create your Partner account now">
      <DelegateMembers />
    </Page>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "Signup"])),
  },
});
