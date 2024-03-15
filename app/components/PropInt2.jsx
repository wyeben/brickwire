import haven_apartment from '../../public/Home-assets/palm-house.png';
import progress_bar from '../../public/Profile-assets/progress-bar.png';
import see_more_icon from '../../public/Profile-assets/seemore-icon.png';
import location_icon from '../../public/Profile-assets/location-icon.png';
import tag_icon from '../../public/Profile-assets/tag-icon.png';
import Image from 'next/image';
import Link from 'next/link';

export default function PropIntrest2() {
  return (
    <div className='bg-[#F5F5F5] p-2 w-full mt-5'>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className='flex '>
          <Image
            src={haven_apartment}
            alt='apartment image'
            width={160}
            height={160}
            className='w-[155px] h-[88px] mr-2'
          />
          <div className=''>
            <p className='font-medium text-lg'>Pearl Haven 2</p>
            <ul className='text-sm flex items-center'>
              <li className='mr-2 flex items-center'>
                <Image
                  src={tag_icon}
                  alt='tag icon'
                  width={24}
                  height={24}
                  className='w-[24px] h-[24px] mr-1'
                />
                <p>Completed</p>
              </li>
              <li className='flex items-center'>
                <Image
                  src={location_icon}
                  alt='tag icon'
                  width={24}
                  height={24}
                  className='w-[24px] h-[24px] mr-1'
                />
                <p>Ologo</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-sm hidden md:block'>
          <h3 className='font-bold'>10%</h3>
          <p>Annual net yield</p>
        </div>
      </div>
      <div className='my-3 flex justify-between items-center'>
        <div>
          <h3 className='text-secondary font-bold mb-2'>#2.2 Million</h3>
          <p className='text-sm'>Per Slot</p>
        </div>
        <div>
          <Image
            src={progress_bar}
            alt='apartment image'
            width={160}
            height={160}
            className='w-[107px] h-[6px] mb-2'
          />
          <p className='text-sm'>Slots ongoing</p>
        </div>
      </div>
      <div className='grid grid-cols-3 items-center mb-2 text-sm '>
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h3 className='font-bold'>5%</h3>
          <p>Average annual property appreciation</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='font-bold'>15%</h3>
          <p>Total annual ROI</p>
        </div>
        <div className='flex flex-col items-center justify-center md:items-end'>
          <h3 className='font-bold'>October 2023</h3>
          <p>Completion date</p>
        </div>
      </div>
      <hr className='w-full border border-[#E5E5E5]' />
      <div className='py-3 w-full'>
        <div className='flex items-center cursor-pointer'>
          <Link
            href={'property-description/6516e131e7badd993d765882'}
            className='text-secondary font-bold mr-2 text-sm'
          >
            See More
          </Link>
          <Image
            src={see_more_icon}
            alt='apartment image'
            width={24}
            height={24}
            className='w-[24px] h-[24px]'
          />
        </div>
      </div>
    </div>
  );
}
