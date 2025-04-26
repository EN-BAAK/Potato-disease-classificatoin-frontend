import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PotatoFarm from "../assets/potato-farm.jpg";
import InputBox from "../components/InputBox";
import { PredictedPotatoStatus } from "../misc/types";

const Home = (): React.JSX.Element => {
  const [potato, setPotato] = useState<PredictedPotatoStatus | null>(null);

  return (
    <div
      id="home"
      className="h-screen py-2 position-relative"
      style={{ backgroundImage: `url(${PotatoFarm})` }}
    >
      <Container className="h-100 flex-center position-relative">
        {potato ? <div>HI</div> : <InputBox setPotato={setPotato} />}
      </Container>
    </div>
  );
};

export default Home;
