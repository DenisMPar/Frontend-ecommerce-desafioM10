import { Layout } from "components/layout";
import { LoginPage } from "components/login-page";
import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Layout form={false}>
      <LoginPage></LoginPage>
    </Layout>
  );
};

export default Login;
