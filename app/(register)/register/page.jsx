'use client';
import React, { useState } from 'react';
import styles from './page.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import google from "../../../public/Home-assets/goog.png"
import Google from 'next-auth/providers/google';
import { useSession, signIn } from "next-auth/react";

const Register = () => {

  const [error, setError] = useState("");

  const router = useRouter();

    const isValidEmail = (email) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const number = e.target[2].value;
    const password = e.target[3].value;
    const confirmPassword = e.target[4].value
   
        if (!isValidEmail(email)) {
          setError("Email is invalid");
          return;
    }
    
        if (!password || password.length < 8) {
          setError("Password must be above 8 characters");
          return;
        }
        
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          number,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (err) {
      setError("Error, try again.");
      console.log(err);
    }
  };

  return (
    <>
      {/* brickwire */}
      <section className="form">
        <div className="top">
          <h1>Create Your Real Estate Profile</h1>
          <h2>Sign Up and Stay Informed</h2>
        </div>
        <form onSubmit={handleSubmit} className="">
          <div className="input">
            <p>Fullname</p>
            <input type="text" required className="" />
          </div>
          <div className="input">
            <p>Email Address</p>
            <input type="email" required className="" />
          </div>
          <div className="input">
            <p>Phone Number</p>
            <input type="number" required className="" />
          </div>
          <div className="input">
            <p>Password</p>
            <input type="password" required className="" />
          </div>
          <div className="input">
            <p>Confirm Password</p>
            <input type="password" required className="" />
          </div>
          <h3 style={{
            color: 'red'
          }} className="text-[red]">{error && error}.</h3>
          <button>Create Account</button>
          {/* <button>Signup with Google</button> */}
          {/* <button>Signup with Facebook</button> */}
        </form>
        <div
          className="google"
          onClick={() => {
            signIn("google");
          }}
        >
          <Image src={google} alt="google" width={30} height={30} />
          <h4>Continue with Google</h4>
        </div>
        <h4>
          Already have an account?{" "}
          <span>
            <Link href="/login">Sign In</Link>
          </span>
        </h4>
      </section>
    </>
  );
};

export default Register;
