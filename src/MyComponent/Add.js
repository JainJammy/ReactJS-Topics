import React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios'
export const Add = () => {
const[data,setdata]=useState({
    name:"",
    email:""
})    
const onTextchange=(e)=>{
   console.log("data changed") 
   setdata({
     ...data,
     [e.target.name]:e.target.value
   })
   console.log(data)
}    
async function handleSubmit(e)
{
  e.preventDefault();
     try
     {
     await axios.post("http://localhost:3311/students",data).then(()=>{
        console.log("Succesful")
        
     }).catch((error)=>{
       console.log(error)
     })
     }
     catch(error)
     {
        console.log(error)
     }
}

    return (
        <>
        <form onSubmit={handleSubmit}>
         <label>Name</label> 
         <div>
          <input type="text" name="name" placeholder="Enter User name" onChange={(e)=>{onTextchange(e)}}/>   
        </div>  
        <label>Email</label>
        <div>
        <input type="email" name="email" placeholder="Enter Email" onChange={(e)=>{onTextchange(e)}} autoComplete="off"/>
        </div>
        <div>
          <input type="Submit" value="Submit"/>
        </div>
        </form>            
        </>
    )
}
export default Add;