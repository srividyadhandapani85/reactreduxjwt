import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name:"emp",
    initialState:{
        employees:[],
    },
    reducers:{
        setEmployees:(state,action) => {
            return { ...state, employees : {...action.payload}}
        },
    }
})

export const {setEmployees} = employeeSlice.actions;
export default employeeSlice.reducer;




