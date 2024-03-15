"use client"
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageHandler({ img, imageB, imageC, imageD, imageE}) {
    const [currentNuminList, setCurrentNuminList] = useState(0);

    const imgObj = [
    {
      id: 0,
      image: img,
    },
    {
      id: 1,
      image: imageB,
    },
    {
      id: 2,
      image: imageC,
    },
    {
      id: 3,
      image: imageD,
    },
    {
      id: 4,
      image: imageE,
    },
  ];
  const newList = [];
  imgObj.forEach((item) => newList.push(item.image));
  const [currentImage, setCurrentImage] = useState(newList[0]);

  function handleChangeImage(id) {
    setCurrentNuminList(id);
    setCurrentImage(newList[id]);
  }
  function handleLeftImage() {
    if (currentNuminList !== 0) {
      const newNum = currentNuminList - 1;
      setCurrentImage(newList[newNum]);
      setCurrentNuminList(newNum);
    }
  }
  function handleRightImage() {
    if (currentNuminList !== newList.length - 1) {
      const newNum = currentNuminList + 1;
      setCurrentImage(newList[newNum]);
      setCurrentNuminList(newNum);
    }
  }
  return (
    <section className='md:px-[50px] mt-10'>
        <div className='w-full h-[400px] md:h-[700px]'>
          <Image
            src={`${currentImage ? currentImage : imgObj[0].image}`}
            alt='line img'
            width={1000}
            height={1000}
            className='w-full h-[400px] md:h-[700px] object-cover'
          />
        </div>
        <div className='flex justify-between mt-10'>
          <button
            className='w-[47px] h-[48px] md:h-[160px] bg-secondary flex items-center justify-center'
            onClick={handleLeftImage}
          >
            <AiOutlineLeft className='text-white text-2xl md:text-3xl' />
          </button>
          {imgObj.map((item) => (
            <div
              key={item.id}
              onClick={() => handleChangeImage(item.id)}
              className='cursor-pointer'
            >
              <Image
                src={item.image}
                width={1000}
                height={1000}
                alt='line img'
                className='w-[57px] h-[48px] md:w-[220px] md:h-[160px] object-cover'
              />
            </div>
          ))}
          <button
            className='w-[47px] h-[48px] md:h-[160px] bg-secondary flex items-center justify-center'
            onClick={handleRightImage}
          >
            <AiOutlineRight className='text-white text-2xl md:text-3xl' />
          </button>
        </div>
      </section>
  )
}
