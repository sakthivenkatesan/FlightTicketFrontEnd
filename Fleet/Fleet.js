import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import "./Fleet.css";
import { Link } from "react-router-dom"


const ui = (
  <div id="form1">
    <Form class="box1">
    <h1>Fleet</h1>
      <TextField class="ff" label="Fleet ID" name="Fleet ID" type="text" required />
      <TextField class="ff" label="Fleet Code" name="Fleet Code" type="text"  required  />
      <TextField class="ff" label="Economy Seats" name="Economy Seats" type="text"  required />
      <TextField class="ff" label="Premium Seats" name="Premium Seats" type="text"  required />
      <TextField class="ff" label="Business Seats" name="Business Seats" type="text"  required />
      <button type="submit"><Link id = "su1" to= "/payment">Make Payment</Link></button>
    </Form>
  </div>
);

function RegisterUser(values) {
  const userDetails = values;
  console.log(userDetails);
}

const fleet= () => {
  const validate = Yup.object({
    fleetid: Yup.string(),
    fleetcode: Yup.string(),
    economyseats: Yup.string().email(),
    premiumseats: Yup.number(),
    businessseats: Yup.string()
      .min(6, " password should be min 6 characters")
      ,
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password should match")
      ,
  });
  return (
    <Formik
      initialValues={{
        fleetid: "",
        fleetcode: "",
        economyseats: "",
        premiumseats: "",
        businessseats: "",
        
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

export default fleet;