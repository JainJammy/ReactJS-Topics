import React from 'react'
import {Formik,Form,Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom'
export const Signup = () => {
const history=useHistory()
const firstnameregex=(/([A-Za-z]+)$/)
const emailregex=(/^([a-z0-9]+)@([a-z0-9]+)\.([a-z]{2,20})$/)
const handleSubmit=(values)=>{  
    if(values)
    {
      history.push('/Login')
    }
}  
const validate=Yup.object({
     Firstname:Yup.string().required("Firstname is required").matches(firstnameregex),
     Lastname:Yup.string().required("Lastname is required").matches(firstnameregex),
     Email:Yup.string().email().required("Email Id is required").matches(emailregex),
     Password:Yup.string().required("password is required")           
})
  return (
    <Formik
    initialValues={{
      Firstname:"",
      Lastname:"",
      Email:"",
      Password:""
    }}
    validationSchema={validate}
    /*onSubmit={values=>{
       console.log(values)
    }}*/
    onSubmit={(values=>handleSubmit(values))}>
    <Form>
      <label>Firstname</label>
      <div>
      <Field name="Firstname" type="text" placeholder="Enter your Firstname"/>
      <ErrorMessage name="Firstname"/>
      </div> 
      <label>Lastname</label>
      <div>
      <Field name="Lastname" type="text" placeholder="Enter your LastName"/>
      <ErrorMessage name="Lastname"/>
      </div>
      <label>Email</label>
      <div>
      <Field name="Email" type="email" placeholder="Enter your Email"/>
      <ErrorMessage name="Email"/>
       </div> 
       <label>Password</label>
       <div>
       <Field name="Password" type="password" placeholder="Enter your Password"/>
       <ErrorMessage name="Password"/>
        </div>
        <div>
        <input type="submit"/>         
        </div>
      </Form>  
    </Formik>
  )
}
export default Signup;