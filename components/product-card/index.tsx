import React from "react";
import { LargeText, SubTitle } from "ui/text";
import { CardImgtWrapper, CardTextWrapper, CardWrapper } from "./styled";

export const ProductCard: React.FC = () => {
  return (
    <CardWrapper>
      <CardImgtWrapper></CardImgtWrapper>
      <CardTextWrapper>
        <LargeText>Un producto cool</LargeText>
        <SubTitle>$400</SubTitle>
      </CardTextWrapper>
    </CardWrapper>
  );
};
