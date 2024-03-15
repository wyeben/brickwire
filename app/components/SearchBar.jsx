"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        if (search) {
          return router.push(`/available-properties?q=` + search);
        }
      }, 300);

      return () => clearTimeout(delayDebounceFn);
    }, [search]);

    useEffect(() => {
      if (search === "") {
        router.push(`/available-properties`);
      }
    }, [search]);

  return (
    <>
      <div className="flex border border-gray-400 overflow-hidden w-[227px] h-[35px] mr-5 pl-3">
        <label htmlFor="search" className="flex items-center justify-center ">
          <BsSearch className="text-gray-600" />
        </label>
        <input
          id="text"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search properties"
          className="h-full w-full outline-none focus:outline-none px-3"
        />
      </div>
    </>
  );
}
