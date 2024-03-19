import haven_apartment from '../../public/Home-assets/haven-apartment.png';import Home_image from '../../public/Home-assets/home-bg-img.png';
import palm_house from '../../public/Home-assets/palm-house.png';
import tag_icon from '../../public/Home-assets/tag-icon.png';
import location_icon from '../../public/Home-assets/location-icon.png';
import house_icon from '../../public/Home-assets/house-icon.png';
import progress_bar from '../../public/Home-assets/progress-bar.png';
import Image from 'next/image';

export default function PropertyCard() {
  return (
    <div className="w-full md:w-[390px] rounded-2xl overflow-hidden shadow-xl md:mr-10 mb-10 md:mb-0">
      <div className="w-full mb-3 h-[220px]">
        <Image
          src={haven_apartment}
          alt="line img"
          width={1000}
          height={1000}
          priority={true}
          className="w-full object-cover"
        />
      </div>
      <div className="w-full flex justify-between px-5">
        <div>
          <h3 className="text-xl font-medium mb-3">Haven Apartment</h3>
          <div className="flex mb-3 items-center">
            <Image
              src={tag_icon}
              alt="line img"
              width={100}
              height={100}
              className="w-[24px] mr-3"
            />
            <p className="text-[#6B7280] text-[11px]">Completed project</p>
          </div>
          <div className="flex mb-3 items-center">
            <Image
              src={location_icon}
              alt="line img"
              width={100}
              height={100}
              className="w-[24px] mr-3"
            />
            <p className="text-[#6B7280] text-[11px]">
              Off Freedom Way, Lekki.
            </p>
          </div>
          <div className="flex mb-3 items-center">
            <Image
              src={house_icon}
              alt="line img"
              width={100}
              height={100}
              className="w-[24px] mr-3"
            />
            <p className="text-[#6B7280] text-[11px]">13 Total Units</p>
          </div>
        </div>
        <div className="flex flex-col justify-between pb-3 items-end">
          <div>
            <Image
              src={progress_bar}
          
              alt="line img"
              width={100}
              height={100}
              className="w-[107px] h-[6px]"
            />
            <p className="text-[#6B7280] text-[11px]">Slots ongoing</p>
          </div>
          <div>
            <p className="font-bold text-sm text-secondary">₦ 5,200,000</p>
            <p className="text-[#6B7280] text-[11px] text-end">Per Slot</p>
          </div>
        </div>
      </div>
      <div className="w-full px-5 mt-16 pb-5">
        <div className="flex justify-between items-center p-3 w-full bg-[#FFDAE4] text-black rounded-2xl">
          <div className="flex flex-col items-center justify-center text-[#374151]">
            <h1 className="text-sm font-bold text-[#374151]">10%</h1>
            <p className="text-[11px] text-[#374151]">Annual Net Yield</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-[#374151]">31.5%</h1>
            <p className="text-[11px] text-center text-[#374151]">
              Average Annual
              <span className="block">Property Appriciation</span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm font-bold text-[#374151]">41.5%</h1>
            <p className="text-[11px] text-[#374151]">Total Annual ROI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
