import React from 'react'
import {useState} from 'react'
import axios from "axios";
import panel from '../css/panel.css'

const Panel = () => {

    const [users,setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [oldEmail, setOldEmail] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const [info, setInfo] = useState([])

    const getUsers = async (e)=>{
        e.preventDefault();
        try {
          await axios.get("http://localhost:5050/getallusers")
          .then(res=>{let data = setUsers(res.data)})
        }
        
        catch(error)
        {
            console.log(error)
        }
    }
    const getUser = ()=>{
        users.map((user)=>{
            
            if(user.email == email)
            {
                console.log("in")
                setInfo(
                    {
                        name: user.name,
                        email: user.email,
                        password: user.password
                    }
                )
                console.log(info);
            }
        })
    }
    const changeEmail = async (e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:5050/updatemail",{oldEmail:oldEmail, newEmail:newEmail})
        }
        catch(error)
        {
            console.log(error);
        }
    }
    
  return (
    <div>  
        <div className='form1'>
            <h3>Get User By Email</h3>
            <input type="text" className='form1-data'onChange={e=>setEmail(e.target.value)}/>
            <button onClick={getUser}  className='finduser-button'>Find user</button>
            <button onClick={getUsers} className='getuser-button'>Get Users</button>
        </div>
        {
            
            <div className='output1'>
                <p>{info.email}</p>
                <p>{info.name}</p>
                <p>{info.password}</p>
            </div>
        }
        <div className='form1'>
            <h3>Change user Email</h3>
            <label>Old Email: <input type="text" className='form1-data' onChange={e=>setOldEmail(e.target.value)}/></label>
            <label>New Email: <input type="text" className='form1-data' onChange={e=>setNewEmail(e.target.value)}/></label>
            <button onClick={changeEmail} className='change-button'>Change!</button>
        </div>
       
    </div>
  )
}

export default Panel