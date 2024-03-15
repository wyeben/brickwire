// "use client"
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';
import Properties_model from './Properties-model';
import './components.css';
import Link from 'next/link';

import Nav_admin from './Nav-admin';
import { fetchProperty } from '@/lib/property.action';
export default function LargeScreen_propertyListPanel({property}) {
  
  return (
    <section className="col-span-5 max-h-[100vh] hidden md:grid">
      <Nav_admin />

      <>
        {/* Property List */}
        <div className="w-full px-5 pt-5 pb-10 flex justify-between items-center">
          <div>
            <h1 className="font-medium">Property List</h1>
          </div>
          <div className="flex">
            <div className="flex border border-gray-400 overflow-hidden w-[227px] h-[35px] mr-5 pl-3">
              <label
                htmlFor="search"
                className="flex items-center justify-center "
              >
                <BsSearch className="text-gray-600" />
              </label>
              <input
                type="text"
                placeholder="Search"
                id="search"
                className="h-full w-full outline-none focus:outline-none px-3"
              />
            </div>
            <div className="w-[118px] h-[35px] bg-[#D0D4DA] flex items-center justify-between px-3 mr-5">
              <p>Monthly</p>
              <BsChevronDown />
            </div>
            <div
              className="h-[35px] text-white bg-secondary flex items-center px-3 cursor-pointer"
              // onClick={HandleListProperty}
            >
              <IoAdd className="text-white mr-3 font- text-3xl" />
              <Link href={"/admin/list-property"} className="text-base">
                Add New Property
              </Link>
            </div>
          </div>
        </div>
        {/* Properties */}
        <div
          className="px-5 grid grid-cols-2 gap-5 h-full overflow-hidden overflow-y-scroll pb-20"
          id="transactions"
        >
          {property?.map((prop) => {
            return <Properties_model props={prop} />;
          })}
        </div>
      </>
    </section>
  );
}

