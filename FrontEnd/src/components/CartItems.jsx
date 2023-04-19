import {React, useEffect, useState} from 'react'
import {useRecoilState} from 'recoil'
import { cartState } from '../recoil/atom/cartState'
import cartitems from "../css/cartitems.css"
import { total } from '../recoil/atom/cartState'

const CartItems = () => {
    const [cartItems, setCartItems] = useRecoilState(cartState);
    const [totalUsed, setTotalUsed] = useRecoilState(total);

    
  return (
    
    <div className='cartpos' >
        
        {
            cartItems.length == 0 ? <div className='noitems'>No items in cart yet</div>  : <div><div><div className='noitems'>You're Shopping Cart Is Ready!</div></div>{cartItems.map((info)=>{
                const base64String = btoa(
                    String.fromCharCode(...new Uint8Array(info.img.data.data))
                    )
                return(
                    <div  key={info._id}>
                    
                    <div className='cartitem'>
                        <div>
                            <img onClick={()=>{console.log(cart)}} src={`data:image/png;base64,${base64String}`} height="40" width="40"/>        
                        </div>
                        <div className='cartitemsinfo'>
                            <p>{info.name}</p>
                            <div>
                                Quantity: {info.quantity}
                            </div>
                        </div>
                        <div>
                            <p>${info.price}</p>
                        </div>
                    </div>
                    </div>
                    
                )
                
            })}
            <p className='total'>You're total is ${totalUsed}!</p>
            <div className='btn-container'>
            <button className='shop-btn'>Proceed to payment</button>
            </div>
            </div>
        }
        
    </div>
  )
}

export default CartItems