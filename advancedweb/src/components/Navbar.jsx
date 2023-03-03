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
                  <button >Login</button>
                </Link>
              </div>
            }
            {
              !log && 
              <div onClick={handleClick} className='login-container-2'>
                <Link to={`/`}>
                  <button >Home</button>
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
                <li className='list-item'>Contact Us</li>
            </ul>
            {
              log && 
              <div onClick={handleClick} className='login-container'>
                <Link to={`/login`}>
                  <button >Login</button>
                </Link>
              </div>
            }
            {
              !log && 
              <div onClick={handleClick} className='login-container'>
                <Link to={`/`}>
                  <button >Home</button>
                </Link>
              </div>
            }
            
        </div>
    </div>
  )
}

export default Navbar