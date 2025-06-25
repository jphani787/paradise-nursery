import {combineReducers} from "redux";
import {CartReducer} from "./CartSlice";

const reducers = combineReducers({
    allItems: CartReducer
});

export default reducers;