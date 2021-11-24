import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Formik,Form,Field} from 'formik'
export const Edit = () => {
const {id}=useParams();  
{/*const[data,setdata]=useState([{
    name:"",
    email:""
}])*/}
const[data,setdata]=useState("")
//const[name,setname]=useState("")
//const[email,setemail]=useState("")
async function handleSubmit(value)
{
  if(value)
  {
    const information={
      name:value.name,
      email:value.email
    }
  try
  {
    axios.put(`http://localhost:3311/students/${id}`,information)
  }
  catch(error)
  {
    console.log(error)
  }
}
}

{/*const onTextChange=(e)=>{
  setdata({
  ...data,
  [e.target.name]:e.target.value  
  })
  console.log(data)
}*/}

useEffect(()=>{  
getStudent()
},[id])
async function getStudent(){
    try{
      const student=await axios.get(`http://localhost:3311/students/${id}`) 
      setdata(student.data)
    }
    catch(error)
    {
        console.log(error)
    }
}
//const {id}=useParams();   
    return (
      <>
      <Formik
      enableReinitialize={true}
      initialValues={{
        name:data.name,
        email:data.email
      }}
      onSubmit={(values)=>handleSubmit(values)}>
      {({values,error})=>(
        <Form>         
       <label>Name</label>
       <div>
       <Field type="text" name="name" value={values.name}/>  
       {console.log(values.name)}  
      </div> 
      <label>Email</label>
      <div>
        <Field type="email" name="email" value={values.email}/>
        {console.log(values.email)}
      </div>
      <div>
        <input type="submit" value="Edit"/>
      </div>      
      </Form>
      )}
      </Formik>
     
      </>
    )
}
export default Edit;