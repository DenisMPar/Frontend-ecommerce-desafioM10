import { LoginForm } from "components/login-form";
import React, { useState } from "react";
import { Title } from "ui/text";
import { LoginPageWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const LoginPage: React.FC<Props> = ({ children }) => {
  const [mail, setMail] = useState("");
  const [showCodePage, setShowCodePage] = useState(false);
  function handleSubmit(e: any) {
    e.preventDefault();
    setShowCodePage(!showCodePage);
    setMail(e.target.Email.value);
    e.target.reset();
  }
  return (
    <LoginPageWrapper>
      {!showCodePage ? <Title>Ingresar</Title> : <Title>Código</Title>}
      <LoginForm submit={handleSubmit} type={mail ? "code" : "mail"} />
    </LoginPageWrapper>
  );
};
