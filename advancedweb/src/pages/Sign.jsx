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
      <Login/>
    }
    {
      form && 
      <Signup/>
    }
    <p><button onClick={handleClick}>Sign {form? "in":"up"}</button></p>

    </div>

  )
}

export default Sign