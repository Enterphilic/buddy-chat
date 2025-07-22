"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import AuthLayout from "../signup/AuthLayout";
// import { verifyOtp, resendOtp } from "@/lib/api";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   const storedEmail = localStorage.getItem("email");
  //   if (storedEmail) {
  //     setEmail(storedEmail);
  //   } else {
  //     toast.error("No email found. Please register again.");
  //     router.push("/signup");
  //   }
  // }, []);

  function handleChange(value: string) {
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  }

  function handleSubmit() {
    if (otp.length !== 4) {
      toast.error("Please enter a 4-digit OTP code");
      return;
    }

    const testOtp = "1234";

    if (otp === testOtp) {
      toast.success("OTP verified successfully (simulated)!");
      localStorage.setItem("token", "fake-jwt-token-123");
      router.push("/confirmed");
    } else {
      toast.error("Invalid OTP. Use 1234 for testing.");
    }
  }

  function handleResend() {
    toast.success(`Simulated: OTP resent to ${email}. Use 1234.`);
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      {/* <AuthLayout /> */}

      {/* Right Section */}
      <div className="flex flex-1 justify-center flex-col items-center gap-14 bg-[#f8fafc] px-6">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify your email</h2>
          <p className="text-sm text-gray-600">
            A four digit OTP code has been sent to your email
          </p>
          <p className="text-orange-500 font-medium mb-6">{email}</p>

          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            inputType="tel"
            containerStyle="flex justify-center gap-4 mb-6"
            renderInput={(props) => (
              <input
                {...props}
                className="w-[60px] h-[30px] border-2 border-orange-400 rounded-md text-2xl text-center focus:outline-none focus:ring-2 focus:ring-orange-500"
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

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default VerifyEmail;
