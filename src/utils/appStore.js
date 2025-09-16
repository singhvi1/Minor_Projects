import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice"


export const appStore =configureStore({
    reducer:{
        images:imageReducer,
    }
})