'use client';
import Image from 'next/image';
import background_img from '../../public/Howitworks-assets/background-img.png';
import Buy_Residential from '../components/Buy-Residential';
import { useState } from 'react';
import HomePage_Slider from '../components/HomePage-Slider';
import Buy_Commercial from './Buy-commercial';

export default function HowItWorks() {
  const [toggleHowItWorks, setToggleHowItWorks] = useState(false);

  return (
    <main className='pt-[10vh]'>
      <div className='w-full md:h-[400px] relative'>
        <Image
          src={background_img}
          alt='room image'
          className='w-full h-full'
        />
        <div className='absolute top-[50%] right-[50%] translate-x-[50%] w-full flex justify-center'>
          <h3 className='font-bold text-xl md:text-4xl text-black'>
            Building Wealth Step by step
            <p className='text-sm md:text-lg text-black text-center font-normal md:mt-3'>
              How our investment plan works
            </p>
          </h3>
        </div>
      </div>
      <div className='w-full my-20'>
        <div className='w-full md:w-[900px] mx-auto flex justify-between px-5'>
          <div
            onClick={() => setToggleHowItWorks(false)}
            className='cursor-pointer'
          >
            <h3 className='font-bold text-lg md:text-2xl'>
              {'Buy (Residential)'}
            </h3>
            {!toggleHowItWorks && (
              <hr className='border-secondary w-[100px] mt-1' />
            )}
          </div>
          <div
            onClick={() => setToggleHowItWorks(true)}
            className='cursor-pointer'
          >
            <h3 className='font-bold text-lg md:text-2xl'>
              {'Buy (Commercial)'}
            </h3>
            {toggleHowItWorks && (
              <hr className='border-secondary w-[100px] mt-1' />
            )}
          </div>
        </div>
      </div>
      {toggleHowItWorks ? (
        <Buy_Commercial toggleHowItWorks={toggleHowItWorks} />
      ) : (
        <Buy_Residential toggleHowItWorks={toggleHowItWorks} />
      )}
      <HomePage_Slider />
    </main>
  );
}
