import React from "react";
import { Row, Col } from "react-bootstrap";
import RegistrationForm from "./RegistrationForm";
import "./Registration.css";
const Registration = () => {
  return (
    <>
      <Row>
        <Col xs={8}>
          <img
            src={process.env.PUBLIC_URL + "assets/Ggow_TreeL.png"}
            alt="Grow_tree_large"
            className="growImg"
          />
        </Col>
        <Col xs={4}>
          <RegistrationForm />
        </Col>
      </Row>
    </>
  );
};

export default Registration;
