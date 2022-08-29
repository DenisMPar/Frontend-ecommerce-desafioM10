import { Layout } from "components/layout";

import { ProfilePage } from "components/profile-page";
import { RedirectToLogin } from "components/redirect-to-login";
import { useCheckToken } from "hooks/hooks";
import type { NextPage } from "next";
import Link from "next/link";
import { PrimaryButton } from "ui/buttons";
import { Spinner } from "ui/loader";
import { SubTitle } from "ui/text";

const Profile: NextPage = () => {
  const token = useCheckToken();
  return (
    <Layout form={false}>
      {token ? <ProfilePage></ProfilePage> : <RedirectToLogin />}
    </Layout>
  );
};

export default Profile;
