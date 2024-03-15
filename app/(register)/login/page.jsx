'use client';
import React, { useEffect, useState } from 'react';
import './page.scss';
import Image from 'next/image';
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import google from "../../../public/Home-assets/goog.png";

const Register = () => {

  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { data: session } = useSession();
console.log(session)
  if (session?.user.role === "user") {
    return router?.push("/profile");
  }
  if (session?.user.role === "admin") {
    return router?.push("/admin");
  }
   const isValidEmail = (email) => {
     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
     return emailRegex.test(email);
   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
    });
        if (res?.error) {
          setError("Invalid email or password");
          if (res?.url) router.replace("/");
        } else {
          setError("");
        }
  };
  return (
    <>
      <section className="form">
        <h1>Real Estate Made Easy</h1>
        <h2>Sign In to explore options</h2>
        <h4>
          Don't have an account?{" "}
          <span>
            <Link href="/register"> Sign Up</Link>
          </span>
        </h4>
        <form onSubmit={handleSubmit} className="">
          <p>Email Address</p>
          <input type="email" required className="" />
          <p>password</p>
          <input type="password" required className="" />
          <h5>{error && error}</h5>
          <button className="">Sign In</button>
        </form>
        <div
          className="google"
          onClick={() => {
            signIn("google");
          }}
        >
          <Image src={google} alt="google" width={30} height={30} />
          <h5>Continue with Google</h5>
        </div>
        <h6>Forgot Password?</h6>
      </section>
    </>
  );
};

export default Register;
