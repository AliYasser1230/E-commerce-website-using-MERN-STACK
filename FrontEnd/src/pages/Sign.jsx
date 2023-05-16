import {React, useState} from 'react'
import {Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil'
import Logincss from '../css/Login.css';
import axios from "axios";
import {admin} from '../recoil/atom/cartState'
import {loggedin} from "../recoil/atom/cartState"

const Sign = () => {
  const [panel, setPanel] = useRecoilState(admin);
  const[logged, setLogged] = useRecoilState(loggedin);

  const [form, setForm] = useState(false);
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const[name, setName] = useState('');
  const[msg, setMsg] = useState('');
  const history=useNavigate();
  const submit = async(e)=>{
  e.preventDefault();
   try {
    await axios.post("http://localhost:5050/register",{ email:email, password:password, name:name})
    .then(res=>{
      if(res.email="exist"){
        setLogged(false);
        history("/",{state:{id:name}})

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
 
  const checklogin = async (e)=>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/checkusers",{ email:email, password:password, name:name})
      .then(res=>{
        if(res.data == "no")
        {
          setMsg("User doesn't exist");
        }
        else{
          if(res.data.password != password)
          {
            setMsg("Incorrect Password");
          }
          else
          {
            if(res.data.admin === "true")
            {
              setPanel(1);
            }
            setLogged(false);
            history("/",{state:{id:email}})
          }
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
    <img className='imgg' src="https://media1.tenor.com/images/346e7d242bd6f40ec7f28bd2516a9a8c/tenor.gif?itemid=15515026"/>
    <div className='Main-Form' >
     
       <h2>Login</h2>
       <form action='GET'  >
       <div className='form-item-container'>
          <input className='inputss ' type="text" placeholder='Email'onChange={(e)=>{setemail(e.target.value)}} />
        </div>
        <div className='form-item-container'>
          <input className='inputss' type="password" placeholder='Password'onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
       <div className='form-item-container'>
        <p className='msg'>{msg}</p>
        <button  className='button-signin' onClick={checklogin}> Login</button>
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
          <input className='inputss' type="text" placeholder='Email'onChange={(e)=>{setemail(e.target.value)}}  />
        </div>
        <div  className='form-item-container'>
          <input className='inputss' type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div  className='form-item-container'>
          <input className='inputss' type="password" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}/>
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