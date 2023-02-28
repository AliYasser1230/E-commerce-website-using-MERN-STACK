import React from 'react'
import {Link } from 'react-router-dom'
import nav from '../css/navbar.css'
import {GiEgyptianBird} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {MdOutlineFormatListBulleted} from 'react-icons/md'
const Navbar = () => {
  return (
    <div className='main'>
      <div className='nav-head'>
        <div >
          <div >
            

          </div>
        </div>
        <Link to={'/'} className="link">
        <div className='name font'>
            Blackbirds
            <GiEgyptianBird className='img'/>
        </div>
        </Link>
        <div>
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
        </div>
    </div>
  )
}

export default Navbar