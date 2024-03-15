"use client";
import React, { useState } from "react";
import classes from "./list.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiOutlineClose, AiOutlineFileImage } from "react-icons/ai";

const Editor = ({ handleHideEditModal, property, id }) => {
  const CLOUD_NAME = "du6g27tfh";
  const UPLOAD_PRESET = "brickwire";
  const responseType = {
    error: "error",
    success: "success",
  };
  const [state, setState] = useState(property);
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
 console.log(state);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const imageUrl = await uploadImage();
      const imageUrl2 = await uploadImage2();
      const imageUrl3 = await uploadImage3();
      const imageUrl4 = await uploadImage4();
      const imageUrl5 = await uploadImage5();

      const res = await fetch(`/api/property/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
          ...state,
          img: imageUrl,
          imageB: imageUrl2,
          imageC: imageUrl3,
          imageD: imageUrl4,
          imageE: imageUrl5,
          currentOwner: session?.user.id,
        }),
      });

      if (!res.ok) {
        throw new Error("Error occurred");
      }

      const property = await res.json();

        router.push(`/details/${property.id}`);
        window.location.reload()
      setState((prev) => {});
    } catch (error) {
      console.log(error);
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
        <h2 className={classes.title}>Edit property</h2>
        <form onSubmit={handleSubmit}>
          {/* location */}
          <div className={classes.inputWrapper}>
            <label htmlFor="location">Location</label>
            <select
              name="location"
              onChange={handleChange}
              value={state?.location}
              id="location"
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
              value={state?.address}
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
              value={state?.apartmentName}
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
              value={state?.ongoing}
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
              value={state?.unit}
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
              value={state?.description1}
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
              value={state?.description2}
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
              value={state?.description3}
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
              value={state?.description4}
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
              value={state?.description5}
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
              value={state?.deliveryDate}
            />
          </div>
          {/* unit Type */}
          <div className={classes.inputWrapper}>
            <label htmlFor="unitType">Unit Type</label>
            <input
              name="unitType"
              onChange={handleChange}
              type="text"
              id="unitType"
              value={state?.unitType}
            />
          </div>
          {/* average property appreciation */}
          <div className={classes.inputWrapper}>
            <label htmlFor="averagePAppreciation">
              Average Property Appreciation
            </label>
            <input
              name="averagePAppreciation"
              onChange={handleChange}
              type="text"
              id="averagePAppreciation"
              value={state?.averagePAppreciation}
            />
          </div>
          {/* annual net yield */}
          <div className={classes.inputWrapper}>
            <label htmlFor="annualNetYield">Annual Net Yield</label>
            <input
              name="annualNetYield"
              onChange={handleChange}
              type="text"
              id="annualNetYield"
              value={state?.annualNetYield}
            />
          </div>
          {/* unit price */}
          <div className={classes.inputWrapper}>
            <label htmlFor="unitPrice">Unit Price</label>
            <input
              name="unitPrice"
              onChange={handleChange}
              type="text"
              id="unitPrice"
              value={state?.unitPrice}
            />
          </div>
          {/* payment plan */}
          <div className={classes.inputWrapper}>
            <label htmlFor="paymentPlan">Payment Plan</label>
            <input
              name="paymentPlan"
              onChange={handleChange}
              type="text"
              id="paymentPlan"
              value={state?.paymentPlan}
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
              value={state?.nofSlots}
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
              value={state?.nofBoughtSlots}
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
              value={state?.slotPrice}
            />
          </div>
          {/* Slot Cell Price */}
          <div className={classes.inputWrapper}>
            <label htmlFor="slotCellPrice">Slot Cell Price</label>
            <input
              name="slotCellPrice"
              onChange={handleChange}
              type="text"
              id="slotCellPrice"
              value={state?.slotCellPrice}
            />
          </div>
          {/* Annual Net Yield */}
          <div className={classes.inputWrapper}>
            <label htmlFor="annualNetYield">Annual Net Yield</label>
            <input
              name="annualNetYield"
              onChange={handleChange}
              type="text"
              id="annualNetYield"
              value={state?.annualNetYield}
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
              value={state?.investmentWindow}
            />
          </div>
          <div className={classes.inputWrapperImage}>
            {/* image 1 */}
            <label htmlFor="image">
              Upload First Image
              <AiOutlineFileImage />
            </label>
            <input
              onChange={(e) => setPhoto(e.target.files[0])}
              type="file"
              id="image"
              style={{ display: "none" }}
              // value={state?.img}
            />
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
              // value={state?.imageB}
            />
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
              // value={state?.imageC}
            />
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
              // value={state?.imageD}
            />
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
              // value={state?.imageE}
            />
          </div>
          <button className={classes.listBtn} type="submit">
            Upload Edit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Editor;
