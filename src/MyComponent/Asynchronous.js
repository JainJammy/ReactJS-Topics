import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
export const Asynchronous = () => {
const[data,setdata]=useState([])    
useEffect(()=>{
    getinformation()
})
function Asynchronouscallback(){
    try
    {        
      return new Promise((resolve,reject)=>{
       const error=true
       if(!error)
       {
           console.log("Hello I am resolved")
           resolve()
           
       }          
       else
       {
           console.log("Hello I am rejected")
           reject()
       }
    }) 
    }
    catch(error){
     console.log(error)
    }  
}

async function getinformation(){
    console.log("I am called")
    try
    {
    console.log("I am called")
     const responses=await axios.get("https://jsonplaceholder.typicode.com/posts").then(()=>{
         console.log("Hello tryed")
           Asynchronouscallback().then(()=>{
               console.log("Hello World")
           }).catch((error)=>{
               console.log(error)
           })         
             /*data.map((name)=>{
                <h1>{name.id}</h1> 
             }).catch((error)=>{
               console.log(error,"Hello World")            
             })*/        

     }).catch((error)=>{
         console.log(error)
     })
     //console.log(response.data)
     setdata(responses.data)
     console.log(data)
    }
    catch(error)
    {
        console.log(error,"Error")
    }
}
    return (
        <>
        <h1>Hello</h1>

        {/*{Asynchronouscallback().then(()=>{
           console.log("Hello World")

           }).catch((error)=>{
           console.log("You ar bad")       
        })}*/}
        </>
    )
}
export default Asynchronous