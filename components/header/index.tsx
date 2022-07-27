import React from "react";
import { BurguerIcon, LogoIcon, WhiteLogoIcon } from "ui/icons";
import { HeaderWrapper } from "./styled";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <WhiteLogoIcon></WhiteLogoIcon>
      <BurguerIcon></BurguerIcon>
    </HeaderWrapper>
  );
};
