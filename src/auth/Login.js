import {useState} from 'react'
import { login } from '../redux/authSlice';
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
    const payload ={
      email,password
  }
    const loginHandle = () => {
        console.log("before dispatch",email,password);
        dispatch(login(payload))
        .then(() => {
          navigate("/dashboard");
       //   window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        })
    }


   if (isLoggedIn) {
        return <Navigate to="/dashboard" />;
      }

  return (
    <div>
        <div className="registerform">
            <h1>Login</h1>
            <div className="formbody">
              <div className="email">
                <label>Email</label>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="password">
                <label>Password</label>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="footer">
                <button onClick={() => loginHandle()}>Login</button>
              </div>
            </div>
        </div>  
    </div>
  )
}

export default Login