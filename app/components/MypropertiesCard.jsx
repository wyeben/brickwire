import haven_apartment from '../../public/Home-assets/haven-apartment.png';
import tag_icon from '../../public/Home-assets/tag-icon.png';
import location_icon from '../../public/Home-assets/location-icon.png';
import house_icon from '../../public/Home-assets/house-icon.png';
import progress_bar from '../../public/Home-assets/progress-bar.png';
import Image from 'next/image';

export default function MypropertiesCard() {
  return (
    <div className='w-full md:w-[390px] rounded-2xl overflow-hidden mr-10'>
      <div className='w-full h-[220px]'>
        <Image
          src={haven_apartment}
          alt='line img'
          width={1000}
          height={1000}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='w-full flex justify-between px-5 bg-[#F5F5F5] pt-3'>
        <div>
          <h3 className='text-xl font-medium mb-3'>Wavelight Apartment</h3>
          <div className='flex mb-3 items-center'>
            <Image
              src={tag_icon}
              alt='line img'
              width={100}
              height={100}
              className='w-[24px] mr-3'
            />
            <p className='text-[#6B7280] text-[11px]'>Off plan</p>
          </div>
          <div className='flex mb-3 items-center'>
            <Image
              src={location_icon}
              alt='line img'
              width={100}
              height={100}
              className='w-[24px] mr-3'
            />
            <p className='text-[#6B7280] text-[11px]'>Ogologo.</p>
          </div>
        </div>
        <div className='flex flex-col justify-between pb-3 items-end'>
          <div>
            <p className='text-[#6B7280] text-sm font-bold text-end'>10%</p>
            <p className='text-[#6B7280] text-sm'>Annual net yield</p>
          </div>
        </div>
      </div>
      <div className='w-full px-5 pt-5 pb-5 bg-[#F5F5F5]'>
        <h3 className='text-secondary font-bold text-lg mb-5'>#110,000,000</h3>
        <button className='bg-secondary text-white text-sm w-[70px] h-[50px] flex items-center justify-center rounded-lg md:rounded-none '>
          Sell
        </button>
      </div>
    </div>
  );
}
