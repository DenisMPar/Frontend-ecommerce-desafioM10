import React from "react";
import { SecondaryButton, TertiaryButton } from "ui/buttons";
import Input from "ui/input";
import { BaseForm } from "./styled";
import { useForm } from "react-hook-form";

type Props = {
  children?: React.ReactNode;
  type: "primary" | "secondary";
  submit: (data: any) => any;
  value?: string;
};
export const SearchForm: React.FC<Props> = ({
  children,
  type,
  submit,
  value,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <BaseForm onSubmit={handleSubmit(submit)} autoComplete={"off"}>
      <Input
        default={value}
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
