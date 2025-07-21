"use client";

import AuthLayout from "../signup/AuthLayout";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  const handleSubmit = () => {
    if (otp.length !== 4) {
      toast.error("Please enter a 4-digit OTP code");
      return;
    }

    toast.success(`Entered OTP is ${otp}`);
    // Add your API logic here
  };

  const handleResend = () => {
    toast.info("OTP resent to seyi@zojatech.com");
    // Add resend logic here
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <AuthLayout />

      {/* Right Section */}
      <div className="flex flex-1 justify-center flex-col items-center gap-14 bg-[#f8fafc] px-6">
        <div className="bg-[white] p-8 rounded-2xl shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Verify your email
          </h2>
          <p className="text-sm text-gray-600">
            A four digit OTP code has been sent to your email
          </p>
          <p className="text-orange-500 font-medium mb-6">seyi@zojatech.com</p>

          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            inputType="tel"
            containerStyle="flex justify-center gap-4 mb-6"
            renderInput={(props) => (
              <input
                {...props}
                className="w-[60px] h-[60px] border-2 border-orange-400 rounded-md text-2xl text-center focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            )}
          />

          <button
            onClick={handleSubmit}
            disabled={otp.length !== 4}
            className="w-full bg-orange-500 text-white font-medium py-2 rounded-md hover:bg-orange-600 transition disabled:opacity-50 hover:cursor-pointer"
          >
            Confirm code
          </button>

          <p className="text-sm text-gray-600 mt-6">
            Didn’t get the mail?{" "}
            <button
              onClick={handleResend}
              className="text-orange-500 hover:underline font-medium"
            >
              Resend
            </button>
          </p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default VerifyEmail;
