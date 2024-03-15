"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineFileImage } from 'react-icons/ai';
import { redirect, useRouter } from "next/navigation";
import { updateProperty } from '@/lib/property.action';

export default function Edit_property_listing_form({ oldProp }) {
  const [loading, setLoading] = useState(false);
  const CLOUD_NAME = "du6g27tfh";
  const UPLOAD_PRESET = "brickwire";
  const responseType = {
    error: "error",
    success: "success",
  };
  const [state, setState] = useState({
    ongoing: false,
  });
  const [photo, setPhoto] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);
  const [photo4, setPhoto4] = useState(null);
  const [photo5, setPhoto5] = useState(null);
  // const { data: session } = useSession();
  const router = useRouter();

  const handleChange = (e) => {
    setState((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(!loading);
    const imageUrl = await uploadImage();
    const imageUrl2 = await uploadImage2();
    const imageUrl3 = await uploadImage3();
    const imageUrl4 = await uploadImage4();
    const imageUrl5 = await uploadImage5();
    const body = {
      ...state,
      img: imageUrl,
      imageB: imageUrl2,
      imageC: imageUrl3,
      imageD: imageUrl4,
      imageE: imageUrl5,
      currentOwner: "6515bfbd4f29c0cf011dc5ea",
    };
    const newProp = updateProperty(body, oldProp._id);
    if (newProp) {
      router.push(`/admin/edit-property/${oldProp._id}`);
      window.location.reload();
    }
  };

  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append("file", photo);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      const imageUrl = data["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage2 = async () => {
    if (!photo2) return;

    const formData = new FormData();

    formData.append("file", photo2);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data2 = await res.json();

      const imageUrl2 = data2["secure_url"];

      return imageUrl2;
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage3 = async () => {
    if (!photo3) return;

    const formData = new FormData();

    formData.append("file", photo3);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data3 = await res.json();

      const imageUrl3 = data3["secure_url"];

      return imageUrl3;
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage4 = async () => {
    if (!photo4) return;

    const formData = new FormData();

    formData.append("file", photo4);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data4 = await res.json();

      const imageUrl4 = data4["secure_url"];

      return imageUrl4;
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage5 = async () => {
    if (!photo5) return;

    const formData = new FormData();

    formData.append("file", photo5);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data5 = await res.json();

      const imageUrl5 = data5["secure_url"];

      return imageUrl5;
    } catch (error) {
      console.log(error);
    }
  };

  function notify(text, response) {
    toast[response](text);
  }

  

  return (
    <div
      className="w-full h-full overflow-y-scroll px-5 pb-20 "
      id="transactions"
    >
      <h1 className="font-medium text-lg text-[#1F2937] mt-10">
        Edit Property Form
      </h1>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
            <div>
              <label htmlFor="location" className="text-[#9BA2AE] text-sm">
                Location
              </label>
              <select
                name="location"
                onChange={handleChange}
                id="location"
                value={oldProp.location}
              >
                <option>Choose Location</option>
                <option value="lekki">Lekki</option>
                <option value="ologolo">Ologolo</option>
                <option value="ikate">Ikate</option>
                <option value="ikeja">Ikeja</option>
                <option value="ikoyi">Ikoyi</option>
                <option value="victoria">Victoria island</option>
              </select>
            </div>
            <div>
              <label htmlFor="address" className="text-[#9BA2AE] text-sm">
                Property address
              </label>
              <input
                name="address"
                type="text"
                id="address"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Street Address"
                defaultValue={oldProp.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="apartmentName" className="text-[#9BA2AE] text-sm">
                Apartment Name
              </label>
              <input
                name="apartmentName"
                type="text"
                id="apartmentName"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Apartment Name"
                defaultValue={oldProp.apartmentName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="residentialFlatType"
                className="text-[#9BA2AE] text-sm"
              >
                Flat Type (Residential)
              </label>
              <input
                name="residentialFlatType"
                type="text"
                id="residentialFlatType"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Flat type"
                defaultValue={oldProp.residentialFlatType}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="shortletFlatType"
                className="text-[#9BA2AE] text-sm"
              >
                Flat Type (Shortlet)
              </label>
              <input
                name="hortletFlatType"
                type="text"
                id="shortletFlatType"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Flat type"
                defaultValue={oldProp.shortletFlatType}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="roi" className="text-[#9BA2AE] text-sm w-full">
                Total Annual ROI
              </label>
              <input
                name="roi"
                type="text"
                id="roi"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="ROI"
                defaultValue={oldProp.roi}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="residentialFlatPrice"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Residential Flat price
              </label>
              <input
                name="residentialFlatPrice"
                type="text"
                id="residentialFlatPrice"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Flat Price"
                defaultValue={oldProp.residentialFlatPrice}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="shortletPrice"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Shortlet Flat price
              </label>
              <input
                name="shortletFlatPrice"
                type="text"
                id="shortletPrice"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Flat Price"
                defaultValue={oldProp.shortletFlatPrice}
                onChange={handleChange}
              />
            </div>
            <div className="flex md:col-span-2 items-center">
              <p className="text-[#9BA2AE] mr-5">Progress:</p>
              <div className="flex items-center mr-5">
                <p className="text-[#1F2937] mr-3">Ongoing</p>
                <input type="checkbox" />
              </div>
              <div className="flex items-center ">
                <p className="text-[#1F2937] mr-3">Completed</p>
                <input type="checkbox" />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="unitName"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Unit Name
              </label>
              <input
                name="unit"
                type="text"
                id="unitName"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Unit name"
                defaultValue={oldProp.unit}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:col-span-2">
              <label
                htmlFor="description1"
                className="text-[#9BA2AE] text-sm w-full"
              >
                First Description
              </label>
              <textarea
                name="description1"
                id="description1"
                className="w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3"
                defaultValue={oldProp.description1}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:col-span-2">
              <label
                htmlFor="description2"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Second Description
              </label>
              <textarea
                name="description2"
                id="description2"
                className="w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3"
                defaultValue={oldProp.description2}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:col-span-2">
              <label
                htmlFor="description3"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Third Description
              </label>
              <textarea
                name="description3"
                id="description3"
                className="w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3"
                defaultValue={oldProp.description3}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:col-span-2">
              <label
                htmlFor="description4"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Forth Description
              </label>
              <textarea
                name="description4"
                id="description4"
                className="w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3"
                defaultValue={oldProp.description4}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:col-span-2">
              <label
                htmlFor="description5"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Fifth Description
              </label>
              <textarea
                name="description5"
                id="description5"
                className="w-full h-[94px] resize-none bg-[#FAFAFA] outline-none focus:outline-none px-3"
                defaultValue={oldProp.description5}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="deliverydate"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Delivery Date
              </label>
              <input
                name="deliveryDate"
                type="text"
                id="deliverydate"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Delivery date"
                defaultValue={oldProp.deliveryDate}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label htmlFor="aap" className="text-[#9BA2AE] text-sm w-full">
                Average Annual Appreciation
              </label>
              <input
                name="averageAnnualAppreciation"
                type="text"
                id="aap"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Average annual appreciation"
                defaultValue={oldProp.averageAnnualAppreciation}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="annualnetyield"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Annual Net Yield Residential
              </label>
              <input
                name="annualNetYieldResidential"
                type="text"
                id="annualnetyield"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Average annual appreciation"
                defaultValue={oldProp.annualNetYieldResidential}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="annualnetyield"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Annual Net Yield Shortlet
              </label>
              <input
                name="annualNetYieldShortlet"
                type="text"
                id="annualnetyield"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Average annual appreciation"
                defaultValue={oldProp.annualNetYieldShortlet}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="paymentplan"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Payment Plan
              </label>
              <input
                name="paymentPlan"
                type="text"
                id="paymentplan"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Payment plan"
                defaultValue={oldProp.paymentPlan}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="numberOfslots"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Number of Slots
              </label>
              <input
                name="nofSlots"
                type="text"
                id="numberOfslots"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Number of slots"
                defaultValue={oldProp.nofSlots}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="boughtSlots"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Bought Slots
              </label>
              <input
                name="nofBoughtSlots"
                type="text"
                id="boughtSlots"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Bought slots"
                defaultValue={oldProp.nofBoughtSlots}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="slotprice"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Slot Price
              </label>
              <input
                name="slotPrice"
                type="text"
                id="slotprice"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Bought slots"
                defaultValue={oldProp.slotPrice}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="investmentwindow"
                className="text-[#9BA2AE] text-sm w-full"
              >
                Investment Window
              </label>
              <input
                name="investmentWindow"
                type="text"
                id="investmentwindow"
                className="w-full bg-[#FAFAFA] h-[46px] outline-none focus:outline-none px-3"
                placeholder="Investment window"
                
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:col-span-2">
              <label htmlFor="image1" className="text-[#9BA2AE] text-sm w-full">
                Upload first image
                <AiOutlineFileImage />
              </label>
              <input
                type="file"
                id="image1"
                
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <Image src={oldProp.img} alt="" width={100} height={100} />
            </div>
            <div className="w-full md:col-span-2">
              <label htmlFor="image2" className="text-[#9BA2AE] text-sm w-full">
                Upload second image
                <AiOutlineFileImage />
              </label>
              <input
                type="file"
                id="image2"
                
                onChange={(e) => setPhoto2(e.target.files[0])}
              />
              <Image src={oldProp.imageB} alt="" width={100} height={100} />
            </div>
            <div className="w-full md:col-span-2">
              <label htmlFor="image3" className="text-[#9BA2AE] text-sm w-full">
                Upload third image
                <AiOutlineFileImage />
              </label>
              <input
                type="file"
                id="image3"
                
                onChange={(e) => setPhoto3(e.target.files[0])}
              />
              <Image src={oldProp.imageC} alt="" width={100} height={100} />
            </div>
            <div className="w-full md:col-span-2">
              <label htmlFor="image4" className="text-[#9BA2AE] text-sm w-full">
                Upload fourth image
                <AiOutlineFileImage />
              </label>
              <input
                type="file"
                id="image4"
                
                onChange={(e) => setPhoto4(e.target.files[0])}
              />
              <Image src={oldProp.imageD} alt="" width={100} height={100} />
            </div>
            <div className="w-full md:col-span-2">
              <label htmlFor="image5" className="text-[#9BA2AE] text-sm w-full">
                Upload fifth image
                <AiOutlineFileImage />
              </label>
              <input
                type="file"
                id="image5"
                onChange={(e) => setPhoto5(e.target.files[0])}
              />
              <Image src={oldProp.imageE} alt="" width={100} height={100} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className="bg-secondary text-white rounded-lg h-[50px] w-[110px] mr-10 text-sm">
            {loading ? 'Updating' : 'Update'}
          </button>
          <button className="bg-primary border border-secondary rounded-lg h-[50px] w-[110px] text-[#1F2937] text-sm">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
