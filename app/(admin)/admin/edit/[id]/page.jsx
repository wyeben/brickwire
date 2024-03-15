"use client";
import React, { useEffect, useState } from "react";
import classes from "./list.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { createProperty } from "@/lib/property.action";
// import { types, countries } from "../searchModal/searchModalData";
import { AiOutlineClose, AiOutlineFileImage } from "react-icons/ai";
import { fetchSingleProperty } from "@/lib/property.action";
import { updateProperty } from "@/lib/property.action";
import Image from "next/image";

const page = ({ params }) => {
  const [oldProp, setOldProp] = useState([])
      useEffect(() => {
        async function fetchProperty() {
          const res = await fetch(`/api/property/${params.id}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          });
          const data = await res.json();
          setOldProp(data);
        }
        fetchProperty();
      }, [params.id]);
  console.log(oldProp)
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
  const { data: session } = useSession();
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
    const newProp = updateProperty(body, params.id)
    if (newProp) {
      router.push(`/admin/details/${params.id}`)
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
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>List property</h2>
        <form onSubmit={handleSubmit}>
          {/* location */}
          <div className={classes.inputWrapper}>
            <label htmlFor="location">Location</label>
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
          {/* Address */}
          <div className={classes.inputWrapper}>
            <label htmlFor="address">Property Address</label>
            <input
              name="address"
              onChange={handleChange}
              type="text"
              id="address"
              defaultValue={oldProp.address}
            />
          </div>
          {/* Apartment Name */}
          <div className={classes.inputWrapper}>
            <label htmlFor="apartmentName">Apartment Name</label>
            <input
              name="apartmentName"
              onChange={handleChange}
              type="text"
              id="apartmentName"
              defaultValue={oldProp.apartmentName}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label htmlFor="residentialFlatType">
              Flat Type (Residential){" "}
            </label>
            <input
              name="residentialFlatType"
              onChange={handleChange}
              type="text"
              id="residentialFlatType"
              defaultValue={oldProp.residentialFlatType}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label htmlFor="shortletFlatType">Flat Type (Shortlet) </label>
            <input
              name="shortletFlatType"
              onChange={handleChange}
              type="text"
              id="shortletFlatType"
              defaultValue={oldProp.shortletFlatType}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label htmlFor="roi">Total Annual ROI </label>
            <input
              name="roi"
              onChange={handleChange}
              type="text"
              id="roi"
              defaultValue={oldProp.roi}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label htmlFor="residentialFlatPrice">Residential FlatPrice </label>
            <input
              name="residentialFlatPrice"
              onChange={handleChange}
              type="text"
              id="residentialFlatPrice"
              defaultValue={oldProp.residentialFlatPrice}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label htmlFor="shortletFlatPrice">Shortlet FlatPrice </label>
            <input
              name="shortletFlatPrice"
              onChange={handleChange}
              type="text"
              id="shortletFlatPrice"
              defaultValue={oldProp.shortletFlatPrice}
            />
          </div>
          {/* Ongoing? */}
          <div className={classes.inputWrapper}>
            <label htmlFor="ongoing">Ongoing?</label>
            <input
              name="ongoing"
              onChange={handleChange}
              type="checkbox"
              id="ongoing"
              value="true"
              defaultValue={oldProp.ongoing}
            />
          </div>
          {/* unit name */}
          <div className={classes.inputWrapper}>
            <label htmlFor="unit">Unit Name</label>
            <input
              name="unit"
              onChange={handleChange}
              type="text"
              id="unit"
              defaultValue={oldProp.unit}
            />
          </div>
          {/* description 1 */}
          <div className={classes.inputWrapper}>
            <label htmlFor="description1">First Description</label>
            <input
              name="description1"
              onChange={handleChange}
              type="text"
              id="description1"
              defaultValue={oldProp.description1}
            />
          </div>
          {/* description 2 */}
          <div className={classes.inputWrapper}>
            <label htmlFor="description2">Second Description</label>
            <input
              name="description2"
              onChange={handleChange}
              type="text"
              id="description2"
              defaultValue={oldProp.description2}
            />
          </div>
          {/* description 3 */}
          <div className={classes.inputWrapper}>
            <label htmlFor="description3">Third Description</label>
            <input
              name="description3"
              onChange={handleChange}
              type="text"
              id="description3"
              defaultValue={oldProp.description3}
            />
          </div>
          {/* description 4 */}
          <div className={classes.inputWrapper}>
            <label htmlFor="description4">Fourth Description</label>
            <input
              name="description4"
              onChange={handleChange}
              type="text"
              id="description4"
              defaultValue={oldProp.description4}
            />
          </div>
          {/* description 5 */}
          <div className={classes.inputWrapper}>
            <label htmlFor="description5">Fifth Description</label>
            <input
              name="description5"
              onChange={handleChange}
              type="text"
              id="description5"
              defaultValue={oldProp.description5}
            />
          </div>
          {/* Delivery Date */}
          <div className={classes.inputWrapper}>
            <label htmlFor="deliveryDate">Delivery Date</label>
            <input
              name="deliveryDate"
              onChange={handleChange}
              type="text"
              id="deliveryDate"
              defaultValue={oldProp.deliveryDate}
            />
          </div>
          {/* unit Type */}
          {/* <div className={classes.inputWrapper}>
            <label htmlFor="unitType">Unit Type</label>
            <input
              name="unitType"
              onChange={handleChange}
              type="text"
              id="unitType"
              defaultValue={oldProp.unitType}
            />
          </div> */}
          {/* average property appreciation */}
          <div className={classes.inputWrapper}>
            <label htmlFor="averageAnnualAppreciation">
              Average Annual Appreciation
            </label>
            <input
              name="averageAnnualAppreciation"
              onChange={handleChange}
              type="text"
              id="averageAnnualAppreciation"
              defaultValue={oldProp.averageAnnualAppreciation}
            />
          </div>
          {/* annual net yield */}
          <div className={classes.inputWrapper}>
            <label htmlFor="annualNetYieldShortlet">Annual Net Yield (Shortlet)</label>
            <input
              name="annualNetYieldShortlet"
              onChange={handleChange}
              type="text"
              id="annualNetYieldShortlet"
              defaultValue={oldProp.annualNetYieldShortlet}
            />
          </div>
          {/* annual net yield2 */}
          <div className={classes.inputWrapper}>
            <label htmlFor="annualNetYieldResidential">Annual Net Yield (Residential) </label>
            <input
              name="annualNetYieldResidential"
              onChange={handleChange}
              type="text"
              id="annualNetYieldResidential"
              defaultValue={oldProp.annualNetYieldResidential}
            />
          </div>
          {/* unit price */}
          {/* <div className={classes.inputWrapper}>
            <label htmlFor="unitPrice">Unit Price</label>
            <input
              name="unitPrice"
              onChange={handleChange}
              type="text"
              id="unitPrice"
              defaultValue={oldProp.unitPrice}
            />
          </div> */}
          {/* payment plan */}
          <div className={classes.inputWrapper}>
            <label htmlFor="paymentPlan">Payment Plan</label>
            <input
              name="paymentPlan"
              onChange={handleChange}
              type="text"
              id="paymentPlan"
              defaultValue={oldProp.paymentPlan}
            />
          </div>
          {/* no of slots */}
          <div className={classes.inputWrapper}>
            <label htmlFor="nofSlots">Number of Slots</label>
            <input
              name="nofSlots"
              onChange={handleChange}
              type="text"
              id="nofSlots"
              defaultValue={oldProp.nofSlots}
            />
          </div>
          {/* Bought Slots */}
          <div className={classes.inputWrapper}>
            <label htmlFor="nofBoughtSlots">Bought Slots</label>
            <input
              name="nofBoughtSlots"
              onChange={handleChange}
              type="text"
              id="nofBoughtSlots"
              defaultValue={oldProp.nofBoughtSlots}
            />
          </div>
          {/* Slot Price */}
          <div className={classes.inputWrapper}>
            <label htmlFor="slotPrice">Slot Price</label>
            <input
              name="slotPrice"
              onChange={handleChange}
              type="text"
              id="slotPrice"
              defaultValue={oldProp.slotPrice}
            />
          </div>
          {/* Investment Window */}
          <div className={classes.inputWrapper}>
            <label htmlFor="investmentWindow">Investment Window</label>
            <input
              name="investmentWindow"
              onChange={handleChange}
              type="text"
              id="investmentWindow"
              defaultValue={oldProp.investmentWindow}
            />
          </div>
          <div className={classes.inputWrapperImage}>
            {/* image */}
            <label htmlFor="image">
              Upload First Image
              <AiOutlineFileImage />
            </label>
            <input
              onChange={(e) => setPhoto(e.target.files[0])}
              type="file"
              id="image"
              style={{ display: "none" }}
              defaultValue={oldProp.img}
            />
            <Image src={oldProp.img} alt="" width={100} height={100} />
          </div>
          <div className={classes.inputWrapperImage}>
            {/* image2 */}
            <label htmlFor="image2">
              Upload Second Image
              <AiOutlineFileImage />
            </label>
            <input
              onChange={(e) => setPhoto2(e.target.files[0])}
              type="file"
              id="image2"
              style={{ display: "none" }}
              defaultValue={oldProp.imageB}
            />
            <Image src={oldProp.imageB} alt="" width={100} height={100} />
          </div>
          <div className={classes.inputWrapperImage}>
            {/* image 3 */}
            <label htmlFor="image3">
              Upload third image
              <AiOutlineFileImage />
            </label>
            <input
              onChange={(e) => setPhoto3(e.target.files[0])}
              type="file"
              id="image3"
              style={{ display: "none" }}
              defaultValue={oldProp.imageC}
            />
            <Image src={oldProp.imageC} alt="" width={100} height={100} />
          </div>
          <div className={classes.inputWrapperImage}>
            {/* image 4 */}
            <label htmlFor="image4">
              Upload fourth image
              <AiOutlineFileImage />
            </label>
            <input
              onChange={(e) => setPhoto4(e.target.files[0])}
              type="file"
              id="image4"
              style={{ display: "none" }}
              defaultValue={oldProp.imageD}
            />
            <Image src={oldProp.imageD} alt="" width={100} height={100} />
          </div>
          <div className={classes.inputWrapperImage}>
            {/* image 5 */}
            <label htmlFor="image5">
              Upload fifth image
              <AiOutlineFileImage />
            </label>
            <input
              onChange={(e) => setPhoto5(e.target.files[0])}
              type="file"
              id="image5"
              style={{ display: "none" }}
              defaultValue={oldProp.imageE}
            />
            <Image src={oldProp.imageE} alt="" width={100} height={100} />
          </div>

          <button
            type="submit"
            className=" p-[10px] mt-[20px] h-[50px] border border-secondary text-secondary text-base"
            style={{
              minWidth: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loading ? <div className="loader2"></div> : "Update Property"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
