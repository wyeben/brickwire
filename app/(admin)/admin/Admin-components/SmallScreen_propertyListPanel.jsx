'use client';
import Image from 'next/image';
import Profile_img from '../../../../public/Profile-assets/profile-img.png';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import { IoAdd } from 'react-icons/io5';
import Properties_model from './Properties-model';
import './components.css';
import { useEffect, useState } from 'react';
import burger_menu from '../../../../public/Nav-assets/burger-menu.png';
import Burger_menu from './Burger_menu';
import Link from 'next/link';
import SmallScreenNav from './SmallScreenNav';
import Property_listing_form from './Property_listing_form';

export default function SmallScreen_propertyListPanel(
  {
    property
  }
) {
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
        <section className="col-span-5 max-h-[100vh] grid grid-rows-[(10vh_35px_1fr)] md:hidden w-full">
          <SmallScreenNav handleClickedBurgerMenu={handleClickedBurgerMenu} />
          {/* Property List */}
          <div className="flex justify-between w-full mt-5 px-5">
            <div>
              <h3 className="font-medium">Property List</h3>
            </div>
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
          <div className="w-full px-5 pt-5 pb-10 flex justify-between items-center">
            <div className="flex justify-between w-full">
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
              <div className=" h-[35px] bg-[#D0D4DA] flex items-center justify-between px-3">
                <p className="mr-3">All</p>
                <BsChevronDown />
              </div>
            </div>
          </div>
          {/* Properties */}
          <div
            className="px-5 grid grid-cols-1 gap-y-5 pb-20"
            id="transactions"
          >
            {property?.map((prop) => {
              return <Properties_model props={prop} />;
            })}
          </div>
        </section>
      )}
    </>
  );
}
