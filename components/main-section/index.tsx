import { SearchForm } from "components/search-form";
import { queryState } from "hooks/hooks";
import { useRouter } from "next/router";
import React from "react";
import { useSetRecoilState } from "recoil";
import { Title } from "ui/text";
import { MainSectionWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const MainSection: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const setQuery = useSetRecoilState(queryState);
  function handleSubmit(data: any) {
    if (data.query) {
      setQuery(data.query);
      router.push("/search/" + data.query);
    }
  }
  return (
    <MainSectionWrapper>
      <Title>
        El mejor <br></br> e-commerce
      </Title>
      <SearchForm type="primary" submit={handleSubmit}></SearchForm>
    </MainSectionWrapper>
  );
};
