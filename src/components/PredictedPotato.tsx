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
            <strong>Status:</strong>
            <span className="px-1"> {potato.class}</span>
          </Col>
          <Col xs="auto" className="mb-2">
            <strong>Confidence:</strong>
            <span className="px-1">
              {Math.floor(potato.confidence * 100).toString()}%
            </span>
          </Col>
        </Row>
        <Button
          variant="outline-danger"
          onClick={resetPotato}
          className="w-100"
        >
          Clear
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PredictedPotato;
