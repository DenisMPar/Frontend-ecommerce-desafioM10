import { ProductCard } from "components/product-card";
import React from "react";
import { SubTitle } from "ui/text";
import { CardsWrapper, FeaturedWrapper, SectionTitleWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
  data: any;
};
export const FeaturedSection: React.FC<Props> = ({ children, data }) => {
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
