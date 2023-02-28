import React from 'react';
import { SliderData } from './Sliderdata';
import { useState } from 'react';
import ImageSlidercss from '../css/ImageSlider.css';
import{FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider=({slides})=> {
    const{current,setcurr}=useState(0)
    const length=slides.length
    return (
   
      <div className='slider'>
        <FaArrowAltCircleLeft className="left-arrow" />
        <FaArrowAltCircleRight className="Right-arrow" />
      {SliderData.map((slide,index)=>{
return(
    <img src={slide.image} alt="Mens Collection"/>
     )


      })}
      </div>
  
  )
}

export default ImageSlider
