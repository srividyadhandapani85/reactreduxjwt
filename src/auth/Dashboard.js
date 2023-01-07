import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {

    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
  return (
    <div>You have successfully logged in {user} {token}</div>
  )
}

export default Dashboard