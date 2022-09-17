import styled from "styled-components";

export const MainSectionWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 84px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 36px;
  @media screen and (min-width: 882px) {
    background-color: #00000075;
    color: #fff;
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  max-width: 400px;
`;
