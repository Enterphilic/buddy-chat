"use client";

import React from "react";
import AuthLayout from "../signup/AuthLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Define error type for fetch errors
type FetchError = {
  message: string;
};

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");

  // React.useEffect(() => {
  //   const storedEmail = localStorage.getItem("email");
  //   if (!storedEmail) {
  //     router.push("/signup");
  //   } else {
  //     setEmail(storedEmail);
  //   }
  // }, []);

  const handleResendOTP = async () => {
    try {
      const res = await fetch("https://fe-test.zojapay.com/api/admin/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to resend OTP");
      }

      alert("OTP resent successfully! Check your email.");
    } catch (error: unknown) {
      const err = error as FetchError;
      alert(err.message || "An error occurred.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <AuthLayout />

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
              Check your mailbox!
            </h2>

            <p className="text-[#5B6871] text-sm mb-6 leading-relaxed">
              We&apos;ve sent an email to{" "}
              <span className="font-semibold">{email}</span> with an OTP to
              confirm your account. Check your inbox to activate your account.
            </p>

            <button
              onClick={() => router.push("/verfied")}
              className="bg-[#FF8600] text-white font-semibold py-2 px-4 w-[45%] rounded-md hover:bg-orange-500 transition hover:cursor-pointer"
            >
              Confirm Email
            </button>

            <p className="text-sm text-[#5B6871] mt-4">
              Didn&apos;t get the mail?{" "}
              <button
                onClick={handleResendOTP}
                className="text-[#FF8600] font-medium hover:underline"
              >
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;