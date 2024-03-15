'use client';
import Image from 'next/image';
import Profile_img from '../../../../public/Profile-assets/profile-img.png';
import './components.css';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';
import Sm_transactions_modal from './sm-Transactions-modals';
import burger_menu from '../../../../public/Nav-assets/burger-menu.png';
import { useEffect, useState } from 'react';
import Burger_menu from './Burger_menu';
import Link from 'next/link';
import SmallScreenNav from './SmallScreenNav';
import Property_listing_form from './Property_listing_form';

export default function SmallScreen_panelDash() {
  const [clickedBurgerMenu, setClickedBurgerMenu] = useState(false);

  useEffect(() => {
    if (clickedBurgerMenu) {
      document.body.style.cssText = `overflowY: hidden; position:fixed;`;
    }
    if (!clickedBurgerMenu) {
      document.body.style.cssText = `overflowY: visible ; position:relative; `;
    }
  }, [clickedBurgerMenu]);

  function handleClickedBurgerMenu() {
    setClickedBurgerMenu(!clickedBurgerMenu);
  }
  const [listProperty, setListProperty] = useState(false);
  function HandleListProperty() {
    setListProperty(!listProperty);
  }

  return (
    <>
      {clickedBurgerMenu && (
        <Burger_menu handleClickedBurgerMenu={handleClickedBurgerMenu} />
      )}
      {listProperty ? (
        <>
          <SmallScreenNav handleClickedBurgerMenu={handleClickedBurgerMenu} />
          <Property_listing_form />
        </>
      ) : (
        <section className="w-full max-h-[100vh] md:hidden ">
          <SmallScreenNav handleClickedBurgerMenu={handleClickedBurgerMenu} />
          {/* Recent Activities */}
          <div className="w-full px-5 mt-5 flex justify-between items-center">
            <div>
              <h1>Dashboard</h1>
            </div>
            <div className="flex">
              <div
                className="h-[35px] text-white bg-secondary flex items-center px-3"
                onClick={HandleListProperty}
              >
                <IoAdd className="text-white mr-3 font- text-3xl" />
                <Link href={"/admin/list-property"} className="text-base">
                  Add New Property
                </Link>
              </div>
            </div>
          </div>
          {/* All Units, All Slots */}
          <div className="w-full grid grid-cols-1 gap-y-5 p-5">
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

          {/* Search */}
          <div className="w-full px-5 mt-5 flex justify-between items-center">
            <div>
              <h1>Recent Activities</h1>
            </div>

            <div className="flex">
              <div className="flex items-center">
                <BsSearch className="text-gray-600 mr-3" />

                <div className=" h-[35px] bg-[#D0D4DA] flex items-center justify-between px-3 mr-5">
                  <p className="mr-2">All</p>
                  <BsChevronDown />
                </div>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="w-full pt-10 px-5 h-full overflow-hidden">
            <div className="w-full grid grid-cols-7 px-5 bg-[#D0D4DA] h-[44px] font-medium text-lg">
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
              <Sm_transactions_modal />
              <Sm_transactions_modal />
              <Sm_transactions_modal />
              <Sm_transactions_modal />
              <Sm_transactions_modal />
              <Sm_transactions_modal />
              <Sm_transactions_modal />
              <Sm_transactions_modal />
              <Sm_transactions_modal />
              <Sm_transactions_modal />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
