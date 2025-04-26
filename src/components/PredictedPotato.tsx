import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { PredictedPotatoCardProps } from "../misc/types";

const PredictedPotato = ({
  potato,
  resetPotato,
}: PredictedPotatoCardProps): React.ReactNode => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={potato.image} alt="Predicted Potato" />
      <Card.Body>
        <Row className="d-flex flex-wrap justify-content-between">
          <Col xs="auto" className="mb-2">
            <strong>Status:</strong> {potato.class}
          </Col>
          <Col xs="auto" className="mb-2">
            <strong>Confidence:</strong> {potato.confidence.toFixed(2)}%
          </Col>
        </Row>
        <Button
          variant="outline-danger"
          onClick={resetPotato}
          className="w-100"
        >
          Reset
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PredictedPotato;
