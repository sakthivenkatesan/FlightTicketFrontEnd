import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import "./Flight.css";
import { Link } from "react-router-dom"


export const Flight = () => {
  const validate = Yup.object({
    id: Yup.string()
      .max(15, 'Must be 15 characters or less'),
      /* .required('Required* '), */
    bookingNumber: Yup.string()
      .max(20, 'Must be 20 characters or less'),
      /* .required('Required* '), */
    bookingDate: Yup.date(),
    travelDate: Yup.date().min(Yup.ref('bookingDate'),"Travel date can't be before Bookingdate"),
    totalCost: Yup.string(),
      
  })
  return (
    <Formik
      initialValues={{
        id: '',
        bookingNumber: '',
        bookingDate: '',
        travelDate: '',
        totalCost: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          
          <Form class="text">
          <h1 className="my-4 font-weight-bold .display-4">Flight</h1>
            <TextField class="txt" label="Flight number :" name="bookingNumber" type="long" required/>
            <TextField class="txt" label="Departure Location :" name="dlocation" type="text" />
            <TextField class="txt" label="Arrival Location :" name="dlocation" type="text" />
            <TextField class="txt" label="Departure date :" name="travelDate" type="date" />
            <TextField class="txt" label="Arrival date :" name="travelDate" type="date" />
            <TextField class="txt" label="Travel cost :" name="totalCost" type="double" />
            {/* <button className="btn btn-danger mt-3" type="submit">Cancel Booking</button>
            <button className="btn btn-warning mt-3 ml-3" type="button">Modify Booking</button> */}
            <button type="button"><Link id="ll" to= "/add_passenger">Add Flight details</Link></button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Flight;