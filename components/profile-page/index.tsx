import { ProfileForm } from "components/profile-form";
import React, { useState } from "react";
import { Title } from "ui/text";
import { ProfilePageWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const ProfilePage: React.FC<Props> = ({ children }) => {
  return (
    <ProfilePageWrapper>
      <Title>Perfil</Title>
      <ProfileForm></ProfileForm>
    </ProfilePageWrapper>
  );
};
