
import Edit_property_listing_form from '../../Admin-components/Edit-property_listing_form';
import { fetchSingleProperty } from '@/lib/property.action';
import { getSession, useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";

export default async function page({ params }) {
  
  const property = await fetchSingleProperty(params.id)

  return (
    <div className='col-span-5 max-h-[100vh] overflow-hidden'>
      <Edit_property_listing_form oldProp={property} />
    </div>
  );
}


