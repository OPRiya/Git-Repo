import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/uderSlice"

export default configureStore({
    reducer:{
        user:UserReducer,

    }
})
