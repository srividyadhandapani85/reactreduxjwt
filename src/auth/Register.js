import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../redux/authSlice';
import './index.css';

function Register() {

    const [successful, setSuccessful] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const registerHandle = () => {
        console.log("before register dispatch");
        const payload ={
            email,password
        }
        setSuccessful(false);

        dispatch(register(payload))
        
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
        <div className="registerform">
            <h1>Register</h1>
            <div className="formbody">
                <div className="name">
                    <label className="formlabel">Name</label>
                    <input className="forminput" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="email">
                    <label className="formlabel">Email</label>
                    <input className="forminput" type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password">
                    <label className="formlabel">Password</label>
                    <input className="forminput" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="footer">
                    <button onClick={() => registerHandle()}>Register</button>
                </div>
            </div>

           
        </div>  
    </div>
  )
}

export default Register