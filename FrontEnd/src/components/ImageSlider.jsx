import React, { useState } from 'react';
import { SliderData } from './SliderData';
import ImageSlidercss from '../css/ImageSlider.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
   
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className='slider-layout'>
    <section className='slider'>
    <div className='arrange'>
      <div className='indexed'>
        <FaArrowAltCircleLeft  onClick={prevSlide} className='arrow'/>
      </div>
      <div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
      </div>
      <div className='indexed'>
        <FaArrowAltCircleRight  onClick={nextSlide} className='arrow'/>
      </div>
    </div>
    </section>
    </div>
  );
};

export default ImageSlider;