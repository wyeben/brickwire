// import { getServerSession } from "next-auth/next";
// import { redirect } from "next/navigation";
import location_icon from "../../../../public/Home-assets/location-icon.png";
import house_icon from "../../../../public/Home-assets/house-icon.png";
import Image from "next/image";
import PropertyCard2 from "../../../components/PropertyCard2";
import { fetchProperty } from "@/lib/property.action";


export const metadata = {
  title: "Brickwire Properties | Ologolo Properties",
  description: "Brickwire Ologolo Properties",
};


export default async function page() {
  // const session = await getServerSession();
  // if (!session) {
  //   redirect("/login");
  // }
  
  let isLoading = true;
  const property = await fetchProperty();
  isLoading = false;
  if (isLoading) return <div className="loader"></div>;
  const haven = property.filter((dat) => {
    return dat.location === "ologolo"
  });

  return (
    <main className="pt-[10vh] px-5 md:px-[50px]">
      <div className="mt-20 w-full flex flex-col items-center">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl">
            Our Properties in Ologolo
          </h1>
          <hr className="border-secondary border-2 w-[100px] md:w-[250px] mt-1" />
        </div>
      </div>
      <div className="mt-20">
        <div className="mb-20">
          <h3 className="font-bold text-2xl md:text-4xl mb-3">
            Haven 2 Apartment
          </h3>
          <ul className="flex mb-10">
            <li className="pr-5 border-r border-secondary mr-5 flex items-center">
              <Image
                src={location_icon}
                alt="line img"
                width={100}
                height={100}
                className="w-[24px] mr-3"
              />
              <p className="text-sm">Ologolo, Lekki</p>
            </li>
            <li className="flex items-center">
              <Image
                src={house_icon}
                alt="line img"
                width={100}
                height={100}
                className="w-[24px] mr-3"
              />
              <p className="text-sm">Ongoing Project</p>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row">
            {haven.map((prop) => {
              return <PropertyCard2 key={prop._id} prop={prop} />;
            })}
          </div>
        </div>
        {/* <div className="mb-20">
          <h3 className="font-bold text-4xl mb-3">Veronica Court</h3>
          <ul className="flex mb-10">
            <li className="pr-5 border-r border-secondary mr-5 flex items-center">
              <Image
                src={location_icon}
                alt="line img"
                width={100}
                height={100}
                className="w-[24px] mr-3"
              />
              <p className="text-sm">Sea Gate Estate Lekki</p>
            </li>
            <li className="flex items-center">
              <Image
                src={house_icon}
                alt="line img"
                width={100}
                height={100}
                className="w-[24px] mr-3"
              />
              <p className="text-sm">Ongoing Project</p>
            </li>
          </ul>
          <div className="flex flex-col md:flex-row">
            <PropertyCard />
            <PropertyCard />
          </div>
        </div> */}
      </div>
    </main>
  );
}
