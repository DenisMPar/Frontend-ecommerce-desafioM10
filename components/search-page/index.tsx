import { FeaturedSection } from "components/featured-section";
import { MainSection } from "components/main-section";
import { ProductCard } from "components/product-card";
import React from "react";
import { BodyText, TinyText } from "ui/text";
import { ProductsCardWrapper, SearchWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const SearchPage: React.FC<Props> = ({ children }) => {
  return (
    <SearchWrapper>
      <BodyText>3 productos de 100</BodyText>
      <ProductsCardWrapper>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </ProductsCardWrapper>
    </SearchWrapper>
  );
};
