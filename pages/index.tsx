import { HomePage } from "components/home-page";
import { Layout } from "components/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomePage></HomePage>
    </Layout>
  );
};

export default Home;
