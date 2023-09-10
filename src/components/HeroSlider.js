import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay} from 'swiper';
import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title: 'Your Luxury Hotel for Vacation',
    bg: Img1,
    btnText: 'See Our Rooms',
  },
  {
    title: 'Your Luxury Hotel for Vacation',
    bg: Img2,
    btnText: 'See our Rooms',
  },
  {
    title: 'Your Luxury Hotel for Vacation',
    bg: Img3,
    btnText: 'See our Rooms',
  },
]

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} 
    loop={true}
    autoplay={{delay: 3000, disableOnInteraction: false}}
    className= 'heroSlider h-[600px] lg:h-[860px]'> 
    
      {slides.map((slide, index) => {

        const {title, bg, btnText} = slide;
        
        return (
          <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>

            <div className='z-20 text-white text-center'>

              <div className='uppercase tracking-[6px] font-tertiary mb-5'>Just Enjoy and relax</div>

              <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] 
              leading-tight mb-6 lg:text-[68px]'>{title}</h1>

              <button className='btn btn-primary btn-lg mx-auto'>{btnText}</button>

            </div >
            <div className='absolute top-0 w-full h-full'>

              <img className='object-cover h-full w-full' src={bg} alt="" />
              
             </div>

             <div className='absolute top-0 w-full h-full bg-black/60'></div>

          </SwiperSlide>
        );

        })}
    
    </Swiper>
  );
};

export default HeroSlider;
