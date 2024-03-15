
"use client"


import Right_panel_dashboard from './Admin-components/Right-panel-dashboard';
import { getSession, useSession, signOut } from "next-auth/react";
import { notFound, redirect } from "next/navigation";

export default function page() {

  const { data: session } = useSession();
  console.log(session?.user.role)

  if (!session || session?.user.role !== "admin") {
    return notFound();
  }
  return (
    <section className='w-full bg-primary md:col-span-5 max-h-[100vh] md:grid md:grid-rows-[(10vh_1fr)]'>
      <Right_panel_dashboard />
    </section>
  );
}



