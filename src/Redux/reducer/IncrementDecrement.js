import { Decrement, Increment } from "../action";
const initialState=20;
export const changevalue=(state=initialState,action)=>{
       switch(action.type){
           case Increment:return state+1
           case Decrement:return state-1
           default:return state
       }
}
export default changevalue