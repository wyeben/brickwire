'use client';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function Admin_Nav() {
  return (
    <section className='hidden md:flex flex-col bg-[#FDF1F1] px-5 h-[100vh] relative'>
      <Link href={'/'}>
        <div className='text-lg font-bold text-secondary h-[10vh] flex justify-center items-center'>
          <h1>BrickWire Properties</h1>
        </div>
      </Link>
      <ul className='w-full '>
        <Link href='/admin'>
          <li
            className={`w-full flex items-center cursor-pointer border border-secondary p-2`}
          >
            <MdOutlineSpaceDashboard className='mr-5 text-2xl' />
            <p>Dashboard</p>
          </li>
        </Link>
        <Link href='/admin/property'>
          <li
            className={`w-full flex items-center cursor-pointer mt-5 p-2 border border-secondary`}
          >
            <AiOutlineUsergroupDelete className='mr-5 text-2xl' />
            <p>Property</p>
          </li>
        </Link>

        <li className='absolute bottom-0 w-full flex items-center cursor-pointer my-5 p-2'>
          <IoLogOutOutline className='mr-5 text-2xl' />
          <p>Logout</p>
        </li>
      </ul>
    </section>
  );
}
