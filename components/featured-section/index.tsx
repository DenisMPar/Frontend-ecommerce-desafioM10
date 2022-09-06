import { ProductCard } from "components/product-card";
import { fetchApi } from "lib/api";
import React from "react";
import useSWR from "swr";
import { SubTitle } from "ui/text";
import { CardsWrapper, FeaturedWrapper, SectionTitleWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const FeaturedSection: React.FC<Props> = ({ children }) => {
  const { data, error, mutate } = useSWR("/products/featured", fetchApi);

  return (
    <FeaturedWrapper>
      <SectionTitleWrapper>
        <SubTitle>Productos Destacados</SubTitle>
      </SectionTitleWrapper>
      <CardsWrapper>
        {data?.results
          ? data.results.map((product: any) => {
              return (
                <ProductCard
                  key={product.objectID}
                  productId={product.objectID}
                  url={product.Images[0]?.url}
                  title={product.Name}
                  price={product.Price}
                ></ProductCard>
              );
            })
          : null}
      </CardsWrapper>
    </FeaturedWrapper>
  );
};
