import { Layout } from "components/layout";
import { ProductDetailPage } from "components/product-detail-page";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Search: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <Layout form={true} sticky={false}>
      <ProductDetailPage
        productId={productId ? (productId as string) : ""}
      ></ProductDetailPage>
    </Layout>
  );
};

export default Search;
