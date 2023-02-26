import React from 'react'
import navbarcss from '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='main'>
        <div className='name'>
            Advancedweb
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