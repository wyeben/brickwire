"use client";
import Image from "next/image";
import house_icon from "../../../../public/Home-assets/house-icon.png";
import location_icon from "../../../../public/Home-assets/location-icon.png";
import haven_apartment from "../../../../public/Home-assets/haven-apartment.png";
import Home_image from "../../../../public/Home-assets/home-bg-img.png";
import palm_house from "../../../../public/Home-assets/palm-house.png";
import left_slide from "../../../../public/Property-description-assets/left-slide-icon.png";
import right_slide from "../../../../public/Property-description-assets/right-slide-icon.png";
import rectangle_icon from "../../../../public/Property-description-assets/rectangle-icon.png";
// import Payment from "../../components/Payment";
import { useState, useEffect, useRef } from "react";

export default function PropertyDescription() {
  const imgObj = [
    {
      id: 0,
      image: haven_apartment,
    },
    {
      id: 1,
      image: Home_image,
    },
    {
      id: 2,
      image: palm_house,
    },
    {
      id: 3,
      image: haven_apartment,
    },
    {
      id: 4,
      image: Home_image,
    },
  ];
  const newList = [];
  imgObj.forEach((item) => newList.push(item.image));

  const [currentImage, setCurrentImage] = useState(newList[0]);
  const [currentNuminList, setCurrentNuminList] = useState(0);
  function handleChangeImage(id) {
    setCurrentNuminList(id);
    setCurrentImage(newList[id]);
  }
  function handleLeftImage() {
    if (currentNuminList !== 0) {
      const newNum = currentNuminList - 1;
      setCurrentImage(newList[newNum]);
      setCurrentNuminList(newNum);
    }
  }
  function handleRightImage() {
    if (currentNuminList !== newList.length - 1) {
      const newNum = currentNuminList + 1;
      setCurrentImage(newList[newNum]);
      setCurrentNuminList(newNum);
    }
  }

  return (
    <main className="pt-[10vh] w-full">
      <section className="flex w-full justify-center mt-10">
        <div className="flex items-center justify-center flex-col">
          <h1 className="font-bold text-4xl">Haven Apartment</h1>
          <ul className="flex items-center">
            <li className="flex items-center border-r border-secondary pr-3">
              <Image
                src={location_icon}
                alt="line img"
                width={100}
                height={100}
                className="w-[24px] mr-3"
              />
              <p className="text-sm">Off Freedom way, Lekki phase 1</p>
            </li>
            <li className="flex items-center pl-3">
              <Image
                src={house_icon}
                alt="line img"
                width={100}
                height={100}
                className="w-[24px] mr-3"
              />
              <p className="text-sm">Completed Project</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="px-[50px] mt-10">
        <div className="w-full h-[700px]">
          <Image
            src={currentImage}
            width={1000}
            height={1000}
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div className="flex justify-between mt-10">
          <button
            className="w-[47px] h-[160px] bg-secondary"
            onClick={handleLeftImage}
          >
            <Image
              src={left_slide}
              width={1000}
              height={1000}
              className="w-[64px]"
            />
          </button>
          {imgObj.map((item) => (
            <div
              key={item.id}
              onClick={() => handleChangeImage(item.id)}
              className="cursor-pointer"
            >
              <Image
                src={item.image}
                width={1000}
                height={1000}
                className="w-[220px] h-[160px] object-cover"
              />
            </div>
          ))}
          <button
            className="w-[47px] h-[160px] bg-secondary"
            onClick={handleRightImage}
          >
            <Image
              src={right_slide}
              width={1000}
              height={1000}
              className="w-[64px]"
            />
          </button>
        </div>
      </section>
      <section className="w-full px-[50px] mt-10">
        <h1 className="font-bold text-4xl mb-10">Nicole Unit</h1>
        <div className="flex justify-between">
          <div>
            <div className="mb-5">
              <h4 className="font-semibold text-2xl">Property Description</h4>
              <hr className="border-secondary border w-[139px]" />
            </div>
            <ul className="text-sm">
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>Ongoing project in prime Lekki location.</p>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>Modern luxury, panoramic views, and smart features.</p>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>High returns in Lekki's thriving real estate market.</p>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>Secure investment with growing demand.</p>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>Government Consent</p>
              </li>
            </ul>
            <div className="mt-5 ">
              <h4 className="font-semibold text-2xl">Delivery Date</h4>
              <p className="text-sm">September 2024</p>
            </div>
          </div>
          <div className="w-[490px]">
            <div className="w-full border border-[#E5E5E5] p-5 mb-10">
              <div className="mb-10">
                <h4 className="font-semibold text-2xl">Unit</h4>
                <hr className="border-secondary border w-[70px]" />
              </div>
              <ul className="w-full text-sm">
                <li className="w-full flex justify-between mb-3">
                  <p>Unit Type</p>
                  <div className="w-[20%]">
                    <p>3 Bedroom</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Ave Property Appreciation</p>
                  <div className="w-[20%]">
                    <p>31.5%</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Annual Net Yield</p>
                  <div className="w-[20%]">
                    <p>5%</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Unit Price</p>
                  <div className="w-[20%]">
                    <p>#110 Million</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p className="font-bold">Payment Plan</p>
                  <div className="w-[20%]">
                    <p>6-12 Months</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full border border-[#E5E5E5] p-5 mb-10">
              <div className="mb-10">
                <h4 className="font-semibold text-2xl">Shortlet Investment</h4>
                <hr className="border-secondary border w-[70px]" />
              </div>
              <ul className="w-full text-sm">
                <li className="w-full flex justify-between mb-3">
                  <p>No of slots</p>
                  <div className="w-[20%]">
                    <p>20</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Slot Price</p>
                  <div className="w-[20%]">
                    <p>#65 Million</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Slot Cell Price</p>
                  <div className="w-[20%]">
                    <p>#650,000</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Annual Net Yield</p>
                  <div className="w-[20%]">
                    <p>10%</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p className="font-bold">Investment Window</p>
                  <div className="w-[20%]">
                    <p>Oct 1st-30th</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10">
          {/* <Payment /> */}
        </div>
        <div className="w-full text-[#ADADAD] bg-[#F9F9F9] h-[120px] p-5 mt-10">
          <p className="text-sm">
            Disclaimer: Some units in this property may be used as shortlet.
          </p>
        </div>
      </section>
    </main>
  );
}
