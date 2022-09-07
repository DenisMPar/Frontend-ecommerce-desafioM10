import { SearchForm } from "components/search-form";
import { SideBar } from "components/side-bar";
import Link from "next/link";
import { useRouter } from "next/router";
import { type } from "os";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { PrimaryButton } from "ui/buttons";
import { ArrowDownIcon, BurguerIcon, LogoIcon, WhiteLogoIcon } from "ui/icons";
import { BodyText, LargeText } from "ui/text";
import {
  ArrowWrapper,
  BaseHeader,
  BurgerWrapper,
  FormWrapper,
  IconContainer,
  LogoAndButtonWrapper,
  MenuButtonWrapper,
  SideBarWrapper,
} from "./styled";

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
      <Link href="/">
        <IconContainer>
          <WhiteLogoIcon />
        </IconContainer>
      </Link>
      <BurgerWrapper onClick={toggleMenu}>
        <BurguerIcon></BurguerIcon>
      </BurgerWrapper>
      <MenuButtonWrapper onClick={toggleMenu}>
        <LargeText>Menu</LargeText>
        <ArrowWrapper
          style={
            flag
              ? { transform: `rotate(-180deg)`, transition: "0.6s ease-in-out" }
              : { transform: ``, transition: "0.6s ease-in-out" }
          }
        >
          <ArrowDownIcon></ArrowDownIcon>
        </ArrowWrapper>
      </MenuButtonWrapper>
      {props.form ? (
        <FormWrapper>
          <SearchForm submit={handleSubmit} type="secondary"></SearchForm>
        </FormWrapper>
      ) : null}
      <SideBar toggle={toggleMenu} show={flag}></SideBar>
    </BaseHeader>
  );
};
