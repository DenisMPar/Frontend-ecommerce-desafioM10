import { Layout } from "components/layout";
import type { NextPage } from "next";
import Link from "next/link";
import { PrimaryButton } from "ui/buttons";
import { BodyText, LargeText, Title } from "ui/text";

const PaymentPending: NextPage = () => {
  return (
    <Layout form={false} sticky={false}>
      <div
        style={{
          padding: "0 16px 40px 16px",
        }}
      >
        <Title>El pago esta pendiente</Title>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "100%",
            minHeight: "20vh",
          }}
        >
          <LargeText>
            En cuanto recibamos la confirmacion de pago, nos comunicaremos por
            mail para coordinar el envío.
          </LargeText>
          <LargeText>Muchas gracias por tu compra.</LargeText>
          <Link href="/">
            <PrimaryButton>Seguir comprando</PrimaryButton>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPending;
