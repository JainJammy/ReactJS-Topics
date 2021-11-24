import React from 'react'
import { mycontext } from './Contextapi';
export const Data = (props) => {
    return (
        <>
        <mycontext.Consumer>
          {(myname)=>{
            return(
             <>
             <h1>{myname.myname}</h1>
             <h1>{myname.ID}</h1>
             <h1>{props.name}</h1>
             </>   
            )             
          }}  
        </mycontext.Consumer>                 
        </>
    )
}
export default Data;