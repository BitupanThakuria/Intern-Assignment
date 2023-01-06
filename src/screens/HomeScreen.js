import React from "react";
import data from "../data.json";
import { Row, Col } from "react-bootstrap";
import Cards from "../components/cards";

const HomeScreen = () => {
  return (
    <>
      <Row>
        {data.map((person) => (
          <Col sm={12} md={6} lg={6} xl={3}>
            <Cards person={person} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
