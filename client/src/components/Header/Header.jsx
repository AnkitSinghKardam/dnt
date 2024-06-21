import React from "react";
import { Logo, Navbar, Container } from "../index";

const Header = () => {
  return (
    <Container>
      <header className="bg-aliceblue">
        <Logo />
        <Navbar />
      </header>
    </Container>
  );
};

export default Header;
