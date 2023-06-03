import React from 'react'


const Shopnow = () => {
  return (
    <div>
        <div className='shop-now-layout'>
            <div className='shop-now-right'> 
                <div className='shop-now-1'>
                    <div>
                        <img src='https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80' className='shop-img'/>
                    </div>
                    <p>Men's Clothes</p>
                    <button className='shop-btn center'>Shop Now!</button>
                </div>
                <div className='shop-now-2'>
                    <img src='https://images.unsplash.com/photo-1640364596762-e5b1d0966a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=908&q=80' className='shop-img'/>
                    <p>Women's Clothes</p>
                    <button className='shop-btn center'>Shop Now!</button>
                </div>

            </div>
            <div>
                <div className='shop-now-left'>
                    <div className='shop-now-3'>
                        <img src='https://images.unsplash.com/photo-1505377059067-e285a7bac49b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80' className='shop-img'/>
                        <p>Children's clothes</p>
                        <button className='shop-btn center'>Shop Now!</button>
                    </div >
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shopnow