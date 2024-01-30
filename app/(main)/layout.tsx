import React from "react";
import { Header } from "@/app/(main)/_components/header";
import { Container } from "@/components/container";
import { Footer } from "@/app/(main)/_components/footer";

const HomeLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Header />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
