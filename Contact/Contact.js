import React from 'react';
import { Formik, Form } from 'formik';
import TextField  from './TextField';
import * as Yup from 'yup';
import "./Contact.css";


const Contact = () => {
  const validate = Yup.object({
    id: Yup.string(),
      // .required(),
    addressLine: Yup.string(),
    city: Yup.string(),
      // .required(),
    country: Yup.string(),
      // .required(),
    mobileNo: Yup.number(),
      // .required('Required*'),   
    state: Yup.string(),
      // .required('Required*'), 
    zipCode: Yup.number(),
      // .required('Required*'), 
  })
  return (
    <Formik
      initialValues={{
        id: '',
        addressLine: '',
        city: '',
        country: '',
        mobileNo: '',
        state: '',
        zipCode: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div id='form1'>
           
           
          <Form class="box1"> 
         
            <h1>Enter your personal details</h1>
            <TextField class='ff' label="CustomerId" id='form' name="id" type="integer" placeholder="Enter Id" data-testid="CustomerId" required/>
            <TextField class='ff' label="AddressLine" id='form' name="addressLine" type="address" placeholder="Enter Address" data-testid="Address" required/>
            <TextField class='ff' label="City" id='form' name="city" type="text" placeholder="Enter City" data-testid="City" required/>
            <TextField class='ff' label="Country" id='form' name="country" type="text" placeholder="Enter Country" data-testid="Country" required/>
            <TextField class='ff' label="Mobile-No" id='form' name="mobileNo" type="integer" placeholder="Enter MobileNo" required/>
            <TextField class='ff' label="State" id='form' name="state" type="text" placeholder="Enter State" required/>
            <TextField class='ff' label="ZipCode" id='form' name="zipCode" type="integer" placeholder="Enter Zipcode" required/>
            <button className="btn" id='button' type="submit" data-testid="Update">Update</button>
            
          </Form>
        </div>
        
      )}
    </Formik>
  )
}
export default Contact;