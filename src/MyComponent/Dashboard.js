import React from 'react'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core'
const useStyle=makeStyles((theme)=>({
Curd:{
backgroundColor:"green"
},
Redux:{
    backgroundColor:"green"
   
},
Asynchronous:{
    backgroundColor:"green"
},
ChartJs:{
    backgroundColor:"green"
 
},
Contextapi:{
    backgroundColor:"green"

}
}))
export const Dashboard = () => {
const classes=useStyle()    
const history=useHistory()    
const Curd=()=>{
    history.push('/Curd')
}
const Redux=()=>{
    history.push('/Redux')
}    
const Asynchronous=()=>{
     history.push('/Asynchronous')    
}
const ChartJs=()=>{
    history.push('/ChartJs')
}
const Contextapi=()=>{
    history.push('/ContextApi')
}
    return (
        <>
         <button className={classes.Curd}  onClick={Curd}>Perform Curd Operation</button>
         <button className={classes.Redux} onClick={Redux}>Perform Redux Operation</button>
        <button className={classes.Asynchronous} onClick={Asynchronous}>Perform Asynchronous Event</button>        
        <button className={classes.ChartJs} onClick={ChartJs}>Perform ChartJs </button>
        <button className={classes.Contextapi}onClick={Contextapi}>Perform Context API operation</button> 
        </>
    )
}
export default Dashboard;