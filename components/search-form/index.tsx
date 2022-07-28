import React from "react";
import { SecondaryButton } from "ui/buttons";
import Input from "ui/input";
import { BaseForm } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const SearchForm: React.FC<Props> = ({ children }) => {
  return (
    <BaseForm>
      <Input placeHolder="Encontra tu producto"></Input>
      <SecondaryButton>Buscar</SecondaryButton>
    </BaseForm>
  );
};
