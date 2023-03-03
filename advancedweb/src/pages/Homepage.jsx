import React from 'react'
import ImageSlider from '../components/ImageSlider';
import Body from '../components/Body'
import { SliderData } from '../components/Sliderdata';

const Homepage = () => {
  return (
    <div>
        <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default Homepage