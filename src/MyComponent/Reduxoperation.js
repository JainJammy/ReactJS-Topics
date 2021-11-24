import React from 'react'
import { useState } from 'react'
import { Increment,Decrement } from '../Redux/action'
import changevalue from '../Redux/reducer/IncrementDecrement'
import { useSelector,useDispatch } from 'react-redux'
import '../App.css'
export const Reduxoperation = () => {    
const state=useSelector((state)=>state.changevalue)    
const dispatch=useDispatch()
const[count,setCount]=useState()    
    return (
        <>
        <div className="App">
        <button className="button" aria-label="Increment value" onClick={() => {dispatch(Increment())}}> + </button>
        <span className="value">Count: {state}</span>
        <button className="button" aria-label="Decrement value" onClick={() => { dispatch(Decrement())}}> - </button>
        </div>   
        </>
    )
}
export default Reduxoperation