import {useState} from 'react'
import { logout, login } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const loginHandle = () => {
        console.log("before dispatch",email,password);
        dispatch(login({ email, password }))
        .unwrap()
        .then(() => {
          navigate("/dashboard");
       //   window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        })
    }

    const logoutHandle = () => {
        dispatch(logout())
    }

   if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
      }

  return (
    <div>
         <div className="d-flex flex-column align-items-center">
            <h1>Login</h1>
            <label>Email</label>
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => loginHandle()}>Login</button>
            <button onClick={() => logoutHandle()}>Logout</button>
        </div>  
    </div>
  )
}

export default Login