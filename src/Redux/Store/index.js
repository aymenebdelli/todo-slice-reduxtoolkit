import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../../Redux/Reducers/todoSlice"

export default configureStore({
    reducer: {
        todos: todoReducer
    },
})