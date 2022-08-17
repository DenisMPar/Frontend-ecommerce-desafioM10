import { Layout } from "components/layout";
import { SearchPage } from "components/search-page";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LargeText } from "ui/text";
import useSWR from "swr";

const Search: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;
  return (
    <Layout form={true}>
      <SearchPage query={query as string}></SearchPage>
    </Layout>
  );
};

export default Search;
