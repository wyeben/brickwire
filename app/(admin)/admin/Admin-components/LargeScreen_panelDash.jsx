'use client';
import Transactions_modal from './Transactions-modal';
import './components.css';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';
import Nav_admin from './Nav-admin';
import { useState } from 'react';
import Property_listing_form from './Property_listing_form';
import Link from 'next/link';

export default function LargeScreen_panelDash() {
  const [listProperty, setListProperty] = useState(false);
  function HandleListProperty() {
    setListProperty(!listProperty);
  }
  return (
    <section
      className={`col-span-5 max-h-[100vh] hidden md:grid ${
        listProperty
          ? "grid-rows-[(10vh_1fr)]"
          : "grid-rows-[(10vh_110px_35px_1fr)]"
      } `}
    >
      <Nav_admin />

      {listProperty ? (
        <Property_listing_form />
      ) : (
        <div className="w-full h-full overflow-y-scroll" id="transactions">
          {/* All Units, All Slots */}
          <div className="w-full grid grid-cols-3 gap-x-5 p-5">
            <div className="p-5 bg-[#F9F9F9] h-[110px] rounded-md">
              <p>All Units</p>
              <h1 className="mt-6 text-3xl font-medium">20</h1>
            </div>
            <div className="p-5 bg-[#F9F9F9] h-[110px] rounded-md">
              <p>All Units</p>
              <h1 className="mt-6 text-3xl font-medium">20</h1>
            </div>
            <div className="p-5 bg-[#F9F9F9] h-[110px] rounded-md">
              <p>All Units</p>
              <h1 className="mt-6 text-3xl font-medium">20</h1>
            </div>
          </div>
          {/* Recent Activities */}
          <div className="w-full px-5 mt-5 flex justify-between items-center">
            <div>
              <h1>Recent Activities</h1>
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
                onClick={HandleListProperty}
              >
                <IoAdd className="text-white mr-3 font- text-3xl" />
                <Link href={"/admin/list-property"} className="text-base">
                  Add New Property
                </Link>
              </div>
            </div>
          </div>
          {/* Transactions */}
          <div className="w-full pt-10 px-5 h-full overflow-hidden">
            <div className="w-full grid grid-cols-10 px-5 bg-[#D0D4DA] h-[44px] font-medium text-lg">
              <div className="col-span-1 flex items-center justify-center">
                <h2>Date</h2>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <h2>Name</h2>
              </div>
              <div className="col-span-3 flex items-center justify-center">
                <h2>Property</h2>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <h2>Type</h2>
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <h2>Price</h2>
              </div>
              <div className="col-span-1 flex items-center justify-center">
                <h2>Status</h2>
              </div>
            </div>
            <div
              className="w-full h-full overflow-y-scroll pb-20"
              id="transactions"
            >
              <Transactions_modal />
              <Transactions_modal />
              <Transactions_modal />
              <Transactions_modal />
              <Transactions_modal />
              <Transactions_modal />
              <Transactions_modal />
              <Transactions_modal />
              <Transactions_modal />
              <Transactions_modal />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
