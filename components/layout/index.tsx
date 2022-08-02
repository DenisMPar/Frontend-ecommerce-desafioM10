import { Footer } from "components/footer";
import { Header } from "components/header";
import { type } from "os";
import React from "react";

type Props = {
  children?: React.ReactNode;
  form: boolean;
};
export const Layout: React.FC<Props> = ({ children, form }) => {
  return (
    <div>
      <Header form={form}></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};
