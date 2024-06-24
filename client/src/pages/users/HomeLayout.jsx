import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Container } from "../../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default HomeLayout;
