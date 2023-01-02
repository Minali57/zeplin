import React from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";
import "./Registration.css";
const RegistrationForm = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(
        "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );
    },
  });

  return (
    <div style={{ margin: "8% 6%" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label style={{ fontSize: "13px" }}>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="fname"
            value={values.fname}
            onChange={handleChange}
            autoComplete="off"
          />
          {
            <p className="form-error" data-testid="error-fname">
              {errors.fname}
            </p>
          }
          <Form.Label style={{ fontSize: "13px" }}>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lname"
            value={values.lname}
            onChange={handleChange}
            autoComplete="off"
          />
          {<p className="form-error">{errors.lname}</p>}
          <Form.Label style={{ fontSize: "13px" }}>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="off"
          />
          {<p className="form-error">{errors.email}</p>}
          <Form.Label style={{ fontSize: "13px" }} htmlFor="phoneInput">
            Phone Number
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            autoComplete="off"
            id="phoneInput"
          />
          {<p className="form-error">{errors.phone}</p>}
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
          {<p className="form-error">{errors.password}</p>}
          <Form.Label style={{ fontSize: "13px" }} htmlFor="cpassInput">
            Confirm Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your name"
            name="confirm"
            value={values.confirm}
            onChange={handleChange}
            autoComplete="off"
            id="cpassInput"
          />
          {<p className="form-error">{errors.confirm}</p>}
        </Form.Group>
        <button type="submit" className="register" data-testid="btn-register">
          Register
        </button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
