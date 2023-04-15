import {React, useState} from 'react'
import {Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import Logincss from '../css/Login.css';
import axios from "axios";
const Sign = () => {
  const [form, setForm] = useState(false);
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const history=useNavigate();
  async function submit(e){
    e.preventDefault();
  try {

    await axios.post("http://localhost:5050/register",{email : email, password: password})
    .then(res=>{
      if(res.email="exist"){
     history("/",{state:{id:email}})
      }
      else if(res.email="not exist")
      {
       alert("User is not logged in ")
      }
    })
    
  
   
  }
  catch (error) 
  {
    console.log(error.response.data)
  }

  
  }
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
     
       <h2>Login</h2>
       <form action="POST" >
       <div className='form-item-container'>
          <input className='inputss ' type="text" placeholder='User Name' />
        </div>
        <div className='form-item-container'>
          <input className='inputss' type="text" placeholder='Password'/>
        </div>
       <div className='form-item-container'>
        <button  className='button-signin'> Login </button>
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
      
       <h2>Sign up!</h2>
       <form action='POST' >

       <div className='form-item-container'>
          <input className='inputss' type="text" placeholder='User Name'onChange={(e)=>{setemail(e.target.value)}}  />
        </div>
        <div  className='form-item-container'>
          <input className='inputss' type="text" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
        <div className='form-item-container'>
        <button className='button-signin' onClick={submit}>Create Account!</button>
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