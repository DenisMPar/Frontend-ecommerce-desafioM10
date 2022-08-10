import { Layout } from "components/layout";
import { ProductDetailPage } from "components/product-detail-page";
import type { NextPage } from "next";

const Search: NextPage = () => {
  return (
    <Layout form={true} sticky={false}>
      <ProductDetailPage></ProductDetailPage>
    </Layout>
  );
};

export default Search;
