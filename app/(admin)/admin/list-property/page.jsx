import Property_listing from "../Admin-components/Property_listing";
import { getSession, useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";
export default function page() {
  // const { data: session } = useSession();
  // const router = useRouter();
  // if (!session) {
  //   router.push("/login");
  // }
  return (
    <div className='col-span-5 max-h-[100vh] overflow-hidden'>
      <Property_listing />
    </div>
  );
}
