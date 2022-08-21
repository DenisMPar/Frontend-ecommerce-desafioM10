import { FeaturedSection } from "components/featured-section";
import { MainSection } from "components/main-section";
import { ProductCard } from "components/product-card";
import React, { useState } from "react";
import { BodyText, TinyText } from "ui/text";
import {
  ProductsCardPagesWrapper,
  ProductsCardWrapper,
  SearchWrapper,
} from "./styled";
import useSWR from "swr";
import { fetchApi } from "lib/api";

type Props = {
  children?: React.ReactNode;
  query: string;
};
export const SearchPage: React.FC<Props> = ({ children, query }) => {
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const { data, error, mutate } = useSWR(
    "/search?q=" + query + "&offset=" + offset + "&limit=3",
    fetchApi
  );

  const results = data?.results;

  function nextPage() {
    const total = data?.pagination.total;
    const pages = Math.floor(total / 3);
    if (page < pages) {
      setPage(page + 1);
      setOffset(offset + 3);
    }
  }

  return (
    <SearchWrapper>
      {error ? (
        <div>Upss algo salio mal</div>
      ) : (
        <ProductsCardWrapper>
          {results ? (
            results.map((item: any) => {
              return (
                <ProductCard
                  key={item.objectID}
                  url={item.Images[0]?.url}
                  title={item.Name}
                  price={item.Price}
                />
              );
            })
          ) : (
            <div>loading</div>
          )}
        </ProductsCardWrapper>
      )}
      {data ? (
        <ProductsCardPagesWrapper onClick={nextPage}>
          Ver mas
        </ProductsCardPagesWrapper>
      ) : null}
    </SearchWrapper>
  );
};
