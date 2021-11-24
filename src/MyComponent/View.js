import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
export const View = () => {
const[data,setdata]=useState([]);    
const {id}=useParams()
console.log(id)
useEffect(()=>{
getAlldata()
},[id])
async function getAlldata(){
  try
  { 
    const student=await axios.get(`http://localhost:3311/students/${id}`)
    setdata(student.data) 
  }
  catch(error){
    console.log(error)
  }
}
    return (
        <>
        <h1>data</h1>
        <h1 key={data.id}>{data.id}</h1>
        <h1 key={data.name}>{data.name}</h1>
        </>
    )
}
export default View;