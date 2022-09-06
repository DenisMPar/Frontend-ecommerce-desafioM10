import { Layout } from "components/layout";
import type { NextPage } from "next";
import Link from "next/link";
import { PrimaryButton } from "ui/buttons";
import { BodyText, LargeText, Title } from "ui/text";

const PaymentFailure: NextPage = () => {
  return (
    <Layout form={false} sticky={false}>
      <div
        style={{
          padding: "0 16px 40px 16px",
        }}
      >
        <Title>El pago falló</Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "100%",
            minHeight: "30vh",
          }}
        >
          <LargeText>No pudimos recibir el pago.</LargeText>
          <LargeText>Por favor vuelve a intentarlo.</LargeText>
          <Link href="/">
            <PrimaryButton>Ir al inicio</PrimaryButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentFailure;
