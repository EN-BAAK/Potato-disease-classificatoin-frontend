import React from "react";
import { Container } from "react-bootstrap";

const Header = (): React.ReactNode => {
  return (
    <header id="header" className="bg-primary flex-center shadow-sm">
      <Container className="fs-5 text-white">Potato Disease Classification:</Container>
    </header>
  );
};

export default Header;
