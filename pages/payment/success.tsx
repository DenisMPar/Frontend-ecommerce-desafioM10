import { Layout } from "components/layout";
import type { NextPage } from "next";
import Head from "next/head";

import Link from "next/link";
import { PrimaryButton } from "ui/buttons";
import { BodyText, LargeText, Title } from "ui/text";
import { ButtonContainer, Root, TextContainer } from "./styled";

const PaymentSuccess: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pago éxitoso</title>
      </Head>
      <Layout form={false} sticky={false}>
        <Root>
          <Title>El pago ha sido exitoso!</Title>
          <TextContainer>
            <LargeText>
              En breve nos comunicaremos por mail para coordinar el envio.
            </LargeText>
            <LargeText>Muchas gracias por tu compra.</LargeText>
            <ButtonContainer>
              <Link href="/">
                <PrimaryButton>Seguir comprando</PrimaryButton>
              </Link>
            </ButtonContainer>
          </TextContainer>
        </Root>
      </Layout>
    </>
  );
};

export default PaymentSuccess;
