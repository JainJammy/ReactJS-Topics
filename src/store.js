import rootreducer from "./Redux/reducer/storeddata";
import { createStore } from "redux";
export const store=createStore(rootreducer)
export default store;