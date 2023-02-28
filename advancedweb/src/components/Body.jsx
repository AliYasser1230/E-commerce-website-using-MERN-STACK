import React from 'react'
import {Link} from 'react-router-dom'

import bodycss from '../css/body.css'


const Body = () => {
  return (    
    <div className='body-main'>
      <img src="/images/model.png" alt="" className='body-image'/>
      <Link to={`/login`}>
        <button >Login</button>
      </Link>
    </div>
  )
}

export default Body