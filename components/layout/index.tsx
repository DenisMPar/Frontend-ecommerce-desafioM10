import { Header } from "components/header";
import { type } from "os";
import React from "react";

type Props = {
  children?: React.ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};
