import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../redux/reducers/todoReducers";

export const store = configureStore({
    reducer: todoReducer
})