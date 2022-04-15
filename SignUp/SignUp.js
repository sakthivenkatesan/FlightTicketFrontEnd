import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../TextField";
import "./SignUp.css";

const ui = (
  <div id="form1">
    <Form class="box1">
    <h1>Signup</h1>
      <TextField class="ff" label="First Name" name="firstName" type="text" />
      <TextField class="ff" label="Last Name" name="lastName" type="text" />
      <TextField class="ff" label="Email" name="email" type="email" />
      <TextField class="ff" label="Age" name="age" type="number" />
      <TextField class="ff" label="Password" name="password" type="password" />
      <TextField class="ff"
        label="Confirm Password Name"
        name="confirmPassword"
        type="password"
      />

      <button type="submit">Register</button>
    </Form>
  </div>
);

function RegisterUser(values) {
  const userDetails = values;
  console.log(userDetails);
}

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    age: Yup.number().required(),
    password: Yup.string()
      .min(6, " password should be min 6 characters")
      .required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password should match")
      .required(),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        RegisterUser(values);
      }}
    >
      {(formik) => <div>{ui}</div>}
    </Formik>
  );
};

export default Signup;