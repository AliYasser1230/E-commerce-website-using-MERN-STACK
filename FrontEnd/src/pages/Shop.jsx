import {React, useEffect, useState} from 'react'
import useFetch from '../hooks/useFetch'
import shop from '../css/shop.css'
import { useRecoilSnapshot, useRecoilState } from "recoil";
import { cartState } from '../recoil/atom/cartState';
import { total } from '../recoil/atom/cartState';

const Shop = () => {

    let data = useFetch("http://localhost:5050/retrieve");
    const [cart, setCart] = useRecoilState(cartState);
    const [info, setInfo] = useState([]);
    const [tot, setTot] = useRecoilState(total);
    useEffect(() => {
        setInfo(cart);
        console.log(cart)
      }, [cart]);
    

      const handleAdd = (id) => {
        const itemIndex = info.findIndex((pro) => pro._id === id);
        console.log(itemIndex)
        if (itemIndex === -1) {
          const newItem = data.find((info) => info._id === id);
          const itemToAdd = { ...newItem, quantity: 1 };
          setCart((oldCart) => [...oldCart, itemToAdd]);
        } else {
          setCart((oldCart) => {
            return oldCart.map((item) => {
              return item._id === id ? { ...item, quantity: item.quantity + 1 } : item;
            });
          });
        }
      };
      const handleAdd2 = (id)=>{
        data.map((info)=>{
            if(info._id == id){
                setTot(prev=> prev + info.price);
            }
        })
      };

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
                        <img className='img2' onClick={()=>{console.log(cart)}} src={`data:image/png;base64,${base64String}`} height="150" width="200"/>
                    </div>
                    <p className='donut-name'>{info.name}</p>
                    <p className='price'>${info.price}</p>
                    <button className='add-button' onClick={()=>{handleAdd(info._id); handleAdd2(info._id)}}>Add</button>
                </div>
            )
        })
    }
        </div>
    </div>
  )
}

export default Shop