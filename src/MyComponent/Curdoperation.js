import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
export const Curdoperation = () => {
const[data,setdata]=useState([])
useEffect(()=>{
   getAllStudent()
},[])
const handleDelete=async id=>{
  await axios.delete(`http://localhost:3311/students/${id}`) 
  var newStudent=data.filter((item)=>{
    return item.id!==id
  }) 
  setdata(newStudent)
}
async function getAllStudent(){
  try{
     const student=await axios.get("http://localhost:3311/students")
     setdata(student.data)
  }
  catch(error)
  {
    console.log(error)
  }
}

    return (
        <>
          {data.map((mydata)=>{
            return(
             <> 
             <h1 key={mydata.id}>{mydata.id}</h1>
            <h1 key={mydata.id}>{mydata.name}</h1>
            <h1 key={mydata.id}>{mydata.email}</h1>
            <Link to={`/view/${mydata.id}`}> View</Link>
           <Link to={`/edit/${mydata.id}`}>Edit</Link> 
           <Link to={'/add'}>Add</Link>
  
         <button onClick={()=>handleDelete(mydata.id)}>Delete</button>           
            </>
            )
          })}
          {console.log(data.name)}
        </>
    )
}
export default Curdoperation;