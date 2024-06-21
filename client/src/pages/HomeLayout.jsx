import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Container } from "../components/index";

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
