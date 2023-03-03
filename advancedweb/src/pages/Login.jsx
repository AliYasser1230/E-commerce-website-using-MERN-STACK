import React from 'react'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Logincss from '../css/Login.css';
import Signup from './Signup';
const Login = () => {
  return (
    
   <div className='Body-Form' >
    <img className='imgg' src="https://media.istockphoto.com/id/529351735/photo/turkish-ramadan-sweet-sekerpare-with-wooden-background.jpg?s=612x612&w=0&k=20&c=FbTUX5fChTl7M7aKQI4WTwJ5e-VUqPghIuWIIu3SE3I=" alt="" />
     <form className='Main-Form' >
       <h2>SIGN IN</h2>
       <div>
          <label className='infoo'>User Name</label><br />
          <input className='inputss' type="text" placeholder='User Name' />
        </div>
        <div >
          <label className='infoo'>Password</label><br />
          <input className='inputss' type="text" placeholder='Password'/>
        </div>
       
        <button className='button-signin'>SIGN UP</button>
      </form>
     
     
    </div>
    
  )
}

export default Login