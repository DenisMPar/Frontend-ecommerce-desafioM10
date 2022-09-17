import { Layout } from "components/layout";
import { ProductDetailPage } from "components/product-detail-page";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const Search: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <Layout form={true} sticky={false}>
      <Head>
        <title>Detalle Del Producto - Compralo</title>
      </Head>
      <ProductDetailPage
        productId={productId ? (productId as string) : ""}
      ></ProductDetailPage>
    </Layout>
  );
};

export default Search;
