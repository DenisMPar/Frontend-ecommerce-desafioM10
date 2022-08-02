import { SearchForm } from "components/search-form";
import { SideBar } from "components/side-bar";
import { type } from "os";
import React, { useState } from "react";
import { BurguerIcon, LogoIcon, WhiteLogoIcon } from "ui/icons";
import { BaseHeader, FormWrapper, LogoAndButtonWrapper } from "./styled";

type Props = {
  form: boolean;
};

export const Header: React.FC<Props> = (props) => {
  const [flag, setFlag] = useState(false);

  function toggleMenu() {
    setFlag(!flag);
  }
  return (
    <BaseHeader>
      <LogoAndButtonWrapper>
        <WhiteLogoIcon></WhiteLogoIcon>
        <div onClick={toggleMenu}>
          <BurguerIcon></BurguerIcon>
        </div>
      </LogoAndButtonWrapper>
      {props.form ? (
        <FormWrapper>
          <SearchForm type="secondary"></SearchForm>
        </FormWrapper>
      ) : null}
      <SideBar toggle={toggleMenu} show={flag}></SideBar>
    </BaseHeader>
  );
};
