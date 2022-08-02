import React from "react";
import { SecondaryButton, TertiaryButton } from "ui/buttons";
import Input from "ui/input";
import { BaseForm } from "./styled";

type Props = {
  children?: React.ReactNode;
  type: "primary" | "secondary";
};
export const SearchForm: React.FC<Props> = ({ children, type }) => {
  return (
    <BaseForm>
      <Input placeHolder="Encontra tu producto"></Input>
      {type == "primary" ? (
        <SecondaryButton>Buscar</SecondaryButton>
      ) : (
        <TertiaryButton>Buscar</TertiaryButton>
      )}
    </BaseForm>
  );
};
