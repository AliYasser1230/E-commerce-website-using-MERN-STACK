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
              <div onClick={handleClick} className='login-container-2'>
                <Link to={`/login`}>
                  <button className='home-login'>LOGIN</button>
                </Link>
              </div>
            }
            {
              !log && 
              <div onClick={handleClick} className='login-container-2'>
                <Link to={`/`}>
                  <button className='home-login'>HOME</button>
                </Link>
              </div>
            }
          
        
          <HiShoppingCart className='cart'/>
        </div>
        </div>
        <div className='list-container'>
            <ul className='list'>
                <li className='home list-item'>Home</li>
                <li className='list-item'>About</li>
                <li className='list-item'>Shop</li>
            <Link to={`/Contactus`}>
                <li className='list-item' onClick={handleClick}>Contact Us</li>
            </Link>
            </ul>
            {
              log && 
              <div onClick={handleClick} className='login-container'>
                <Link to={`/login`}>
                  <button className='home-login'>LOGIN</button>
                </Link>
              </div>
            }
            {
              !log && 
              <div onClick={handleClick} className='login-container'>
                <Link to={`/`}>
                  <button className='home-login' >HOME</button>
                </Link>
              </div>
            }
            
        </div>
    </div>
  )
}

export default Navbar