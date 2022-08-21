import { SearchForm } from "components/search-form";
import { SideBar } from "components/side-bar";
import { useRouter } from "next/router";

import { type } from "os";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { BurguerIcon, LogoIcon, WhiteLogoIcon } from "ui/icons";
import { BaseHeader, FormWrapper, LogoAndButtonWrapper } from "./styled";

type Props = {
  form: boolean;
  sticky?: boolean;
};

export const Header: React.FC<Props> = (props) => {
  const [flag, setFlag] = useState(false);
  const router = useRouter();
  function handleSubmit(data: any) {
    if (data.query) router.push("/search/" + data.query);
  }

  function toggleMenu() {
    setFlag(!flag);
  }
  return (
    <BaseHeader style={{ position: props.sticky ? "sticky" : "static" }}>
      <LogoAndButtonWrapper>
        <WhiteLogoIcon></WhiteLogoIcon>
        <div onClick={toggleMenu}>
          <BurguerIcon></BurguerIcon>
        </div>
      </LogoAndButtonWrapper>
      {props.form ? (
        <FormWrapper>
          <SearchForm submit={handleSubmit} type="secondary"></SearchForm>
        </FormWrapper>
      ) : null}
      <SideBar toggle={toggleMenu} show={flag}></SideBar>
    </BaseHeader>
  );
};
