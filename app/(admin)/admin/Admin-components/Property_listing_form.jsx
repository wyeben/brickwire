import { AiOutlineFileImage } from 'react-icons/ai';

export default function Property_listing_form() {
  return (
    <div
      className='w-full h-full overflow-y-scroll px-5 pb-20'
      id='transactions'
    >
      <h1 className='font-medium text-lg text-[#1F2937] mt-10'>
        Property Listing Form
      </h1>
      <form className='mt-10'>
        <div className='w-full'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5'>
            <div>
              <label htmlFor='location' className='text-[#9BA2AE] text-sm'>
                Location
              </label>
              <select
                name='location'
                id='location'
                className='w-full h-[46px] bg-[#FAFAFA] px-3 outline-none focus:outline-none'
              >
                <option value='Lekki'>Lekki</option>
                <option value='Ologolo'>Ologolo</option>
                <option value='Ikoyi'>Ikoyi</option>
                <option value='Ikate'>Ikate</option>
                <option value='Ikeja'>Ikeja</option>
                <option value='Victoria Island'>Victoria Island</option>
              </select>
            </div>
            <div>
              <label htmlFor='address' className='text-[#9BA2AE] text-sm'>
                Property address
              </label>
              <input
                type='text'
                id='address'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Street Address'
              />
            </div>
            <div>
              <label htmlFor='apartmentName' className='text-[#9BA2AE] text-sm'>
                Apartment Name
              </label>
              <input
                type='text'
                id='apartmentName'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Apartment Name'
              />
            </div>
            <div>
              <label htmlFor='residential' className='text-[#9BA2AE] text-sm'>
                Flat Type (Residential)
              </label>
              <input
                type='text'
                id='residential'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Flat type'
              />
            </div>
            <div>
              <label htmlFor='shortlet' className='text-[#9BA2AE] text-sm'>
                Flat Type (Shortlet)
              </label>
              <input
                type='text'
                id='shortlet'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Flat type'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='roi' className='text-[#9BA2AE] text-sm w-full'>
                Total Annual ROI
              </label>
              <input
                type='text'
                id='roi'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='ROI'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='residentialPrice'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Residential Flat price
              </label>
              <input
                type='text'
                id='residentialPrice'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Flat Price'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='shortletPrice'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Shortlet Flat price
              </label>
              <input
                type='text'
                id='shortletPrice'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Flat Price'
              />
            </div>
            <div className='flex md:col-span-2 items-center'>
              <p className='text-[#9BA2AE] mr-5'>Progress:</p>
              <div className='flex items-center mr-5'>
                <p className='text-[#1F2937] mr-3'>Ongoing</p>
                <input type='checkbox' />
              </div>
              <div className='flex items-center '>
                <p className='text-[#1F2937] mr-3'>Completed</p>
                <input type='checkbox' />
              </div>
            </div>
            <div className='w-full'>
              <label
                htmlFor='unitName'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Unit Name
              </label>
              <input
                type='text'
                id='unitName'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Unit name'
              />
            </div>
            <div className='w-full md:col-span-2'>
              <label
                htmlFor='description1'
                className='text-[#9BA2AE] text-sm w-full'
              >
                First Description
              </label>
              <textarea
                name='description1'
                id='description1'
                className='w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3'
              />
            </div>
            <div className='w-full md:col-span-2'>
              <label
                htmlFor='description2'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Second Description
              </label>
              <textarea
                name='description2'
                id='description2'
                className='w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3'
              />
            </div>
            <div className='w-full md:col-span-2'>
              <label
                htmlFor='description3'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Third Description
              </label>
              <textarea
                name='description3'
                id='description3'
                className='w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3'
              />
            </div>
            <div className='w-full md:col-span-2'>
              <label
                htmlFor='description4'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Forth Description
              </label>
              <textarea
                name='description4'
                id='description4'
                className='w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3'
              />
            </div>
            <div className='w-full md:col-span-2'>
              <label
                htmlFor='description5'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Fifth Description
              </label>
              <textarea
                name='description5'
                id='description5'
                className='w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='deliverydate'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Delivery Date
              </label>
              <input
                type='text'
                id='deliverydate'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Delivery date'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='aap' className='text-[#9BA2AE] text-sm w-full'>
                Average Annual Appreciation
              </label>
              <input
                type='text'
                id='aap'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Average annual appreciation'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='annualnetyield'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Annual Net Yield
              </label>
              <input
                type='text'
                id='annualnetyield'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Average annual appreciation'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='paymentplan'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Payment Plan
              </label>
              <input
                type='text'
                id='paymentplan'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Payment plan'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='numberOfslots'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Number of Slots
              </label>
              <input
                type='text'
                id='numberOfslots'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Number of slots'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='boughtSlots'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Bought Slots
              </label>
              <input
                type='text'
                id='boughtSlots'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Bought slots'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='slotprice'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Slot Price
              </label>
              <input
                type='text'
                id='slotprice'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Bought slots'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='investmentwindow'
                className='text-[#9BA2AE] text-sm w-full'
              >
                Investment Window
              </label>
              <input
                type='text'
                id='investmentwindow'
                className='w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3'
                placeholder='Investment window'
              />
            </div>
            <div className='w-full md:col-span-2'>
              <label htmlFor='image1' className='text-[#9BA2AE] text-sm w-full'>
                Upload first image
                <AiOutlineFileImage />
              </label>
              <input type='file' id='image1' />
            </div>
            <div className='w-full md:col-span-2'>
              <label htmlFor='image2' className='text-[#9BA2AE] text-sm w-full'>
                Upload second image
                <AiOutlineFileImage />
              </label>
              <input type='file' id='image2' />
            </div>
            <div className='w-full md:col-span-2'>
              <label htmlFor='image3' className='text-[#9BA2AE] text-sm w-full'>
                Upload third image
                <AiOutlineFileImage />
              </label>
              <input type='file' id='image3' />
            </div>
            <div className='w-full md:col-span-2'>
              <label htmlFor='image4' className='text-[#9BA2AE] text-sm w-full'>
                Upload fourth image
                <AiOutlineFileImage />
              </label>
              <input type='file' id='image4' />
            </div>
            <div className='w-full md:col-span-2'>
              <label htmlFor='image5' className='text-[#9BA2AE] text-sm w-full'>
                Upload fifth image
                <AiOutlineFileImage />
              </label>
              <input type='file' id='image5' />
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <button className='bg-secondary text-white rounded-lg h-[50px] w-[110px] mr-10 text-sm'>
            Upload
          </button>
          <button className='bg-primary border border-secondary rounded-lg h-[50px] w-[110px] text-[#1F2937] text-sm'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
