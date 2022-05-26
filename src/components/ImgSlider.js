import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ImgSlider.css'

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

  return (
    <Slider {...settings} className="carousel">  
      <div className='wrap'>
        <img src='/images/slider-badging.jpg' alt=''></img>
      </div>
      <div className='wrap'>
        <img src='/images/slider-badag.jpg' alt=''></img>
      </div>
      <div className='wrap'>
        <img src='/images/slider-scales.jpg' alt=''></img>
      </div>
      <div className='wrap'>
        <img src='/images/slider-scale.jpg' alt=''></img>
      </div>
    </Slider>
  )
}

export default ImgSlider