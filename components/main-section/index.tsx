import { SearchForm } from "components/search-form";
import React from "react";
import { Title } from "ui/text";
import { MainSectionWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const MainSection: React.FC<Props> = ({ children }) => {
  return (
    <MainSectionWrapper>
      <Title>El mejor e-commerce</Title>
      <SearchForm></SearchForm>
    </MainSectionWrapper>
  );
};
