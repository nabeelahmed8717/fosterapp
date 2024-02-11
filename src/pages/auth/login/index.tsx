// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Page from "../../../components/Page";
import Layout from "@root/layouts";
import LoginForm from "@root/sections/auth/login/LoginForm";

Login.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Login">
      {page}
    </Layout>
  );
};

export default function Login() {
  return (
    <Page title="Login">
      <LoginForm />
    </Page>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "Signup"])),
  },
});
