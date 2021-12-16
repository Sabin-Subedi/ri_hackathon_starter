import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'
import  UserReducer  from "./reducers/userSlice";

const reducer = {
    user: UserReducer
}

const store = configureStore({ reducer });


export default store;