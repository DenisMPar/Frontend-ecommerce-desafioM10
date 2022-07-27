import { Layout } from "components/layout";
import React from "react";

type Props = {
  children?: React.ReactNode;
};
export const HomePage: React.FC<Props> = ({ children }) => {
  return <Layout>Home</Layout>;
};
