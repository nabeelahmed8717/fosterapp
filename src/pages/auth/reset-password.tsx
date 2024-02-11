// next-i18
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// guards
import GuestGuard from "@root/guards/GuestGuard";
// components
import Page from "../../components/Page";
import ResetPasswordForm from "@root/sections/auth/reset-password/ResetPasswordForm";
import Layout from "@root/layouts";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

ResetPassword.getLayout = function getLayout(page: any) {
  return (
    <Layout variant="auth" title="Reset Password">
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const router = useRouter();
  const  user = router.query;
  return (
    <GuestGuard>
      <Page title="Reset Password">
        <ResetPasswordForm data={user}/>
      </Page>
    </GuestGuard>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "login"])),
  },
});
