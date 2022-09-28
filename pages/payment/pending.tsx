import { Layout } from "components/layout";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PrimaryButton } from "ui/buttons";
import { BodyText, LargeText, Title } from "ui/text";
import { ButtonContainer, Root, TextContainer } from "./styled";

const PaymentPending: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pago pendiente</title>
      </Head>
      <Layout form={false} sticky={false}>
        <Root style={{}}>
          <Title>El pago esta pendiente</Title>
          <TextContainer>
            <LargeText>
              En cuanto recibamos la confirmacion de pago, nos comunicaremos por
              mail para coordinar el envío.
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

export default PaymentPending;
