import React from 'react'
import Login from './MyComponent/Login'
import Signup from './MyComponent/Signup'
import Dashboard from './MyComponent/Dashboard'
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import { Redirect } from 'react-router';
import {Curdoperation} from './MyComponent/Curdoperation'
import View from './MyComponent/View'
import Edit from './MyComponent/Edit' 
import Reduxoperation from './MyComponent/Reduxoperation'
import Asynchronous from './MyComponent/Asynchronous';
import Add from './MyComponent/Add'
import Privateroute, { PrivateRoute } from './MyComponent/Privateroute'
import recharts from './MyComponent/recharts'
import Contextapi from './MyComponent/Contextapi';
export const App = () => {
  let emailrole=localStorage.getItem("emailid")
  let passrole=localStorage.getItem("password")
  console.log(emailrole)
  return (
    <>
   <BrowserRouter>
   <Switch>
     {/*<Route exact path="/" component={Signup}/>*/}
     <Route exact path="/Login" component={Login}/>
     <Privateroute exact path="/Dashboard" component={Dashboard}/>
     <Privateroute exact path="/Curd" component={Curdoperation}/>
     <Privateroute exact path="/view/:id" component={View}/>
     <Privateroute exact path="/edit/:id" component={Edit}/>
     <Privateroute exact path="/Redux" component={Reduxoperation}/>
     <Privateroute exact path="/Asynchronous" component={Asynchronous}/>
     <Privateroute exact path="/Add" component={Add}/>
     <PrivateRoute exact path="/ChartJs" component={recharts}/>
     <PrivateRoute exact path="/Contextapi" component={Contextapi}/>
     {emailrole&&passrole?<Privateroute exact path="/" component={Dashboard}/>:<Route exact path="/" component={Signup}/> }
   </Switch>
   </BrowserRouter>
    </>
  )
  }  
export default App;