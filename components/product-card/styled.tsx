import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 322px;
  max-height: 322px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  /* border: solid 1px; */
  border-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const CardImgWrapper = styled.div`
  height: 237px;
  width: 322px;
`;
export const CardImg = styled.img`
  height: 100%;
  width: 100%;
`;
export const CardTextWrapper = styled.div`
  height: 84px;
  background-color: #e8e9eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
