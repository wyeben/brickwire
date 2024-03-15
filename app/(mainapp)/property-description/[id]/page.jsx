import './style.css';
import Image from 'next/image';
import house_icon from '../../../../public/Home-assets/house-icon.png';
import location_icon from '../../../../public/Home-assets/location-icon.png';
import rectangle_icon from '../../../../public/Property-description-assets/rectangle-icon.png';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Payment from '../../../components/Payment';
import { fetchSingleProperty } from '@/lib/property.action';
import ImageHandler from '@/app/components/ImageHandler';

export default async function PropertyDescription({ params }) {
  if (!params.id) return null;
  const id = params.id;
  const property = await fetchSingleProperty(id);

  if (!property) return <div className='loader'></div>;
  return (
    <main className="pt-[10vh] w-full">
      <section className="flex w-full justify-center mt-10">
        <div className="flex items-center justify-center flex-col">
          <div
            style={{
              display: "flex",
              gap: "100px",
              cursor: "pointer",
            }}
          ></div>
          <h1 className=" text-2xl md:text-4xl mb-3">
            {property.apartmentName}
          </h1>
          <ul className="flex flex-col md:flex-row md:items-center">
            <li className="flex items-center md:border-r border-secondary md:pr-3">
              <Image
                src={location_icon}
                alt="line img"
                width={100}
                height={100}
                className="w-[24px] mr-3"
              />
              <p className="text-sm">{property.address}</p>
            </li>
            <li className="flex items-center md:pl-3 mt-2 md:mt-0">
              <Image
                src={house_icon}
                alt="line img"
                width={100}
                height={100}
                className="w-[24px] mr-3"
              />
              <p className="text-sm">
                {property.ongoing == "true" ? "Ongoing" : "Completed"} Project
              </p>
            </li>
          </ul>
        </div>
      </section>
      <ImageHandler
        img={property.img}
        imageB={property.imageB}
        imageC={property.imageC}
        imageD={property.imageD}
        imageE={property.imageE}
      />
      <section className="w-full px-5 md:px-[50px] mt-10">
        <h1 className=" text-2xl md:text-4xl mb-10">{property.unit}</h1>
        <div className="flex flex-col md:flex-row justify-between">
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
                  alt="line img"
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>{property.description1}</p>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  alt="line img"
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>{property.description2}</p>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  alt="line img"
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>{property.description3}</p>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  alt="line img"
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>{property.description4}</p>
              </li>
              <li className="flex items-center mb-2">
                <Image
                  src={rectangle_icon}
                  width={100}
                  height={100}
                  alt="line img"
                  className="h-[16px] w-[16px] object-cover mr-3"
                />
                <p>{property.description5}</p>
              </li>
            </ul>
            <div className="mt-5 ">
              <h4 className="font-semibold text-2xl">Delivery Date</h4>
              <p className="text-sm">{property.deliveryDate}</p>
            </div>
          </div>
          <div className="w-full md:w-[490px]">
            <div className="w-full border border-[#E5E5E5] p-5 mb-10">
              <div className="mb-10">
                <h4 className="font-semibold text-2xl">Residential</h4>
                <hr className="border-secondary border w-[70px]" />
              </div>
              <ul className="w-full text-sm">
                <li className="w-full flex justify-between mb-3">
                  <p>Flat Type</p>
                  <div className="w-[20%]">
                    <p>{property.residentialFlatType}</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Annual Net Yield</p>
                  <div className="w-[20%]">
                    <p>{property.annualNetYieldResidential}</p>
                  </div>
                </li>
                <li className="w-full mb-3">
                  <div className="w-full flex justify-between">
                    <p className="">Flat Price</p>
                    <div className="w-[20%]">
                      <p>{property.residentialFlatPrice}</p>
                    </div>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p className="">Payment Plan</p>
                  <div className="w-[20%]">
                    <p>{property.paymentPlan}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* shortlet */}
            <div className="w-full border border-[#E5E5E5] p-5 mb-10">
              <div className="mb-10">
                <h4 className="font-semibold text-2xl">Shortlet Investment</h4>
                <hr className="border-secondary border w-[70px]" />
              </div>
              <ul className="w-full text-sm">
                <li className="w-full flex justify-between mb-3">
                  <p>Flat Type</p>
                  <div className="w-[20%]">
                    <p>{property.shortletFlatType}</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Annual Net Yield</p>
                  <div className="w-[20%]">
                    <p>{property.annualNetYieldShortlet}</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Flat Price</p>
                  <div className="w-[20%]">
                    <p>{property.shortletFlatPrice}</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Slot Price</p>
                  <div className="w-[20%]">
                    <p>{property.slotPrice}</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p>Number of Slots</p>
                  <div className="w-[20%]">
                    <p>{property.nofSlots}</p>
                  </div>
                </li>
                <li className="w-full flex justify-between mb-3">
                  <p className="">Investment Window</p>
                  <div className="w-[30%]">
                    <p>{property.investmentWindow}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 flex-col items-center">
          <div className="border border-secondary p-5 text-sm">
            <p>For more enquiries and to make payment, please contact;</p>
            <p>
              Call/WhatsApp:{" "}
              <span className="text-secondary">+2347026521865</span>
            </p>
            <p>
              Email:{" "}
              <span className="text-secondary">
                info@brickwireconstruction.com
              </span>
            </p>
          </div>
          <div className="mt-10">
            <Payment />
          </div>
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
