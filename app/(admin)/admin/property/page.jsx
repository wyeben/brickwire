"use client"
import { useEffect, useState } from 'react';
import Right_panel_property_list from '../Admin-components/Right_panel_property_list';
import { fetchClientProperty, fetchAdminProperty } from '@/lib/property.action';
import { getSession, useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
export default function page() {
  const [property, setProperty] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push("/login");
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/property')
      const data = await response.json();
      setProperty(data)
    };

    fetchData();
  }, []);

  console.log(property)
  if (!property) return <div className="loader"></div>;
  return <Right_panel_property_list property={property} />;
}






