import React from 'react'
import {useEffect, useState} from 'react'


const useFetch = (link) => {

    const [user, setUser] = useState([]);



  const fetchData = ()=>{
    return fetch(link)
           .then((response)=> response.json())
           .then((data)=> setUser(data))
  }

  useEffect(()=>{
    fetchData();
  }, [])
  return user;
}

export default useFetch