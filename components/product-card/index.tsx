import { fetchApi } from "lib/api";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
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
  productId?: string;
};
export const ProductCard: React.FC<Props> = (props) => {
  const router = useRouter();
  function handleClick() {
    router.push("/detail/" + props.productId);
  }

  return (
    <CardWrapper onClick={handleClick}>
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
