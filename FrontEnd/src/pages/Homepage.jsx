import React from 'react'
import ImageSlider from '../components/ImageSlider';
import Home from '../components/Body'
import { SliderData } from '../components/SliderData';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
  const loc=useLocation()
  return (
    
    <div>
       <img src='https://img00.deviantart.net/19d1/i/2012/344/2/0/sentinel__s_portrait____by_serdarturkoglu-d5nlif5.jpg' className='home-img'/>
       
        <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default Homepage