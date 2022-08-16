import { Layout } from "components/layout";
import { SearchPage } from "components/search-page";
import { queryState } from "hooks/hooks";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LargeText } from "ui/text";

const Search: NextPage = () => {
  return (
    <Layout form={true}>
      <SearchPage></SearchPage>
    </Layout>
  );
};

export default Search;
