import React from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import Dashboard from '../MyComponent/Dashboard'
export const Login = () => {
const history=useHistory()    
const phone_no_regex=(/([A-Za-z]+)$/)
const validate=Yup.object({
    Username:Yup.string().required("Please Enter First name"),
    Password:Yup.string().required("Please Enter Password")
})
const handleSubmit=(values)=>{
        if(values) 
        {
            localStorage.setItem("emailid",values.Username)
            localStorage.setItem("password",values.Password)
            history.push('/Dashboard')
        }

}        
    return (
        <Formik
         initialValues={{
          Username:"",
          Password:""
         }}
         validationSchema={validate}
         onSubmit={(values=>handleSubmit(values))}>
         <Form>       
         <label>Username</label>
         <div>
         <Field name="Username" type="text" placeholder="Enter Username"/>
         </div>
          <label>Password</label>
          <div> 
          <Field name="Password" type="password"/> 
          </div> 
          <input type="submit" value="Login"/>
          </Form>
         </Formik>
    )
}
export default Login;