import {React, useState} from 'react'
import useFetch from '../hooks/useFetch'
import shop from '../css/shop.css'
import { useRecoilSnapshot, useRecoilState } from "recoil";
import { cartState } from '../recoil/atom/cartState';

const Shop = () => {

    let data = useFetch("http://localhost:5050/retrieve");
    console.log(data);
    const [input, setInput] = useState({});
    const [cart, setCart] = useRecoilState(cartState);

    const handleAdd = (id)=>{
        data.map((info)=>{
            if(id == info._id){
                setCart((oldCart)=>[
                    
                    {
                        name: info.name,
                        price: info.price,
                        img: info.img.data.data
                    }
                ])
                console.log(cart);
                return;
            }     
        })
        
    }
  return (
    
    <div>
        <div className='three-items'>
        {
        data.map((info)=>{
            const base64String = btoa(
                String.fromCharCode(...new Uint8Array(info.img.data.data))
                )
            return(
                <div className='one-item' key={info._id}>
                    <div>
                        <img src={`data:image/png;base64,${base64String}`} height="100" width="200"/>
                    </div>
                    <p className='donut-name'>{info.name}</p>
                    <p className='price'>${info.price}</p>
                    <button className='add-button' onClick={()=>{handleAdd(info._id)}}>Add</button>
                </div>
            )
        })
    }
        </div>
    </div>
  )
}

export default Shop