import { Layout } from "components/layout";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PrimaryButton } from "ui/buttons";
import { BodyText, LargeText, Title } from "ui/text";
import { ButtonContainer, Root, TextContainer } from "./styled";

const PaymentFailure: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pago fallido - compralo</title>
      </Head>
      <Layout form={false} sticky={false}>
        <Root>
          <Title>El pago falló</Title>
          <TextContainer>
            <LargeText>No pudimos recibir el pago.</LargeText>
            <LargeText>Por favor vuelve a intentarlo.</LargeText>
            <ButtonContainer>
              <Link href="/">
                <PrimaryButton>Ir al inicio</PrimaryButton>
              </Link>
            </ButtonContainer>
          </TextContainer>
        </Root>
      </Layout>
    </>
  );
};

export default PaymentFailure;
