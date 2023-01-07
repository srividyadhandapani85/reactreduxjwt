import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div><br />
        <Link to={'/register'}>       
            <button>Register</button><br /><br />
        </Link>
        <Link to={'/login'}>       
            <button>Login</button><br /><br />
        </Link>
    </div>
  )
}

export default Home