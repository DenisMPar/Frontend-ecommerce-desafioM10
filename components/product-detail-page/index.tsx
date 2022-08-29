import { fetchApi, getOrderUrl, getSettedToken } from "lib/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { arrayBuffer } from "stream/consumers";
import useSWR from "swr";
import { PrimaryButton } from "ui/buttons";
import { Spinner } from "ui/loader";
import { BodyText, LargeTextBold, SubTitle, Title } from "ui/text";
import {
  DetailDescriptionWrapper,
  DetailWrapper,
  DetailImgWrapper,
  DetailImg,
  DetailButtonWrapper,
  ProductDetailTitle,
} from "./styled";

type Props = {
  productId: string;
};

export const ProductDetailPage: React.FC<Props> = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [orderError, setOrderError] = useState(false);
  const { data, error, mutate } = useSWR(
    "/products/" + props.productId,
    fetchApi
  );
  async function buyProduct() {
    setOrderError(false);
    setLoading(true);
    const token = await getSettedToken();
    if (!token) {
      router.push("/login");
    }
    try {
      const res = await getOrderUrl(props.productId);
      window.location.href = res.url;
    } catch (error) {
      setOrderError(true);
      setLoading(false);
    }
  }

  return (
    <>
      {data ? (
        <DetailWrapper>
          <DetailImgWrapper>
            <DetailImg src={data.Images[0]?.url} />
          </DetailImgWrapper>
          <DetailDescriptionWrapper>
            <ProductDetailTitle style={{ margin: "0" }}>
              {data.Name}
            </ProductDetailTitle>
            <SubTitle style={{ margin: "0" }}>${data.Price}</SubTitle>
            <DetailButtonWrapper>
              <PrimaryButton
                onClick={() => {
                  buyProduct();
                }}
              >
                {loading ? <Spinner /> : "Comprar"}
              </PrimaryButton>
              {orderError ? "ups algo salio mal" : null}
            </DetailButtonWrapper>
            <BodyText>{data.Description}</BodyText>
          </DetailDescriptionWrapper>
        </DetailWrapper>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};
