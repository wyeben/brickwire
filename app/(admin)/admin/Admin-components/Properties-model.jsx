'use client';
import Image from 'next/image';
import wavelight_apartment from '../../../../public/Profile-assets/wavelight-apartment.png';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';
// import { BsSearch } from 'react-icons/bs';

export default function Properties_model({ props }) {
  const [deactivateProp, setDeactivateProp] = useState(false);

  return (
    <Link href={`/admin/edit-property/${props?._id}`}>
      <div className="w-full p-5 border rounded-xl">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src={props?.img}
              className="w-[155px] h-[88px] mr-2"
              width={300}
              height={300}
            />
            <div>
              <h3 className="font-medium text-lg">{props?.apartmentName}</h3>
              <div className="p-1 bg-green-50 text-[#15803D] inline-block">
                <p className="text-xs">Active</p>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer relative"
            onClick={() => setDeactivateProp(true)}
          >
            <BsThreeDotsVertical />
            {deactivateProp && (
              <ul className="w-[102px] bg-[#D0D4DA] absolute -translate-x-[50%] left-[50%] z-20">
                <li className="h-[39px] border-b flex justify-center items-center">
                  Deactivate
                </li>
                <li className="h-[39px] flex justify-center items-center">
                  Activate
                </li>
              </ul>
            )}
          </div>
          {/* Wrapper to deselect the deactive model */}
          {deactivateProp && (
            <div
              className="w-full h-full bg-transparent absolute left-0 top-0 z-10"
              onClick={() => setDeactivateProp(false)}
            ></div>
          )}
        </div>
        {/* Owner added */}
        <div className="mt-10 grid grid-cols-2 gap-y-10">
          <div>
            <p className="text-xs">Owner</p>
            <h3 className="text-base">Brickwire Ltd.</h3>
          </div>
          <div>
            <p className="text-xs">Added By</p>
            <h3 className="text-base">{props?.author.email}</h3>
          </div>
          <div>
            <h3 className="text-secondary font-medium">{props?.slotPrice}</h3>
            <p>Per Slot</p>
          </div>
          <div>
            <p className="text-xs">Last Updated</p>
            <h3 className="text-base">{props?.updatedAt.split("T")[0]}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
