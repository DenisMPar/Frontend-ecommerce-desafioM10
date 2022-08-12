import React, { useState } from "react";
import { PrimaryButton } from "ui/buttons";
import Input from "ui/input";
import { TinyText } from "ui/text";
import {
  CodeInputWrapper,
  LoginButtonWrapper,
  LoginFormWrapper,
  LoginInputWrapper,
} from "./styled";

type Props = {
  children?: React.ReactNode;
  type: "mail" | "code";
  submit: (e: any) => void;
};
export const LoginForm: React.FC<Props> = (props) => {
  return (
    <>
      {props.type == "mail" ? (
        <LoginFormWrapper onSubmit={props.submit}>
          <LoginInputWrapper>
            <Input label="Email"></Input>
          </LoginInputWrapper>
          <LoginButtonWrapper>
            <PrimaryButton>Continuar</PrimaryButton>
          </LoginButtonWrapper>
        </LoginFormWrapper>
      ) : (
        <LoginFormWrapper>
          <CodeInputWrapper>
            <Input></Input>
          </CodeInputWrapper>
          <TinyText>Te enviamos un código al mail</TinyText>
          <LoginButtonWrapper>
            <PrimaryButton>Ingresar</PrimaryButton>
          </LoginButtonWrapper>
        </LoginFormWrapper>
      )}
    </>
  );
};
