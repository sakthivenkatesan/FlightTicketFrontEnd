import React from 'react';
import { Formik, Form } from 'formik';
import TextField  from './TextField';
import * as Yup from 'yup';
import "./Passenger.css";
import { Link } from "react-router-dom"


const ui = (
  <div id="form1">
    <Form class="box1">
    <h1>Enter your Passenger Details</h1>
      <TextField class="ff" label="Passenger No" name="passengerId" type="number" placeholder="Enter Passenger number"/>
      <TextField class="ff" label="First Name" name="firstName" type="text" placeholder="Enter First Name"/>
      <TextField class="ff" label="Last Name" name="lastName" type="text" placeholder="Enter Last Name"/>
      <TextField class="ff" label="Age" name="age" type="number" placeholder="Enter Age"/>
      <TextField class="ff" label="Gender" name="gender" type="text" placeholder="Enter Gender"/>
      <TextField class="ff" label="Passport number" name="passportNo" type="text" placeholder="Enter Passport Number"/>
      <TextField class="ff" label="Meal Preference" name="mealPref" type="text" placeholder="Enter Meal Preference"/>
      <span ><button type="submit">Add Passenger</button></span>
      <button type="submit"><Link id = "su1" to= "/fleet_details">Next</Link></button>
    </Form>
  </div>
);
function RegisterPassenger(values) {
  const passengerDetails = values;
  console.log(passengerDetails);
}
const Passenger = () => {
  const validate = Yup.object({
    passerngerId: Yup.number()
    .required('Required*'), 
    firstName: Yup.string().required('Required*'), 
    lastName: Yup.string().required('Required*'),   
    age: Yup.number().required('Required*'), 
    gender: Yup.string().required('Required*'), 
    passportNo: Yup.string().required('Required*'), 
    mealPref: Yup.string().required('Required*'), 
  });
  return (
    <Formik
      initialValues={{
        passengerId: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        passportNo: "",
        mealPref: "",
      }}
      validationSchema={validate}
      onSubmit={values => {
        RegisterPassenger(values)
      }}
    >
      {(formik) => <div>{ui}</div>}
      </Formik>
    );
  };
export default Passenger;