import React from "react";
import { PrimaryButton } from "ui/buttons";
import { BodyText, LargeTextBold, SubTitle, Title } from "ui/text";
import {
  DetailDescriptionWrapper,
  DetailWrapper,
  DetailImgWrapper,
  DetailImg,
  DetailButtonWrapper,
  ProductDetailTitle,
} from "./styled";

export const ProductDetailPage: React.FC = () => {
  return (
    <DetailWrapper>
      <DetailImgWrapper>
        <DetailImg src="https://picsum.photos/300/300" />
      </DetailImgWrapper>
      <DetailDescriptionWrapper>
        <ProductDetailTitle style={{ margin: "0" }}>
          Un producto
        </ProductDetailTitle>
        <SubTitle style={{ margin: "0" }}>$500</SubTitle>
        <DetailButtonWrapper>
          <PrimaryButton>Comprar</PrimaryButton>
        </DetailButtonWrapper>
        <BodyText>
          Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet eros suscipit pulvinar euismod. Suspendisse
          potenti.
        </BodyText>
      </DetailDescriptionWrapper>
    </DetailWrapper>
  );
};
