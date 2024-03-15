"use client";
import Image from "next/image";
import Profile_img from "../../public/Profile-assets/profile-img.png";
import Down_icon from "../../public/Home-assets/down-icon.png";
import Right_icon from "../../public/Home-assets/right-icon.png";
import burger_menu from "../../public/Nav-assets/burger-menu.png";
import cancel_icon from "../../public/Nav-assets/cancel-icon.png";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { getSession } from "next-auth/react";
import ToggleNav from "./toggle-nav";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

export default function Nav2() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
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

  function handleClickedProperties() {
    setClickedProperties(!clickedProperties);
  }

  function handleClickedBurgerMenu() {
    setClickedBurgerMenu(!clickedBurgerMenu);
  }

  return (
    <>
      {clickedBurgerMenu ? (
        <nav>
          <div className="w-full h-[100vh] absolute bg-white z-[101] px-5 overflow-hidden">
            <ul className="w-full flex justify-between items-center h-[10vh]">
              <li className="mr-5">
                <div onClick={handleClickedBurgerMenu}>
                  <Link href={"/"}>
                    <h1 className="text-xl md:text-2xl font-bold text-secondary">
                      BrickWire Properties
                    </h1>
                  </Link>
                </div>
              </li>
              <li onClick={handleClickedBurgerMenu}>
                <Image
                  src={cancel_icon}
                  alt="brickwire logo"
                  height={500}
                  width={500}
                  className="w-[30px] h-[30px]"
                />
              </li>
            </ul>
            <LayoutGroup>
              <motion.ul className="flex flex-col text-base mt-10 font-medium">
                <motion.div layout>
                  <Link href={"/admin/admin-main-090901028"}>
                    <motion.div
                      onClick={() => setClickedBurgerMenu(!clickedBurgerMenu)}
                    >
                      <motion.li className="mb-3">Admin Home</motion.li>
                    </motion.div>
                  </Link>
                </motion.div>

                <ToggleNav question="Properties">
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                  >
                    <Link
                      href={"/property/lekki"}
                      onClick={() => setClickedBurgerMenu(!clickedBurgerMenu)}
                    >
                      <motion.div className="flex w-[50%] items-center border-b border-black justify-between p-4">
                        <motion.p className="text-sm mr-5">Lekki</motion.p>
                        <Image
                          src={Right_icon}
                          width={50}
                          height={50}
                          alt="down icon"
                          className="w-[21px]"
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                  >
                    <Link
                      href={"/property/ologolo"}
                      onClick={() => setClickedBurgerMenu(!clickedBurgerMenu)}
                    >
                      <motion.div className="flex w-[50%] items-center border-b border-black justify-between p-4">
                        <motion.p className="text-sm mr-5">Ologolo</motion.p>
                        <Image
                          src={Right_icon}
                          width={50}
                          height={50}
                          alt="down icon"
                          className="w-[21px]"
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div>
                    <Link
                      href="/property/Ikoyi"
                      onClick={() => setClickedBurgerMenu(!clickedBurgerMenu)}
                    >
                      <motion.div className="flex w-[50%] items-center border-b border-black justify-between p-4">
                        <motion.p className="text-sm mr-5">Ikoyi</motion.p>
                        <Image
                          src={Right_icon}
                          width={50}
                          height={50}
                          alt="down icon"
                          className="w-[21px]"
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div>
                    <Link
                      href="/property/Ikate"
                      onClick={() => setClickedBurgerMenu(!clickedBurgerMenu)}
                    >
                      <motion.div className="flex w-[50%] items-center border-b border-black justify-between p-4">
                        <motion.p className="text-sm mr-5">Ikate</motion.p>
                        <Image
                          src={Right_icon}
                          width={50}
                          height={50}
                          alt="down icon"
                          className="w-[21px]"
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div>
                    <Link
                      href="/property/Ikeja"
                      onClick={() => setClickedBurgerMenu(!clickedBurgerMenu)}
                    >
                      <motion.div className="flex w-[50%] items-center border-b border-black justify-between p-4">
                        <motion.p className="text-sm mr-5">Ikeja</motion.p>
                        <Image
                          src={Right_icon}
                          width={50}
                          height={50}
                          alt="down icon"
                          className="w-[21px]"
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div>
                    <Link
                      href="/property/Victoria-Island"
                      onClick={() => setClickedBurgerMenu(!clickedBurgerMenu)}
                    >
                      <motion.div className="flex w-[50%] items-center border-b border-black justify-between p-4">
                        <motion.p className="text-sm mr-5">
                          Victoria Island
                        </motion.p>
                        <Image
                          src={Right_icon}
                          width={50}
                          height={50}
                          alt="down icon"
                          className="w-[21px]"
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                </ToggleNav>
                <motion.div layout>
                  <Link href={"/faq"}>
                    <motion.div
                      onClick={() => setClickedBurgerMenu(!clickedBurgerMenu)}
                    >
                      <motion.li className="mb-3">FAQ</motion.li>
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.ul>
              {userName ? (
                ""
              ) : (
                <motion.div layout className="mt-10 px-5">
                  <motion.div layout className="flex flex-col">
                    <Link href={"/admin/admin-main-090901028"}>
                      <motion.button className="w-full h-[50px] border border-secondary text-secondary text-base">
                        Admin Properties
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </LayoutGroup>
          </div>
        </nav>
      ) : (
        <nav>
          <div className="px-5 h-[10vh] w-full md:px-[50px] bg-primary fixed top-0 left-0 z-[100] shadow-md">
            <div className="flex w-full justify-between h-full items-center">
              <ul className="flex text-sm items-center">
                <Link href={"/"}>
                  <li className="mr-5 text-secondary">
                    <h1 className="text-xl md:text-2xl font-bold">
                      BrickWire Properties
                    </h1>
                    {/* <p className='text-xs font-normal'>Co-Ownership Scheme</p> */}
                  </li>
                </Link>
                <div className="hidden md:flex">
                  <li
                    className="flex mr-5 items-center cursor-pointer"
                    onClick={handleClickedProperties}
                  >
                    <p className="">Properties</p>
                    <Image
                      src={Down_icon}
                      width={50}
                      height={50}
                      alt="down icon"
                      className="w-[21px]"
                    />
                  </li>
                  <Link href={"/faq"}>
                    <li className="mr-5">FAQ</li>
                  </Link>
                  {/* <Link href={'/property-listing'}>
                    <li className=''>List My Property</li>
                  </Link> */}
                </div>
              </ul>
              <div className="flex">
                <div>
                  <div className="hidden md:flex">
                    <Link href={"/admin/admin-main-090901028"}>
                      <button className="mr-10 w-[130px] h-[50px] border border-secondary text-secondary text-sm">
                        Admin Properties
                      </button>
                    </Link>
                  </div>
                  {/* <button className='bg-secondary mr-3 w-[100px] h-[30px] text-sm rounded-lg text-white md:hidden'>
                Get Started
              </button> */}
                </div>

                <div className="md:hidden" onClick={handleClickedBurgerMenu}>
                  <Image
                    src={burger_menu}
                    width={100}
                    height={100}
                    className="h-[25px] w-[25px]"
                  />
                </div>
              </div>
            </div>
            {clickedProperties && (
              <>
                <div
                  className="w-[100vw] h-[100vh] bg-black opacity-50 absolute top-0 left-0"
                  onClick={handleClickedProperties}
                ></div>
                <div className="w-[152px] bg-white opacity-100 absolute top-[50px] left-[200px] cursor-pointer">
                  <Link
                    href={"/property/lekki"}
                    onClick={handleClickedProperties}
                  >
                    <div className="flex w-full items-center border-b border-black justify-between p-4">
                      <p className="text-sm mr-5">Lekki</p>
                      <Image
                        src={Right_icon}
                        width={50}
                        height={50}
                        alt="down icon"
                        className="w-[21px]"
                      />
                    </div>
                  </Link>
                  <Link
                    href={"/property/ologolo"}
                    onClick={handleClickedProperties}
                  >
                    <div className="flex w-full items-center border-b border-black justify-between p-4">
                      <p className="text-sm mr-5">Ologolo</p>
                      <Image
                        src={Right_icon}
                        width={50}
                        height={50}
                        alt="down icon"
                        className="w-[21px]"
                      />
                    </div>
                  </Link>
                  <Link
                    href="/property/Ikate"
                    onClick={handleClickedProperties}
                  >
                    {" "}
                    <div className="flex w-full items-center border-b border-black justify-between p-4">
                      <p className="text-sm mr-5">Ikate</p>
                      <Image
                        src={Right_icon}
                        width={50}
                        height={50}
                        alt="down icon"
                        className="w-[21px]"
                      />
                    </div>
                  </Link>
                  <Link
                    href="/property/Ikeja"
                    onClick={handleClickedProperties}
                  >
                    {" "}
                    <div className="flex w-full items-center border-b border-black justify-between p-4">
                      <p className="text-sm mr-5">Ikeja</p>
                      <Image
                        src={Right_icon}
                        width={50}
                        height={50}
                        alt="down icon"
                        className="w-[21px]"
                      />
                    </div>
                  </Link>
                  <Link
                    href="/property/Ikoyi"
                    onClick={handleClickedProperties}
                  >
                    {" "}
                    <div className="flex w-full items-center border-b border-black justify-between p-4">
                      <p className="text-sm mr-5">Ikoyi</p>
                      <Image
                        src={Right_icon}
                        width={50}
                        height={50}
                        alt="down icon"
                        className="w-[21px]"
                      />
                    </div>
                  </Link>
                  <Link href="/property/Vi" onClick={handleClickedProperties}>
                    {" "}
                    <div className="flex w-full items-center border-b border-black justify-between p-4">
                      <p className="text-sm mr-5">Vi</p>
                      <Image
                        src={Right_icon}
                        width={50}
                        height={50}
                        alt="down icon"
                        className="w-[21px]"
                      />
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>
        </nav>
      )}
    </>
  );
}
