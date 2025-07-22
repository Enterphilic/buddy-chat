"use client";

import React from "react";
import AuthLayout from "../signup/AuthLayout";
import Image from "next/image";
import { useRouter } from "next/navigation"; 

const EmailConfirmed = () => {
  const router = useRouter(); 

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <AuthLayout />

      {/* Right Section */}
      <div className="flex flex-1 justify-center flex-col items-center gap-14 bg-[#f8fafc] px-6">
        <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
          <div className="bg-white border border-[#E0E0E0] rounded-lg p-8 w-full max-w-md text-center shadow-sm">
            <Image
              src="https://res.cloudinary.com/dbpcptmco/image/upload/v1753079793/envelope-circle-check-solid_1_fgvb3g.png"
              alt="Mail Icon"
              width={80}
              height={80}
              className="mx-auto"
            />

            <h2 className="text-xl font-semibold text-[#1D1D18] mb-3">
              Email verified!
            </h2>

            <p className="text-[#5B6871] text-sm mb-6 leading-relaxed">
              The verified email address will be associated with your account.
              Click on the button below to continue.
            </p>

            <button
              onClick={() => router.push("/login")}
              className="bg-[#FF8600] text-white font-semibold py-2 px-4 w-[45%] rounded-md hover:bg-orange-500 transition hover:cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmed;