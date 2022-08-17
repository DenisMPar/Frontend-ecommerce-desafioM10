import React from "react";
import { LargeText, SubTitle } from "ui/text";
import {
  CardImg,
  CardImgWrapper,
  CardTextWrapper,
  CardWrapper,
} from "./styled";
type Props = {
  url: string;
  title: string;
  price: number;
};
export const ProductCard: React.FC<Props> = (props) => {
  return (
    <CardWrapper>
      <CardImgWrapper>
        <CardImg src={props.url}></CardImg>
      </CardImgWrapper>
      <CardTextWrapper>
        <LargeText>{props.title}</LargeText>
        <SubTitle>${props.price}</SubTitle>
      </CardTextWrapper>
    </CardWrapper>
  );
};
