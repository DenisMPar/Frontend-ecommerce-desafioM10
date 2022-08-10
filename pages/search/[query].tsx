import { Layout } from "components/layout";
import { SearchPage } from "components/search-page";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { LargeText } from "ui/text";

const Search: NextPage = () => {
  const router = useRouter();
  const { query } = router.query;
  console.log(query);

  return (
    <Layout form={true}>
      <SearchPage>
        <LargeText>{query}</LargeText>
      </SearchPage>
    </Layout>
  );
};

export default Search;
