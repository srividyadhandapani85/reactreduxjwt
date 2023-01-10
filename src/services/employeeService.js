import { setEmployees } from '../redux/employeeSlice';
import axios from 'axios';

const axiosInstance = axios.create({    
    baseURL: 'http://localhost:3000/api/employees',
})

axiosInstance.interceptors.request.use((config) => {
    config.headers = { authorization: 'Bearer ' + localStorage.getItem('token') };
    return config;
});

export const GetEmployees = async (dispatch) => {
    try {
        // api call
        console.log("before api call")
        const { data } = await axiosInstance.get();
        console.log(data)
        dispatch(setEmployees(data));
    } catch (err){
        console.log(err)
    }
}