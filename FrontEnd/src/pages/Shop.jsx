import React from 'react'
import useFetch from '../hooks/useFetch'
import shop from '../css/shop.css'

const Shop = () => {

    let data = useFetch("http://localhost:5050/users")
    console.log(data);
  return (
    
    <div>
        <div className='three-items'>
        {
        data.map((info)=>{
            return(
                <div className='one-item'>
                    <h2>{info.image}</h2>
                    <p className='donut-name'>{info.name}</p>
                    <p className='price'>${info.price}</p>
                    <button className='add-button'>Add</button>
                </div>
            )
        })
    }
        </div>
    </div>
  )
}

export default Shop