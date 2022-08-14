import React, { useState } from "react";
import { PrimaryButton } from "ui/buttons";
import Input from "ui/input";
import { TinyText } from "ui/text";
import {
  ProfileButtonWrapper,
  ProfileFormWrapper,
  ProfileInputWrapper,
} from "./styled";
import { useForm } from "react-hook-form";

type Props = {
  children?: React.ReactNode;
  submit?: (e: any) => void;
};
export const ProfileForm: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <ProfileFormWrapper onSubmit={props.submit}>
      <ProfileInputWrapper>
        <Input name="name" register={register} label="Nombre"></Input>
      </ProfileInputWrapper>
      <ProfileInputWrapper>
        <Input name="direction" register={register} label="Direccion"></Input>
      </ProfileInputWrapper>
      <ProfileInputWrapper>
        <Input name="phone" register={register} label="Telefono"></Input>
      </ProfileInputWrapper>
      <ProfileButtonWrapper>
        <PrimaryButton>Continuar</PrimaryButton>
      </ProfileButtonWrapper>
    </ProfileFormWrapper>
  );
};
