import {createStore} from "redux";
import MobileReducer from "./Mobile/MobileReducers";

const store = createStore(MobileReducer)

export default store;