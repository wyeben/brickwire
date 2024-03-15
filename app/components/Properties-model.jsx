'use client';
import Link from 'next/link';
import Right_icon from '../../public/Home-assets/right-icon.png';
import Image from 'next/image';

export default function Properties_model({ handleClickedProperties }) {
  return (
    <>
      <div
        className='w-[100vw] h-[100vh] bg-black opacity-50 absolute top-0 left-0'
        onClick={handleClickedProperties}
      ></div>
      <div className='w-[152px] bg-white opacity-100 absolute top-[50px] left-[200px] cursor-pointer'>
        <Link href={'/property/lekki'} onClick={handleClickedProperties}>
          <div className='flex w-full items-center border-b border-black justify-between p-4'>
            <p className='text-sm mr-5'>Lekki</p>
            <Image
              src={Right_icon}
              width={50}
              height={50}
              alt='down icon'
              className='w-[21px]'
            />
          </div>
        </Link>
        <Link href={'/property/ologolo'} onClick={handleClickedProperties}>
          <div className='flex w-full items-center border-b border-black justify-between p-4'>
            <p className='text-sm mr-5'>Ologolo</p>
            <Image
              src={Right_icon}
              width={50}
              height={50}
              alt='down icon'
              className='w-[21px]'
            />
          </div>
        </Link>
        <Link href='/property/Ikate' onClick={handleClickedProperties}>
          {' '}
          <div className='flex w-full items-center border-b border-black justify-between p-4'>
            <p className='text-sm mr-5'>Ikate</p>
            <Image
              src={Right_icon}
              width={50}
              height={50}
              alt='down icon'
              className='w-[21px]'
            />
          </div>
        </Link>
        <Link href='/property/Ikeja' onClick={handleClickedProperties}>
          {' '}
          <div className='flex w-full items-center border-b border-black justify-between p-4'>
            <p className='text-sm mr-5'>Ikeja</p>
            <Image
              src={Right_icon}
              width={50}
              height={50}
              alt='down icon'
              className='w-[21px]'
            />
          </div>
        </Link>
        <Link href='/property/Ikoyi' onClick={handleClickedProperties}>
          {' '}
          <div className='flex w-full items-center border-b border-black justify-between p-4'>
            <p className='text-sm mr-5'>Ikoyi</p>
            <Image
              src={Right_icon}
              width={50}
              height={50}
              alt='down icon'
              className='w-[21px]'
            />
          </div>
        </Link>
        <Link href='/property/Vi' onClick={handleClickedProperties}>
          {' '}
          <div className='flex w-full items-center border-b border-black justify-between p-4'>
            <p className='text-sm mr-5'>Vi</p>
            <Image
              src={Right_icon}
              width={50}
              height={50}
              alt='down icon'
              className='w-[21px]'
            />
          </div>
        </Link>
      </div>
    </>
  );
}
