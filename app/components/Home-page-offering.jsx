'use client';
import Image from 'next/image';
import Home_image from '../../public/Home-assets/home-bg-img.png';
import image2 from '../../public/Home-assets/palm-house.png';
import image4 from '../../public/Home-assets/house-3.png';
import image5 from '../../public/Home-assets/house-4.png';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home_Offering() {
  const [images, setImages] = useState([Home_image, image2, image4, image5]);
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  return (
    <section className='w-full pt-[10vh] relative'>
      <div className='w-full h-[400px] md:h-[696px] overflow-hidden relative'>
        <Image
          src={images[0]}
          alt='background image'
          width={1500}
          height={1500}
          className='w-full h-[400px] md:h-[696px] object-cover absolute left-0 top-0'
        />
        <div className='h-full absolute top-0 left-0 w-full z-30'>
          <Slider {...settings}>
            <Image
              src={images[0]}
              alt='background image'
              width={1500}
              height={1500}
              className='w-full h-[400px] md:h-[696px] object-cover'
            />
            <Image
              src={images[1]}
              alt='background image'
              width={1500}
              height={1500}
              className='w-full h-[400px] md:h-[696px] object-cover'
            />
            <Image
              src={images[2]}
              alt='background image'
              width={1500}
              height={1500}
              className='w-full h-[400px] md:h-[696px] object-cover'
            />
            <Image
              src={images[3]}
              alt='background image'
              width={1500}
              height={1500}
              className='w-full h-[400px] md:h-[696px] object-cover'
            />
          </Slider>
        </div>
        <div className='w-full h-full absolute top-0 left-0 bg-black opacity-[0.2] z-50'></div>
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          className='md:block absolute bottom-10 left-5 md:bottom-20 md:left-10 pb-10 md:pb-0 z-50'
        >
          <motion.h1
            variants={child}
            className='text-xl md:text-5xl font-bold text-white'
          >
            Own a slot in one of our
          </motion.h1>
          <motion.h1
            variants={child}
            className='text-xl md:text-5xl  font-bold text-white md:mt-3'
          >
            properties for as low as 320k
          </motion.h1>
          <motion.div
            variants={child}
            className='bg-secondary p-2  md:p-5 md:mt-10 text-white inline-block mt-3'
          >
            <motion.p className='text-xs md:text-xl'>
              Earn up to 16% Annual ROI
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <div className='absolute bottom-0 translate-y-[70%] md:translate-y-[50%] h-[110px] left-0 w-full px-5 md:px-0 z-[99]'>
        <div className='w-full md:w-[900px] h-[55px] md:h-[110px] flex justify-around items-center px-5 md:px-[50px] shadow-md mx-auto bg-primary rounded-xl font-bold text-sm md:text-2xl'>
          <div className='flex items-center justify-center'>
            <p className=''>20 Flats</p>
          </div>
          <div className='flex items-center'>
            <p className=''>4000 Slots</p>
          </div>
        </div>
      </div>
    </section>
  );
}
