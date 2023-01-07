import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../services/authService";

//const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk('register',
async ({email,password}, thunkAPI) =>{
    try {
        const response = await AuthService.register(email, password);
        console.log("response",response.data)
        return response.data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue();
      }
    }
  );
       
  export const login = createAsyncThunk(
    "login",
    async ({ email, password }, thunkAPI) => {
      try {
        console.log("before suthservice call")
        const data = await AuthService.login(email, password);
        console.log("data",data)
        return { user: data };
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue();
      }
    }
  );

export const logout = createAsyncThunk("logout", async () => {
    await AuthService.logout();
});

//const initialState = user
  //  ? { isLoggedIn : true, user}
 //   : { isLoggedIn : false, user: null};


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
    },
    extraReducers:{
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
          
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
})


export default authSlice.reducer;
