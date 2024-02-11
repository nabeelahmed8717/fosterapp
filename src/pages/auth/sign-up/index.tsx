// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../../components/Page";
import LoginForm from "@root/sections/auth/signup/SignupForm";
import Layout from "@root/layouts";

// ----------------------------------------------------------------------

Signup.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Signup">
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function Signup() {
  return (
    // <GuestGuard>
    <Page title="Signup">
      <LoginForm />
    </Page>
    //</GuestGuard>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "Signup"])),
  },
});
