import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { IoLogOutOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function Left_panel({ toggle_dash_prop, setToggle_dash_prop }) {
  return (
    <section className='hidden md:flex flex-col bg-[#FDF1F1] px-5 h-[100vh] relative'>
      <Link href={'/'}>
        <div className='text-lg font-bold text-secondary h-[10vh] flex justify-center items-center'>
          <h1>BrickWire Properties</h1>
        </div>
      </Link>
      <ul className='w-full '>
        <li
          className={`w-full flex items-center cursor-pointer ${
            !toggle_dash_prop ? 'border border-secondary' : ''
          } p-2`}
          onClick={() => setToggle_dash_prop(false)}
        >
          <MdOutlineSpaceDashboard className='mr-5 text-2xl' />
          <p>Dashboard</p>
        </li>
        <li
          className={`w-full flex items-center cursor-pointer mt-5 p-2 ${
            toggle_dash_prop ? 'border border-secondary' : ''
          }`}
          onClick={() => setToggle_dash_prop(true)}
        >
          <AiOutlineUsergroupDelete className='mr-5 text-2xl' />
          <p>Property</p>
        </li>
        <li className='absolute bottom-0 w-full flex items-center cursor-pointer my-5 p-2'>
          <IoLogOutOutline className='mr-5 text-2xl' />
          <p>Logout</p>
        </li>
      </ul>
    </section>
  );
}
