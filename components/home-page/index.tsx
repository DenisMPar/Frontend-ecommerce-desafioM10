import { FeaturedSection } from "components/featured-section";
import { MainSection } from "components/main-section";
import React from "react";
import { HomeWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const HomePage: React.FC<Props> = ({ children }) => {
  return (
    <HomeWrapper>
      <MainSection></MainSection>
      <FeaturedSection></FeaturedSection>
    </HomeWrapper>
  );
};
