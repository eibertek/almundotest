import hotels from "./hotels";
import { combineReducers, Reducer } from "redux";

export default {
    hotels,
};


export const getReducers = () : Reducer => 
            combineReducers({hotels});
