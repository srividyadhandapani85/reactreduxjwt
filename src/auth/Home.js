import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <div className="main"><br />
        <div>
          <Link to={'/register'}>       
            <button>Register</button><br /><br />
          </Link>
        </div>
        <div>
          <Link to={'/login'}>       
              <button>Login</button><br /><br />
          </Link>
        </div>
    </div>
  )
}

export default Home