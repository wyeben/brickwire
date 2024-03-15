import React from 'react'
import Link from 'next/link'
import './page.css'

export default function page() {
  return (
    <>
      <div className="pt-[10vh] flex">Property Uploaded Successfully</div>
      <Link href={"/admin/admin-main-090901028"}>
        <button className="w-[10vw] h-[50px] m-5 border-40 border-secondary text-secondary text-base">
          Admin Home
        </button>
      </Link>
      <Link href={"/admin/property-listing"}>
        <button className="w-[10vw] h-[50px] border-40 border-secondary text-secondary text-base">
          LIst More Property
        </button>
      </Link>
    </>
  );
}
