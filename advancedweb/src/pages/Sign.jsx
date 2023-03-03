import {React, useState} from 'react'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Logincss from '../css/Login.css';
import Login from '../components/Login';
import Signup from '../components/Signup';
const Sign = () => {
  const [form, setForm] = useState(false);
  const handleClick = ()=>{
    setForm(!form)
  }
  return (
    
    <div>
    {
      !form && 
      <div>
        <div className='Body-Form' >
    <img className='imgg' src="https://media.istockphoto.com/id/529351735/photo/turkish-ramadan-sweet-sekerpare-with-wooden-background.jpg?s=612x612&w=0&k=20&c=FbTUX5fChTl7M7aKQI4WTwJ5e-VUqPghIuWIIu3SE3I=" alt="" />
    <div className='Main-Form' >
     <form >
       <h2>Login</h2>
       <div className='form-item-container'>
          <input className='inputss ' type="text" placeholder='User Name' />
        </div>
        <div className='form-item-container'>
          <input className='inputss' type="text" placeholder='Password'/>
        </div>
       <div className='form-item-container'>
        <button className='button-signin'>Login</button>
        </div>
      </form>
      <div className="change-form-container">
      <p className='change-form'>Don't have an account? <button className='change-form-button' onClick={handleClick}>Sign up!</button></p>
      </div>
      </div>     
    </div>
    </div>

    }
    {
      form && 
      <div>
        <div className='Body-Form' >
    <img className='imgg' src="https://media.istockphoto.com/id/529351735/photo/turkish-ramadan-sweet-sekerpare-with-wooden-background.jpg?s=612x612&w=0&k=20&c=FbTUX5fChTl7M7aKQI4WTwJ5e-VUqPghIuWIIu3SE3I=" alt="" />
      <div className='Main-Form'>
     <form  >
       <h2>Sign up!</h2>
       <div className='form-item-container'>
          <input className='inputss' type="text" placeholder='User Name' />
        </div>
        <div  className='form-item-container'>
          <input className='inputss' type="text" placeholder='Password'/>
        </div>
        <div className='form-item-container'>
        <button className='button-signin'>Create Account!</button>
        </div>
      </form>
      <div className='change-form-container'>
      <p className='change-form'>Already have an account? <button  className='change-form-button' onClick={handleClick}>Sign in!</button></p>
      </div>
      </div>
    </div>
      </div>
    }

    </div>

  )
}

export default Sign