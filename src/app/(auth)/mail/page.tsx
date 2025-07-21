"use client";

import React from "react";
import AuthLayout from "../signup/AuthLayout";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <AuthLayout />

      {/* Right Section */}
      <div className="flex flex-1 justify-center flex-col items-center gap-14 bg-[#f8fafc] px-6">
        <div className="flex min-h-screen items-center justify-center bg-[#f8fafc] px-4">
          <div className="bg-white border border-[#E0E0E0] rounded-lg p-8 w-full max-w-md text-center shadow-sm">
            <Image
              src="https://res.cloudinary.com/dbpcptmco/image/upload/v1753078218/sent-email_1_yjinsl.png"
              alt="Mail Icon"
              width={100}
              height={100}
              className="mx-auto"
            />

            <h2 className="text-xl font-semibold text-[#1D1D18] mb-3">
              Check your mailbox !
            </h2>

            <p className="text-[#5B6871] text-sm mb-6 leading-relaxed">
              We&apos;ve sent an email to{" "}
              <span className="font-semibold">seyi@zojatech.com</span> with an
              OTP to confirm your account. Check your inbox to activate your
              account.
            </p>

            <button className="bg-[#FF8600] text-white font-semibold py-2 px-4 w-[45%] rounded-md hover:bg-orange-500 transition hover:cursor-pointer">
              Confirm Email
            </button>

            <p className="text-sm text-[#5B6871] mt-4">
              Didn&apos;t get the mail?{" "}
              <button className="text-[#FF8600] font-medium hover:underline">
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
