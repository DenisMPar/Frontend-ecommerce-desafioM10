import { ProfileForm } from "components/profile-form";
import { log } from "console";
import { useCheckToken } from "hooks/hooks";
import { fetchApi, getSettedToken } from "lib/api";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Spinner } from "ui/loader";
import { Title } from "ui/text";
import { ProfilePageWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const ProfilePage: React.FC<Props> = ({ children }) => {
  const { data, error } = useSWR("/me", fetchApi);

  return (
    <ProfilePageWrapper>
      <Title>Perfil</Title>
      <ProfileForm data={data}></ProfileForm>
    </ProfilePageWrapper>
  );
};
