import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/authSlice";
import employeeReducer from "./redux/employeeSlice";

const store = configureStore({
    reducer:{
        auth:authReducer,
        emp:employeeReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export default store;