import React,{createContext} from 'react'
import { useState } from 'react'
import {Data} from './Data'
const mycontext=createContext()
export const Contextapi = () => {
const[name,setname]=useState([
{
  name:"Shah",
  ID:12
},
{
  name:"Risha",
  ID:13    
}
])
const data={
  myname:name.name,
  myID:name.ID
}   
  return (
    <>
    {name.map((myname)=>{
      return(
        <>
      <h1>{myname.name}</h1>
      <h2>{myname.ID}</h2> 
      </> 
      )     
    })}
    <mycontext.Provider value={data}>
        <Data name={"Rohit"}/>
    </mycontext.Provider>
    </>
  )
}
export default Contextapi;
export {mycontext}