import React from 'react'
import useFetch from '../hooks/useFetch'

const Shop = () => {

    let data = useFetch("http://localhost:5050/users")
    console.log(data);
  return (
    
    <div>
        <div>
        {
        data.map((info)=>{
            return(
                <div>
                <h2 >{info.name}</h2>
                <h2>{info.age}</h2>
                </div>
            )
        })
    }
        </div>
    </div>
  )
}

export default Shop