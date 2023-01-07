import axios from 'axios';

const API_URL = "http://localhost:3000/api/";

console.log("in authservice")

const register = (email, password) => {
    return axios.post(API_URL + "register",{
        email,
        password,
    })
}

const login = (email, password) => {
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
            localStorage.setItem("user",JSON.stringify(response.data.data.user.email))
            localStorage.setItem("token",JSON.stringify(response.data.data.token))
        }
        return response.data;
    })
}

const logout = () => {
    localStorage.removeItem("user")
}

const authService = {
    register,
    login,
    logout,
};

export default authService;