'use client';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import haven_apartment from '../../public/Home-assets/haven-apartment.png';
import Home_image from '../../public/Home-assets/home-bg-img.png';
import tag_icon from '../../public/Home-assets/tag-icon.png';
import location_icon from '../../public/Home-assets/location-icon.png';
import house_icon from '../../public/Home-assets/house-icon.png';
import progress_bar from '../../public/Home-assets/progress-bar.png';
import progress_bar5 from '../../public/Home-assets/progress_bar5.jpg';
import Image from 'next/image';
import Link from 'next/link';
import ikate from '../../public/Home-assets/ikate.webp';

export default function HomePage_Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className=' bg-primary pt-10 w-full'>
      <h1 className='text-xl font-bold md:text-4xl md:font-medium text-center mb-3'>
        Available Properties
      </h1>
      <motion.div
        ref={carousel}
        className='cursor-grab overflow-hidden bg-[#FAFAFA]'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='flex bg-[#FAFAFA] w-full px-5 md:px-[50px] py-10'
        >
          {/* Haven */}

          <motion.div className='min-w-[350px] w-full md:min-w-[510px] rounded-2xl overflow-hidden mr-5 md:mr-10 border border-secondary'>
            <Link href='property-description/6516e5cfe7badd993d765892'>
              <div className='w-full mb-3 pointer-events-none'>
                <Image
                  src={haven_apartment}
                  alt='line img'
                  width={1000}
                  height={1000}
                  className='w-full h-[200px] md:h-[300px] object-cover pointer-events-none'
                />
              </div>
              <div className='w-full flex justify-between px-5'>
                <div>
                  <h3 className='text-xl font-medium mb-3'>Haven 1</h3>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={tag_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>Completed project</p>
                  </div>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={location_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>
                      Haven Apartments, Off Freedom way Lekki.
                    </p>
                  </div>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={house_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>3 Units (2-Bedroom Flats)</p>
                  </div>
                </div>
                <div className='flex flex-col justify-between pb-3 items-end'>
                  <div>
                    <Image
                      src={progress_bar5}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[107px] h-[10px]'
                    />
                    <p className='text-[#6B7280] text-sm'>Slots sold out</p>
                  </div>
                  <div>
                    <p className='font-medium text-lg text-secondary'>
                      ₦ 650k
                    </p>
                    <p className='text-[#6B7280] text-sm text-end'>Per Slot</p>
                  </div>
                </div>
              </div>
              <div className='w-full px-1 md:px-5 pb-5 my-3 md:mt-16 md:pb-5'>
                <div className='flex justify-between items-center p-1 md:p-3 w-full bg-[#FFDAE4] text-black rounded-2xl'>
                  <div className='flex flex-col items-center justify-center text-[#374151]'>
                    <h1 className='text-xl font-bold text-[#374151]'>10%</h1>
                    <p className='text-sm text-[#374151] text-center'>
                      Annual Net Yield
                    </p>
                  </div>
                  <div className=' flex flex-col items-center justify-center'>
                    <h1 className='text-xl font-bold text-[#374151]'>5%</h1>
                    <p className='text-sm text-center text-[#374151]'>
                      Average Annual
                      <span className='hidden md:block'>Appreciation</span>
                    </p>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-xl font-bold text-[#374151]'>15%</h1>
                    <p className='text-sm text-[#374151] text-center'>
                      Total Annual ROI
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div className='min-w-[350px] w-full md:min-w-[510px] rounded-2xl overflow-hidden mr-5 md:mr-10 border border-secondary'>
            <Link href='property-description/6516e5cfe7badd993d765892'>
              <div className='w-full mb-3'>
                <Image
                  src={Home_image}
                  alt='line img'
                  width={1000}
                  height={1000}
                  className='w-full h-[200px] md:h-[300px] object-cover pointer-events-none'
                />
              </div>
              <div className='w-full flex justify-between px-5'>
                <div>
                  <h3 className='text-xl font-medium mb-3'>Albert Court</h3>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={tag_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>Ongoing project</p>
                  </div>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={location_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>
                      Haven 2, Ologolo Lekki.
                    </p>
                  </div>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={house_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>8 Units (2 Bedroom Flats)</p>
                  </div>
                </div>
                <div className='flex flex-col justify-between pb-3 items-end'>
                  <div>
                    <Image
                      src={progress_bar}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[107px] h-[6px]'
                    />
                    <p className='text-[#6B7280] text-sm'>Slots ongoing</p>
                  </div>
                  <div>
                    <p className='font-medium text-lg text-secondary'>
                      ₦ 310k
                    </p>
                    <p className='text-[#6B7280] text-sm text-end'>Per Slot</p>
                  </div>
                </div>
              </div>
              <div className='w-full px-1 md:px-5 pb-5 my-3 md:mt-16 md:pb-5'>
                <div className='flex justify-between items-center p-1 md:p-3 w-full bg-[#FFDAE4] text-black rounded-2xl'>
                  <div className='flex flex-col items-center justify-center text-[#374151]'>
                    <h1 className='text-xl font-bold text-[#374151]'>10%</h1>
                    <p className='text-sm text-[#374151] text-center'>
                      Annual Net Yield
                    </p>
                  </div>
                  <div className=' flex flex-col items-center justify-center'>
                    <h1 className='text-xl font-bold text-[#374151]'>5%</h1>
                    <p className='text-sm text-center text-[#374151]'>
                      Average Annual Property
                      <span className='hidden md:block'>Appreciation</span>
                    </p>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-xl font-bold text-[#374151]'>15%</h1>
                    <p className='text-sm text-[#374151] text-center'>
                      Total Annual ROI
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div className='min-w-[350px] w-full md:min-w-[510px] rounded-2xl overflow-hidden mr-5 md:mr-10 border border-secondary'>
            <Link href='property-description/6516e5cfe7badd993d765892'>
              <div className='w-full mb-3'>
                <Image
                  src={ikate}
                  alt='line img'
                  width={1000}
                  height={1000}
                  className='w-full h-[200px] md:h-[300px] object-cover pointer-events-none'
                />
              </div>
              <div className='w-full flex justify-between px-5'>
                <div>
                  <h3 className='text-xl font-medium mb-3'>Veronica Court</h3>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={tag_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>Ongoing project</p>
                  </div>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={location_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>
                      Seagate Estate, Ikate Lekki.
                    </p>
                  </div>
                  <div className='flex mb-3 items-center'>
                    <Image
                      src={house_icon}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[24px] mr-3'
                    />
                    <p className='text-[#6B7280] text-sm'>2 Units (2 Bedroom Flat)</p>
                  </div>
                </div>
                <div className='flex flex-col justify-between pb-3 items-end'>
                  <div>
                    <Image
                      src={progress_bar}
                      alt='line img'
                      width={100}
                      height={100}
                      className='w-[107px] h-[6px]'
                    />
                    <p className='text-[#6B7280] text-sm'>Slots ongoing</p>
                  </div>
                  <div>
                    <p className='font-medium text-lg text-secondary'>
                      ₦ 460k
                    </p>
                    <p className='text-[#6B7280] text-sm text-end'>Per Slot</p>
                  </div>
                </div>
              </div>
              <div className='w-full px-1 md:px-5 pb-5 my-3 md:mt-16 md:pb-5'>
                <div className='flex justify-between items-center p-1 md:p-3 w-full bg-[#FFDAE4] text-black rounded-2xl'>
                  <div className='flex flex-col items-center justify-center text-[#374151]'>
                    <h1 className='text-xl font-bold text-[#374151]'>10%</h1>
                    <p className='text-sm text-[#374151] text-center'>
                      Annual Net Yield
                    </p>
                  </div>
                  <div className=' flex flex-col items-center justify-center'>
                    <h1 className='text-xl font-bold text-[#374151]'>5%</h1>
                    <p className='text-sm text-center text-[#374151]'>
                      Average Annual Property
                      <span className='hidden md:block'>
                        Appriciation in lekki
                      </span>
                    </p>
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-xl font-bold text-[#374151]'>15%</h1>
                    <p className='text-sm text-[#374151] text-center'>
                      Total Annual ROI
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

