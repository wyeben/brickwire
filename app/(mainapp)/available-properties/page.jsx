import { fetchProperty, fetchSingleProperty, fetchSearchProperties } from "@/lib/property.action"
import PropertyCard2 from "@/app/components/PropertyCard2"
import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";

async function page({ searchParams }) {
  console.log(searchParams.q)
    let isLoading = true;
    const property = await fetchSearchProperties(searchParams.q)
    isLoading = false
  if (isLoading) return <div className="loader"></div>;
  if (!property || property.length === 0) {
    return (
      <>
        <div
          style={{
            paddingTop: "100px",
          }}
        >
          <SearchBar />
          <main className="px-5 md:px-[50px]">
            <div className="mt-10 w-full flex flex-col items-center"></div>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                margin: "0 auto",
                height: "50vh",
                fontSize: "50px",
                fontStyle: "italic"
              }}
            >
              <h1>No properties found...</h1>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <div style={{
      paddingTop: '100px'
    }}>
      <SearchBar />
      <main className="px-5 md:px-[50px]">
        <div className="mt-10 w-full flex flex-col items-center"></div>
        <div className="mt-20">
          <div className="mb-20">
            <div className="flex flex-col md:flex-row">
              {property?.map((prop) => {
                return <PropertyCard2 key={prop._id} prop={prop} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page
