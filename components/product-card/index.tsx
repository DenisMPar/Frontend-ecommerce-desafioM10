import React from "react";
import { LargeText, SubTitle } from "ui/text";
import {
  CardImg,
  CardImgWrapper,
  CardTextWrapper,
  CardWrapper,
} from "./styled";

export const ProductCard: React.FC = () => {
  return (
    <CardWrapper>
      <CardImgWrapper>
        <CardImg src="https://picsum.photos/300/300"></CardImg>
      </CardImgWrapper>
      <CardTextWrapper>
        <LargeText>Un producto cool</LargeText>
        <SubTitle>$400</SubTitle>
      </CardTextWrapper>
    </CardWrapper>
  );
};
