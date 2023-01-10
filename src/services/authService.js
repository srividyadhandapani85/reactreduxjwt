import axios from 'axios';

const API_URL = "http://localhost:3000/api/";

console.log("in authservice")

const registerApi = (payload) => {
    console.log("inside register api")
    // console.log(email,password)
    const {email,password} = payload
    return axios.post(API_URL + "register",{
        email,
        password,
    })
}

const loginApi = (payload) => {
    const {email,password} = payload
    return axios.post(API_URL + "login",{
        email,
        password,
    })
    .then((response) => {
        console.log(response)
        console.log(response.data)
        console.log(response.data.data)
        console.log(response.data.data.token)
        if(response.data.data.token){
            console.log("setting localstore")
            localStorage.setItem("user",response.data.data.user.email)
            localStorage.setItem("token",response.data.data.token)
        }
        return response.data;
    })
}



const authService = {
    registerApi,
    loginApi,
};

export default authService;