'use client';
import Image from 'next/image';
import Profile_img from '../../../public/Profile-assets/blank-profile-pic.webp';
import bell_icon from '../../../public/Profile-assets/bell-icon.png';
import PropIntrest from '../../components/Properties-u-might-b-intrestedin';
import PropIntrest2 from '../../components/PropInt2';
import PropIntrest3 from '../../components/PropInt3';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getSession, useSession, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function UserProfile() {
  const { data: session } = useSession();
  console.log(session?.user.role);
  const router = useRouter();
  if (!session) {
    router.push('/login');
  }
  return (
    <>
      <nav className='h-[10vh] w-full flex justify-between px-5 md:px-[50px] items-center bg-primary'>
        <Link href={'/'}>
          <h1 className='font-bold text-secondary'>BrickWire Properties</h1>
        </Link>
        <div className='flex'>
          <Image
            src={session?.user.image ?? Profile_img}
            alt='Profile image'
            width={40}
            height={40}
            className='w-[40px] mr-3 rounded-full'
          />
          <div>
            <p className='font-bold text-sm hidden md:block'>
              {session?.user.name.split(' ')[0]}
            </p>
            <p className='text-sm hidden md:block'>{session?.user.email}</p>
          </div>
        </div>
      </nav>
      <main className=''>
        <section className='bg-white md:px-[50px] px-5'>
          <hr className='w-full border' />
          <div className='flex flex-col md:flex-row justify-between items-center py-5 '>
            <div className='mb-5 md:mb-0 w-full'>
              <h1 className='font-medium text-2xl md:text-4xl'>
                Welcome {session?.user.name.split(' ')[0]}!
              </h1>
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
            <div className='bg-[#310C16] md:mr-10 w-[200px] h-[98px] text-primary flex flex-col items-center justify-center rounded-lg md:rounded-none'>
              <h3 className='font-bold text-3xl mb-2'>0</h3>
              <p className='text-sm'>My Units</p>
            </div>
            <div className='bg-[#E9B208] md:mr-10 w-[200px] h-[98px] text-primary flex flex-col items-center justify-center rounded-lg md:rounded-none'>
              <h3 className='font-bold text-3xl mb-2'>0</h3>
              <p className='text-sm'>My Slots</p>
            </div>
            {/* <div className='bg-[#166534] md:mr-10 w-[200px] h-[98px] text-primary flex flex-col items-center justify-center rounded-lg md:rounded-none'>
              <h3 className='font-bold text-3xl mb-2'>0</h3>
              <p className='text-sm'>My Slot cells</p>
            </div> */}
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
                {/* <MypropertiesCard /> */}
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
            <PropIntrest2 />
            <PropIntrest3 />
          </div>
        </section>
      </main>
      <footer className='h-[120px] w-full bg-[#F5F5F5] px-[50px] text-sm flex items-center justify-center md:justify-end'>
        <div>
          <ul className='w-full flex justify-center md:justify-end'>
            <li className='ml-3'>About</li>
            <li className='ml-3'>Disclaimer</li>
            <li className='ml-3'>Contact us</li>
            <button
              className='ml-3'
              onClick={() => {
                signOut();
              }}
            >
              Signout
            </button>
          </ul>
          <Link href='/admin/admin-main-090901028'>
            <li className='text-sm list-none w-full text-center md:text-end mt-2'>
              Admin Signin
            </li>
          </Link>
        </div>
      </footer>
    </>
  );
}
