import styled from "styled-components";
import { SubTitle } from "ui/text";

export const DetailWrapper = styled.div`
  margin: 36px 24px 100px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const NotFoundWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 510px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailImgWrapper = styled.div`
  height: 100%;
`;
export const DetailImg = styled.img`
  height: 100%;
  width: 100%;
  max-height: 290px;
`;

export const DetailDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DetailButtonWrapper = styled.div`
  height: 63px;
`;

export const ProductDetailTitle = styled(SubTitle).attrs(() => ({
  as: "h1",
}))``;
