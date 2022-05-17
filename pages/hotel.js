import Image from 'next/image';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Artboard from '../public/images/Artboard23.jpg';
import Artboard1 from '../public/images/rplus_SkunAbout.jpg';
import Artboard2 from '../public/images/rplus_Skunbanner.jpg';
import Artboard3 from '../public/images/rplus_SkunHotel.jpg';


function Hotel() {
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
      <>
      <div className={`hotel-home-page`}>
        <div  className={`hero-pattern`}>
          <Header />
        </div>
        <div className={`flex flex-row flex-wrap`}>
            
            <Sidebar />
             
            <div className={`customflex1 customslider`}>
              <div className={`custom_slider`}>       
                <Slider {...settings}>
                  <div className={`relative`}>
                      <Image src={Artboard} alt="artboard"/> 
                      <p className={`absolute left-[20px] top-[23px] flex items-center`}>
                        <Image src="/images/icn-back-white.png" alt="" width="24" height="23" />
                        <a className={`text-white font-Mulish pl-[10px] font-light text-base`}>Back</a>
                      </p>
                      <p className={`absolute right-[20px] top-[23px] flex flex-col`}>
                      <a className={`pb-4 text-center`}><Image src="/images/btn-Share.svg" alt="" width="21" height="24" /></a> 
                      <a className={`text-center`}><Image src="/images/icn-Favorite.svg" alt="" width="28" height="24" /></a> 
                      </p>

                      <p className={`w-[374px] pt-1 pb-5 px-4 absolute bottom-[75px] left-[38.2%] bg-[#FBF7F3] rounded-[16px] custom_block`}>
                        <span className={`flex items-center justify-between`}>
                          <span className={`block`}>
                            <span className={`font-Mulish text-4xl text-[#796E65] font-light`}>r+skun</span>
                            <span className={`block font-Mulish text-base text-[#B1843B] font-light`}>Cambodia</span>  
                          </span>
                          <span>
                            <span className={`block`}>
                              <a href="#" className={`text-[#707070] font-Mulish pr-2 font-semibold`}>
                                More info
                              </a>
                              <Image src="/public/images/nextnew.svg" width="16" height="16" alt="" />
                            </span>
                          </span>
                        </span>
                        <span className={`block text-center rounded-lg bg-[#796E65] mt-2 mb-5`}>
                          <a href="#" className={`text-white font-Mulish font-regular text-xl pt-[9px] pb-[12px] block`}>Book A Stay</a>
                        </span>
                        <span className={`block text-center rounded-lg border-[#796E65] border-[1px]`}>
                          <a href="#" className={`text-[#796E65] font-Mulish font-regular text-xl pt-[9px] pb-[12px] block`}>Buy Unit</a>
                        </span>
                      </p>

                      <p className={`flex absolute left-[20px] bottom-[23px]`}>
                        <span className={`block text-white text-xs font-Mulish font-regular pr-4 border-r-[1px] border-white`}>Copyright © 2021 R+ Pte Ltd. All rights reserved.</span> 
                        <a href='#' className={`text-white text-xs font-Mulish font-regular  px-4 border-r-[1px] border-white`}>Privacy Policy</a>
                        <a href='#' className={`text-white text-xs font-Mulish font-regular pl-4`}>Terms of Use</a>
                      </p>
                     
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
            </div>        
            </div>
      </div>
      </>
    );
  };

export default Hotel;
 