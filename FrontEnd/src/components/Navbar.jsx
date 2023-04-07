import {React, useState} from 'react'
import {Link } from 'react-router-dom'
import nav from '../css/navbar.css'
import {GiEgyptianBird} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {MdOutlineFormatListBulleted} from 'react-icons/md'

const Navbar = () => {
  const [log, setLog] = useState(true);
  const handleClick = ()=>{
    setLog(!log)
  }
  return (
    <div className='main'>
      <div className='nav-head'>
        <div >
          <div >
            

          </div>
        </div>
        <div className='name font'>
            Blackbirds
            <GiEgyptianBird className='img'/>
        </div>
        <div>
        
           {
            log && 
            <div onClick={()=>{setLog(false)}} className='login-container-2'>
              <Link to={`/login`}>
                <button className='home-login'>LOGIN</button>
              </Link>
            </div>
           }
          
        
          <HiShoppingCart className='cart'/>
        </div>
        </div>
        <div className='list-container'>
            <ul className='list'>
              <Link to={`/`} className="link">
                <li className='home list-item' onClick={()=>{setLog(true)}}>Home</li>
              </Link>
                <li className='list-item'>About</li>
                <Link to={'/shop'} className='link'>
                <li className='list-item'>Shop</li>
                </Link>
            <Link to={`/Contactus`} className="link">
                <li className='list-item' onClick={()=>{setLog(true)}}>Contact Us</li>
            </Link>
            </ul>
            {
              log && 
              <div onClick={()=>{setLog(false)}} className='login-container'>
                <Link to={`/login`}>
                  <button className='home-login'>LOGIN</button>
                </Link>
              </div>
            }
          
            
        </div>
    </div>
  )
}

export default Navbar