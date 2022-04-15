import React from 'react';
import { Formik, Form } from 'formik';
import TextField  from './TextField';
import * as Yup from 'yup';
import "./Location.css";

const Location = () => {
      const validate = Yup.object({
    locationId: Yup.number()
      .max(15,'Id is invalid'),
    locationName: Yup.string(),
    locationCode: Yup.string(),
    country: Yup.string(),
    airportName: Yup.string(),
  })
  return (
    <Formik
      initialValues={{
        locationId: '',
        locationName: '',
        locationCode: '',
        country: '',
        airportName: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
                  <div id='app'>
                    <Form class="box1">
                    <br/> <br/> <br/> 
          <h1 className="my-1 font-weight-bold .display-8">Location details</h1>
          
            <TextField label="LocationId" name="locationId" type="text" placeholder="Enter LocationId"required/>
            <TextField label="LocationName" name="locationName" type="text" placeholder="Enter LocationName"required/>
            <TextField label="LocationCode" name="locationCode" type="text" placeholder="Enter LocationCode"required/>
            <TextField label="Country" name="country" type="text" placeholder="Enter Country"required/>
            <TextField label="AirportName" name="airportName" type="text" placeholder="Enter AirportName"required/>
            <button className="btn" type="submit">Add</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Location;