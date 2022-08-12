import { Layout } from "components/layout";

import { ProfilePage } from "components/profile-page";
import type { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <Layout form={false}>
      <ProfilePage></ProfilePage>
    </Layout>
  );
};

export default Profile;
