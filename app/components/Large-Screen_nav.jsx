'use client';
import Image from 'next/image';
import Down_icon from '../../public/Home-assets/down-icon.png';
import burger_menu from '../../public/Nav-assets/burger-menu.png';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import Properties_model from './Properties-model';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Profile_img from '../../public/Profile-assets/blank-profile-pic.webp';

export default function Large_Screen_nav({
  userName,
  handleClickedBurgerMenu,
  userEmail,
}) {
  const [clickedProperties, setClickedProperties] = useState(false);
  const [clickedBurgerMenu, setClickedBurgerMenu] = useState(false);

  useEffect(() => {
    if (clickedBurgerMenu) {
      document.body.style.cssText = `overflowY: hidden; position:fixed;`;
    }
    if (!clickedBurgerMenu) {
      document.body.style.cssText = `overflowY: visible ; position:relative; `;
    }
  }, [clickedBurgerMenu]);

  function handleClickedProperties() {
    setClickedProperties(!clickedProperties);
  }

  const { data: session } = useSession();

  return (
    <nav>
      <div className='px-5 h-[10vh] w-full md:px-[50px] bg-primary fixed top-0 left-0 z-[100] shadow-md'>
        <div className='flex w-full justify-between h-full items-center'>
          <ul className='flex text-sm items-center'>
            <Link href={'/'}>
              <li className='mr-5 text-secondary'>
                <h1 className='text-xl md:text-2xl font-bold'>
                  BrickWire Properties
                </h1>
              </li>
            </Link>
            <div className='hidden lg:flex'>
              <li
                className='flex mr-5 items-center cursor-pointer'
                onClick={handleClickedProperties}
              >
                <p className=''>Properties</p>
                <Image
                  src={Down_icon}
                  width={50}
                  height={50}
                  alt='down icon'
                  className='w-[21px]'
                />
              </li>
              <Link href={'/faq'}>
                <li className='mr-5'>FAQ</li>
              </Link>
            </div>
          </ul>
          {/* <div className='hidden md:flex border border-gray-400  overflow-hidden mr-5 hover:border-secondary'>
            <input
              type='text'
              placeholder='Search for properties'
              className='min-w-[200px] w-[400px] h-[40px] pl-5 focus:outline-none text-gray-600'
            />
            <button className='px-5 hover:bg-secondary text-gray-600 hover:text-white hover:font-bold'>
              <BsSearch className='hover:font-bold ' />
            </button>
          </div> */}
          <div className='flex'>
            {userName ? (
              <div className='hidden lg:flex'>
                <Link href={'/profile'}>
                  <div className='flex'>
                    <Image
                      src={session?.user.image ?? Profile_img}
                      alt='Profile image'
                      width={40}
                      height={40}
                      className='w-[40px] mr-3 rounded-full'
                    />
                    <div>
                      <p className='font-bold text-sm'>{userName}</p>
                      <p className='text-sm'>{userEmail}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div>
                <div className='hidden lg:flex'>
                  <Link href={'/login'}>
                    <button className='mr-10 w-[130px] h-[50px] border border-secondary text-secondary text-sm'>
                      Sign in
                    </button>
                  </Link>
                  <Link href={'/register'}>
                    <button className='w-[130px] h-[50px] text-primary bg-secondary text-sm'>
                      Create Account
                    </button>
                  </Link>
                </div>
              </div>
            )}
            <div className='lg:hidden' onClick={handleClickedBurgerMenu}>
              <Image
                src={burger_menu}
                width={100}
                height={100}
                className='h-[25px] w-[25px]'
              />
            </div>
          </div>
        </div>
        {/* Properties model */}
        {clickedProperties && (
          <Properties_model handleClickedProperties={handleClickedProperties} />
        )}
      </div>
    </nav>
  );
}
