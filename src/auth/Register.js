import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../redux/authSlice';

function Register() {

    const [successful, setSuccessful] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const registerHandle = () => {
        console.log("before register dispatch");

        setSuccessful(false);

        dispatch(register({email,password}))
        .unwrap()
        .then(() => {
            setSuccessful(true)
        })
        .catch(() => {
            setSuccessful(false)
        })
        console.log("after register dispatch");
    }

  return (
    <div>
        <div className="d-flex flex-column align-items-center">
            <h1>Register</h1>
            <label>Name</label>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <label>Email</label>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => registerHandle()}>Register</button>

            {successful && alert("Regiteration success")}
        </div>  
    </div>
  )
}

export default Register