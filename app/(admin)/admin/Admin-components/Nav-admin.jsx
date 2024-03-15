
import Image from 'next/image';
import Profile_img from '../../../../public/Profile-assets/blank-profile-pic.webp';
import { getSession, useSession, signOut } from "next-auth/react";

export default function Nav_admin() {
  const { data: session } = useSession();

  return (
    <nav className="h-[10vh] flex w-full items-center justify-between px-5 border-b border-gray-400">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div className="flex">
        <Image
          src={session?.user.image ?? Profile_img}
          alt="Profile image"
          width={40}
          height={40}
          className="w-[40px] mr-3"
        />
        <div>
          <p className="font-bold text-sm">
            {session?.user.name.split(" ")[0]}
          </p>
          <p className="text-sm">{session?.user.email}</p>
        </div>
      </div>
    </nav>
  );
}
