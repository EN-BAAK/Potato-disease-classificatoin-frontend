import React from "react";
import { Container } from "react-bootstrap";
import PotatoFarm from "../assets/potato-farm.jpg";
import InputBox from "../components/InputBox";

const Home = (): React.JSX.Element => {
  return (
    <div
      id="home"
      className="h-screen py-2 position-relative"
      style={{ backgroundImage: `url(${PotatoFarm})` }}
    >
      <Container className="h-100 flex-center position-relative">
        <InputBox />
      </Container>
    </div>
  );
};

export default Home;
