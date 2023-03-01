import React from 'react'
import Logincss from '../css/Login.css';
const Login = () => {
  return (
    <div className='Form-Box'>
  
   <h3>Sign Up</h3>
   <div className='Info'>
     <input type="text" placeholder='Name' /><br />
     <input type="text" placeholder='Email' /><br />
     <input type="text" placeholder='Password'/><br />
   </div>
    <div className='buttons'>
     <button>Sign Up</button>
     <button>Sign In</button>
    </div>

    


    </div>
  )
}

export default Login