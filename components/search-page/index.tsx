import { FeaturedSection } from "components/featured-section";
import { MainSection } from "components/main-section";
import { ProductCard } from "components/product-card";
import React, { useState } from "react";
import { BodyText, TinyText } from "ui/text";
import { ProductsCardWrapper, SearchWrapper } from "./styled";
import useSWR from "swr";
import { fetchApi } from "lib/api";

type Props = {
  children?: React.ReactNode;
  query: string;
};
export const SearchPage: React.FC<Props> = ({ children, query }) => {
  const [page, setPage] = useState(0);
  const { data, error, mutate } = useSWR(
    "/search?q=" + query + "&offset=" + page + "&limit=3",
    fetchApi
  );
  console.log(data);

  const results = data?.results;

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
    </SearchWrapper>
  );
};
