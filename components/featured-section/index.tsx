import { ProductCard } from "components/product-card";
import React from "react";
import { SubTitle } from "ui/text";
import { CardsWrapper, FeaturedWrapper, SectionTitleWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const FeaturedSection: React.FC<Props> = ({ children }) => {
  return (
    <FeaturedWrapper>
      <SectionTitleWrapper>
        <SubTitle>Productos Destacados</SubTitle>
      </SectionTitleWrapper>
      <CardsWrapper>
        <ProductCard
          price={400}
          url={"https://picsum.photos/300/400"}
          title="Un Producto"
        ></ProductCard>
        <ProductCard
          price={400}
          url={"https://picsum.photos/300/400"}
          title="Un Producto"
        ></ProductCard>
      </CardsWrapper>
    </FeaturedWrapper>
  );
};
