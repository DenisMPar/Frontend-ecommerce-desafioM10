import React from "react";
import { SecondaryButton, TertiaryButton } from "ui/buttons";
import Input from "ui/input";
import { BaseForm } from "./styled";
import { useForm } from "react-hook-form";

type Props = {
  children?: React.ReactNode;
  type: "primary" | "secondary";
};
export const SearchForm: React.FC<Props> = ({ children, type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <BaseForm>
      <Input
        name="query"
        label=""
        register={register}
        placeHolder="Encontra tu producto"
      ></Input>
      {type == "primary" ? (
        <SecondaryButton>Buscar</SecondaryButton>
      ) : (
        <TertiaryButton>Buscar</TertiaryButton>
      )}
    </BaseForm>
  );
};
