import React from "react";
import { loginSchema } from "../Registration/schemas";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAuth } from "../../feature/login/loginSlice";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if (
        values.email === "jhondoe@gmail.com" &&
        values.password === "123456"
      ) {
        dispatch(loginAuth());
        navigate(-1);
      } else {
        toast("incorrect email or pass");
      }
      console.log(
        "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );
    },
  });
  return (
    <>
      <ToastContainer position="top-center" />
      <Row>
        <Col xs={8}>
          <img
            src={process.env.PUBLIC_URL + "assets/Ggow_TreeL.png"}
            alt="Grow_tree_large"
            className="growImg"
          />
        </Col>
        <Col xs={4} style={{ marginTop: "14%" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label style={{ fontSize: "13px" }}>
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
              />
              {<p className="form-error">{errors.email}</p>}
              <Form.Label htmlFor="passInput" style={{ fontSize: "13px" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter ypur password"
                name="password"
                value={values.password}
                onChange={handleChange}
                id="passInput"
              />
            </Form.Group>
            <button
              type="submit"
              className="register"
              data-testid="btn-register"
            >
              Login
            </button>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Login;
