import { Layout } from "components/layout";
import { SearchPage } from "components/search-page";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LargeText } from "ui/text";
import useSWR from "swr";
import Head from "next/head";

const Search: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;
  return (
    <Layout form={true}>
      <Head>
        <title>Resultados - compralo</title>
      </Head>
      <SearchPage query={query as string}></SearchPage>
    </Layout>
  );
};

export default Search;
