import { createSlice} from "@reduxjs/toolkit";

import authService from "../services/authService";

//const user = JSON.parse(localStorage.getItem("user"));



export const register = (payload) => {
  console.log("inside register")
  return async () => {
    try{
      const response = await authService.registerApi(payload);
      console.log("inside register response")
      console.log(response);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
       
  export const login = (payload) => {
    return async (dispatch) => {
      try{
        const response = await authService.loginApi(payload);
          dispatch(setUser(response.data));
          return response.data;
      } catch(error) {
        return error;
      }
    }
  };

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token")
};



const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isLoggedIn:false,
    },
    reducers: {
      setUser : (state,action) => {
        state.user = action.payload;
        state.isLoggedIn=true;
      }
    }
})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
