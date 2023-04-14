import React from 'react'
import useFetch from '../hooks/useFetch'
import shop from '../css/shop.css'

const Shop = () => {

    let data = useFetch("http://localhost:5050/retrieve")
    console.log(data);
  return (
    
    <div>
        <div className='three-items'>
        {
        data.map((info)=>{
            const base64String = btoa(
                String.fromCharCode(...new Uint8Array(info.img.data.data))
                )
            return(
                <div className='one-item'>
                    <div>
                        <img src={`data:image/png;base64,${base64String}`} height="100" width="200"/>
                    </div>
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