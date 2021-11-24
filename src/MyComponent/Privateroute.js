import React from 'react'
import { Route } from 'react-router'
import Login from './Login'
export const PrivateRoute=(props)=>{
const email=localStorage.getItem("emailid")
const password=localStorage.getItem("password")
if(email && password)
{
    return <Route exact path={props.path} component={props.component}/>
}
else
{
    return <Login{...props}/>
}
}
export default PrivateRoute