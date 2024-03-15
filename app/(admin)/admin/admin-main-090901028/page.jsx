import location_icon from "../../../../public/Home-assets/location-icon.png";
import house_icon from "../../../../public/Home-assets/house-icon.png";
import Image from "next/image";
import PropertyCard3 from "@/app/components/PropertyCard3";
import Link from "next/link";
import { fetchProperty } from "@/lib/property.action"
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";


export default async function page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  let isLoading = true;
  const property = await fetchProperty();
  isLoading = false;
  if (isLoading) return <div className="loader"></div>;

  return (
    <>
      {/* {data.unit} */}

      <main className="pt-[2vh] px-5 md:px-[50px]">
        <div className="mt-20 w-full flex flex-col items-center"></div>
        <div className="mt-20">
          <div className="mb-20">
            <ul className="flex mb-10">
              <li className="pr-5 border-r border-secondary mr-5 flex items-center">
                <p className="text-sm">Admin Properties</p>
              </li>
              <li className="flex items-center">
                <Link href={"/admin/property-listing"}>List Property</Link>
              </li>
            </ul>
            <div className="flex flex-col md:flex-row">
              {property.map((prop) => {
                return <PropertyCard3 key={prop._id} prop={prop} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
