import { HomePage } from "components/home-page";
import { Layout } from "components/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Compralo Mueblería</title>
      </Head>
      <Layout form={false} sticky={true}>
        <HomePage></HomePage>
      </Layout>
    </>
  );
};

export default Home;
