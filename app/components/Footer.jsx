import Image from 'next/image';
import Brick_wire_logo from '../../public/Home-assets/brickwire-logo.png';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mt-20 w-full px-5 bg-[#1A1A1A] text-white py-20'>
      <div className='flex justify-center mb-20'>
        <div className='text-secondary'>
          <h1 className='text-xl md:text-2xl font-bold'>
            BrickWire Properties
          </h1>
        </div>
      </div>
      <div className='w-full md:w-[900px] flex flex-col md:flex-row justify-between mx-auto text-base'>
        <ul>
          <li className='mb-2'>Lekki, Lagos Nigeria.</li>
          <li className='mb-2'>Info@brickwireconstruction.com</li>
          <li className='mb-2'>+234 812 921 1545</li>
        </ul>
        <ul>
          <li className='mb-2 font-bold'>Properties</li>
          <Link href={'/property/lekki'}>
            <li className='mb-2'>Lekki</li>
          </Link>
          <Link href={'/property/ologolo'}>
            <li className='mb-2'>Ologolo</li>
          </Link>
          <Link href={'/property/Ikate'}>
            <li className='mb-2'>Ikate</li>
          </Link>
          <Link href={'/property/Ikeja'}>
            <li className='mb-2'>Ikeja</li>
          </Link>
          <Link href={'/property/Ikoyi'}>
            <li className='mb-2'>Ikoyi</li>
          </Link>
          <Link href={'/property/Vi'}>
            <li className='mb-2'>Victoria Island</li>
          </Link>

          <li className='mb-2'></li>
          <li className='mb-2'></li>
          <li className='mb-2'></li>
          <li className='mb-2'></li>
          <li className='mb-2'></li>
        </ul>
        <ul className=''>
          <li className='mb-2 font-bold'>Company</li>
          <li className='mb-2'>About</li>
          <Link href={'/howitworks'}>
            <li className='mb-2'>How it works</li>
          </Link>
          <Link href={'/faq'}>
            <li className='mb-2'>FAQ</li>
          </Link>
          <li className='mb-2'>Terms of service</li>
        </ul>
      </div>
      <div className='w-full md:w-[600px] mx-auto mt-20 pt-5 border-t border-white'>
        <p className='text-center text-base'>
          @2024 Brickwire Properties | All rights Reserved |{' '}
          {/* <span className='inline-block'>
            <Link href='/admin'>
              <p>Admin Signin</p>
            </Link>
          </span> */}
        </p>
      </div>
    </footer>
  );
}
