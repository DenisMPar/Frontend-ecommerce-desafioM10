import { ProfileForm } from "components/profile-form";
import { log } from "console";
import { useCheckToken } from "hooks/hooks";
import { fetchApi, getSettedToken } from "lib/api";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { SecondaryButton } from "ui/buttons";
import { Spinner } from "ui/loader";
import { Title } from "ui/text";
import { ProfilePageWrapper, ProfileTitleWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const ProfilePage: React.FC<Props> = ({ children }) => {
  const { data, error } = useSWR("/me", fetchApi);

  return (
    <ProfilePageWrapper>
      <ProfileTitleWrapper>
        <Title>Perfil</Title>
      </ProfileTitleWrapper>
      <ProfileForm data={data}></ProfileForm>
    </ProfilePageWrapper>
  );
};
