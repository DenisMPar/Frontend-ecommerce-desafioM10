import React, { useState } from "react";
import { PrimaryButton } from "ui/buttons";
import Input from "ui/input";
import { TinyText } from "ui/text";
import {
  ProfileButtonWrapper,
  ProfileFormWrapper,
  ProfileInputWrapper,
} from "./styled";

type Props = {
  children?: React.ReactNode;
  submit?: (e: any) => void;
};
export const ProfileForm: React.FC<Props> = (props) => {
  return (
    <ProfileFormWrapper onSubmit={props.submit}>
      <ProfileInputWrapper>
        <Input label="Nombre"></Input>
      </ProfileInputWrapper>
      <ProfileInputWrapper>
        <Input label="Direccion"></Input>
      </ProfileInputWrapper>
      <ProfileInputWrapper>
        <Input label="Telefono"></Input>
      </ProfileInputWrapper>
      <ProfileButtonWrapper>
        <PrimaryButton>Continuar</PrimaryButton>
      </ProfileButtonWrapper>
    </ProfileFormWrapper>
  );
};
