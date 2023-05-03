import React from 'react'
import ImageSlider from '../components/ImageSlider';
import Body from '../components/Body'
import { SliderData } from '../components/SliderData';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
  const loc=useLocation()
  return (
    <div>
      <h1> HELLO AND WELCOME!! </h1>
        <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default Homepage