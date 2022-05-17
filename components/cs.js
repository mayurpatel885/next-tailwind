import React from "react";
import Slider from "react-slick";
import Head from 'next/head'
import Image from 'next/image'
import styles1 from '../styles/variables.module.scss'
import styles from '../styles/Home.module.scss'  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Artboard from '../public/images/Artboard23.jpg'
import Artboard1 from '../public/images/rplus_SkunAbout.jpg'
import Artboard2 from '../public/images/rplus_Skunbanner.jpg'
import Artboard3 from '../public/images/rplus_SkunHotel.jpg'
  
  const Responsive = () => {
    const settings = {
      dots: false,
      infinite: false,
      nav:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      
    };
    return (
      <div className={`custom_slider`}>       
        <Slider {...settings}>
        <div>
            <Image src={Artboard} alt="artboard"/> 
        </div>
        <div>
            <Image src={Artboard1} alt="artboard1" /> 
        </div>
        <div>
          <Image src={Artboard2} alt="artboard2" /> 
        </div>
        <div>
          <Image src={Artboard3} alt="artboard3"/> 
        </div>          
        </Slider>
      </div>
    );
  };
  
  
  export default Responsive;