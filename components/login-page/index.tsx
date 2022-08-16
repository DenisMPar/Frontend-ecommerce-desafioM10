import { LoginForm } from "components/login-form";
import { getAuth, getToken } from "lib/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Spinner } from "ui/loader";
import { Title } from "ui/text";
import { LoginLoadersWrapper, LoginPageWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const LoginPage: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [mail, setMail] = useState("");
  const [showCodePage, setShowCodePage] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(data: any, e: any) {
    setError(false);
    setLoading(true);
    let res;
    if (data.email && !data.code) res = await getAuth({ email: data.email });
    if (data.email && data.code)
      res = await getToken({ email: mail, code: parseInt(data.code) });
    if (res.error) {
      setLoading(false);
      setError(true);
    } else if (res.token) {
      router.push("/");
    } else {
      setError(false);
      setMail(data.email);
      e.target.reset();
      setLoading(false);
      setShowCodePage(!showCodePage);
    }
  }
  return (
    <LoginPageWrapper>
      {!showCodePage ? <Title>Ingresar</Title> : <Title>Código</Title>}
      <LoginForm submit={handleSubmit} type={mail ? "code" : "mail"} />
      <LoginLoadersWrapper>
        {loading && <Spinner></Spinner>}
        {error && <span>Algo salio mal</span>}
      </LoginLoadersWrapper>
    </LoginPageWrapper>
  );
};
