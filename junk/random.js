brickwire-backup/app/(userprofile)/profile
/page.jsx
'use client';
import Image from 'next/image';
import Brickwire_logo from '../../../public/Profile-assets/Brickwire-logo.png';
import Profile_img from '../../../public/Profile-assets/profile-img.png';
import bell_icon from '../../../public/Profile-assets/bell-icon.png';
import MypropertiesCard from '../../components/MypropertiesCard';
import PropIntrest from '../../components/Properties-u-might-b-intrestedin';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

export default function UserProfile() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    async function getUserSession() {
      const session = await getSession();
      if (session?.user.name && session?.user.email) {
        setUserName(session.user.name);
        setUserEmail(session.user.email);
      }
    }
    getUserSession();
  }, []);
  return (
    <>
      <nav className='h-[10vh] w-full flex justify-between px-5 md:px-[50px] items-center bg-primary'>
        <Link href={'/'}>
          <Image
            src={Brickwire_logo}
            alt='brickwire logo'
            width={160}
            height={160}
            className='w-[160px]'
          />
        </Link>
        <div className='flex'>
          <Image
            src={Profile_img}
            alt='Profile image'
            width={40}
            height={40}
            className='w-[40px] mr-3'
          />
          <div>
            <p className='font-bold text-sm'>{userName}</p>
            <p className='text-sm'>{userEmail}</p>
          </div>
        </div>
      </nav>
      <main className=''>
        <section className='bg-white md:px-[50px] px-5'>
          <hr className='w-full border' />
          <div className='flex flex-col md:flex-row justify-between items-center py-5 '>
            <div className='mb-5 md:mb-0 w-full'>
              <h1 className='font-medium text-2xl md:text-4xl'>Welcome {userName}!</h1>
              <p className='text-sm'>Track your investment</p>
            </div>
            <div className='bg-[#F5F5F5] p-3'>
              <div className='flex mb-2'>
                <Image
                  src={bell_icon}
                  alt='brickwire logo'
                  width={24}
                  height={24}
                  className='w-[24px] mr-2'
                />
                <p className='text-[#FE0002] font-medium text-base'>
                  Earnings Update
                </p>
              </div>
              <p className='text-sm'>
                In order to access your investment progress & stay informed.
              </p>
              <p className='text-sm'>
                Generate your earnings report{' '}
                <span className='text-secondary'>Here.</span>
              </p>
            </div>
          </div>
        </section>
        <section className='bg-[#F5F5F5] md:px-[50px]'>
          <div className='py-10 flex flex-col md:flex-row gap-y-10 items-center'>
            <div className='bg-[#310C16] mr-10 w-[200px] h-[98px] text-primary flex flex-col items-center justify-center rounded-lg md:rounded-none'>
              <h3 className='font-bold text-3xl mb-2'>0</h3>
              <p className='text-sm'>My Units</p>
            </div>
            <div className='bg-[#E9B208] mr-10 w-[200px] h-[98px] text-primary flex flex-col items-center justify-center rounded-lg md:rounded-'>
              <h3 className='font-bold text-3xl mb-2'>0</h3>
              <p className='text-sm'>My Slots</p>
            </div>
            <div className='bg-[#166534] mr-10 w-[200px] h-[98px] text-primary flex flex-col items-center justify-center rounded-lg md:rounded-'>
              <h3 className='font-bold text-3xl mb-2'>0</h3>
              <p className='text-sm'>My Slot cells</p>
            </div>
          </div>
          <div className='w-full bg-primary'>
            <div className='w-full p-5'>
              <div>
                <h3 className='text-lg font-medium mb-5'>My Properties</h3>
                <div className='mb-5'>
                  <button className='border border-secondary text-secondary w-[78px] h-[38px] mr-10 text-sm'>
                    Unit
                  </button>
                  <button className='border border-[#CAD4E0] text-black w-[78px] h-[38px] text-sm'>
                    Short-let
                  </button>
                </div>
                <MypropertiesCard />
              </div>
            </div>
          </div>
          {/* Properties you might be intrested in */}
          <div className='p-5 bg-white w-full mt-10'>
            <h3 className='my-5 font-medium text-lg'>
              Properties you might be interested in
            </h3>
            {/* Cards */}
            <PropIntrest />
            <PropIntrest />
            <PropIntrest />
          </div>
        </section>
      </main>
      <footer className='h-[120px] bg-[#F5F5F5] px-[50px] flex justify-center md:justify-end text-sm items-center'>
        <ul className='flex'>
          <li className='ml-3'>About</li>
          <li className='ml-3'>Disclaimer</li>
          <li className='ml-3'>Contact us</li>
          <button className='ml-3' onClick={() => signOut()}>
            Signout
          </button>
        </ul>
      </footer>
    </>
  );
}


