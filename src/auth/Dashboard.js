import React from 'react';
import { logout} from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Dashboard = () => {

  const dispatch = useDispatch();

    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");


    const logoutHandle = () => {
      dispatch(logout())
    }
  return (

    
    <div>
      <h1>Dashboard</h1>
     {user &&  <p> You have successfully logged in {user} {token}</p>}
     {!user && <p> You have successfully logged out {user} {token}</p>}
      <div className="footer">
        <button onClick={() => logoutHandle()}>Logout</button>
      </div>

      <Link to={'/employees'}>       
              <button>Employee List</button><br /><br />
        </Link>
    </div>
  )
}

export default Dashboard