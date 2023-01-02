import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import NavItem from "./NavItem/NavItem";
import MiddleSideText from "./MiddleSideText/MiddleSideText";
const MiddleText = () => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="8">
            <NavItem />

            <div></div>
          </Col>
          <Col>
            <MiddleSideText />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MiddleText;
