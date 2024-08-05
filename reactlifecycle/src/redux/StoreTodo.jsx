import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";

const storeTodo = configureStore({
    reducer:{
        todo:TodoSlice
    }
})

export default storeTodo ;