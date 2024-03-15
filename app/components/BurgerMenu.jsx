import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import cancel_icon from '../../public/Nav-assets/cancel-icon.png';
import ToggleNav from './toggle-nav';
import Right_icon from '../../public/Home-assets/right-icon.png';
import { BsSearch } from 'react-icons/bs';
import { useSession } from 'next-auth/react';
import Profile_img from '../../public/Profile-assets/blank-profile-pic.webp';

export default function BurgerMenu({ userName, handleClickedBurgerMenu }) {
  const { data: session } = useSession();

  return (
    <nav>
      <div className='w-full h-[100vh] absolute bg-white z-[101] px-5 overflow-hidden'>
        <ul className='w-full flex justify-between items-center h-[10vh]'>
          <li className='mr-5'>
            <div onClick={handleClickedBurgerMenu}>
              <Link href={'/'}>
                <h1 className='text-xl md:text-2xl font-bold text-secondary'>
                  BrickWire Properties
                </h1>
              </Link>
            </div>
          </li>
          <li onClick={handleClickedBurgerMenu}>
            <Image
              src={cancel_icon}
              alt='brickwire logo'
              height={500}
              width={500}
              className='w-[30px] h-[30px]'
            />
          </li>
        </ul>
        <LayoutGroup>
          <motion.ul className='flex flex-col text-base mt-10 font-medium'>
            {/* <div className='flex border border-gray-400 overflow-hidden w-full'>
              <input
                type='text'
                placeholder='Search for properties'
                className='w-full h-[40px] pl-5 focus:outline-none'
              />
              <button className='px-5 hover:bg-secondary hover:text-white hover:font-bold'>
                <BsSearch className='hover:font-bold text-gray-600' />
              </button>
            </div> */}
            <motion.div layout className='mt-5'>
              <Link href={'/'}>
                <motion.div onClick={handleClickedBurgerMenu}>
                  <motion.li className='mb-3'>Home</motion.li>
                </motion.div>
              </Link>
            </motion.div>

            <ToggleNav question='Properties'>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
              >
                <Link
                  href={'/property/lekki'}
                  onClick={handleClickedBurgerMenu}
                >
                  <motion.div className='flex w-[50%] items-center border-b border-black justify-between p-4'>
                    <motion.p className='text-sm mr-5'>Lekki</motion.p>
                    <Image
                      src={Right_icon}
                      width={50}
                      height={50}
                      alt='down icon'
                      className='w-[21px]'
                    />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 1 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
              >
                <Link
                  href={'/property/ologolo'}
                  onClick={handleClickedBurgerMenu}
                >
                  <motion.div className='flex w-[50%] items-center border-b border-black justify-between p-4'>
                    <motion.p className='text-sm mr-5'>Ologolo</motion.p>
                    <Image
                      src={Right_icon}
                      width={50}
                      height={50}
                      alt='down icon'
                      className='w-[21px]'
                    />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div>
                <Link href='/property/Ikoyi' onClick={handleClickedBurgerMenu}>
                  <motion.div className='flex w-[50%] items-center border-b border-black justify-between p-4'>
                    <motion.p className='text-sm mr-5'>Ikoyi</motion.p>
                    <Image
                      src={Right_icon}
                      width={50}
                      height={50}
                      alt='down icon'
                      className='w-[21px]'
                    />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div>
                <Link href='/property/Ikate' onClick={handleClickedBurgerMenu}>
                  <motion.div className='flex w-[50%] items-center border-b border-black justify-between p-4'>
                    <motion.p className='text-sm mr-5'>Ikate</motion.p>
                    <Image
                      src={Right_icon}
                      width={50}
                      height={50}
                      alt='down icon'
                      className='w-[21px]'
                    />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div>
                <Link href='/property/Ikeja' onClick={handleClickedBurgerMenu}>
                  <motion.div className='flex w-[50%] items-center border-b border-black justify-between p-4'>
                    <motion.p className='text-sm mr-5'>Ikeja</motion.p>
                    <Image
                      src={Right_icon}
                      width={50}
                      height={50}
                      alt='down icon'
                      className='w-[21px]'
                    />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div>
                <Link
                  href='/property/Victoria-Island'
                  onClick={handleClickedBurgerMenu}
                >
                  <motion.div className='flex w-[50%] items-center border-b border-black justify-between p-4'>
                    <motion.p className='text-sm mr-5'>
                      Victoria Island
                    </motion.p>
                    <Image
                      src={Right_icon}
                      width={50}
                      height={50}
                      alt='down icon'
                      className='w-[21px]'
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </ToggleNav>
            <motion.div layout>
              <Link href={'/faq'}>
                <motion.div onClick={handleClickedBurgerMenu}>
                  <motion.li className='mb-3'>FAQ</motion.li>
                </motion.div>
              </Link>
            </motion.div>
          </motion.ul>
          {userName ? (
            <motion.div
              layout
              onClick={handleClickedBurgerMenu}
              className='mt-5'
            >
              <Link href={'/profile'}>
                <motion.div className='flex'>
                  <Image
                    src={session?.user.image ?? Profile_img}
                    alt='Profile image'
                    width={40}
                    height={40}
                    className='w-[40px] mr-3 rounded-full'
                  />
                  <motion.div>
                    <motion.p className='font-bold text-sm'>
                      {session?.user.name.split(' ')[0]}
                    </motion.p>
                    <motion.p className='text-sm'>
                      {session?.user.email}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ) : (
            <motion.div layout className='mt-10 px-5'>
              <motion.div layout className='flex flex-col'>
                <Link href={'/login'}>
                  <motion.button className='w-full h-[50px] border border-secondary text-secondary text-base'>
                    Sign in
                  </motion.button>
                </Link>
                <Link href={'/register'}>
                  <motion.button className='w-full h-[50px] text-primary bg-secondary text-base mt-5'>
                    Create Account
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </LayoutGroup>
      </div>
    </nav>
  );
}
