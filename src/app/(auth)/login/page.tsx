"use client";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import React, { useState } from "react";
import Image from "next/image";
import AuthLayout from "../signup/AuthLayout";
import Link from "next/link";
import { loginUser } from "@/lib/api";
import { useRouter } from "next/navigation";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <AuthLayout />

      {/* Right Section */}
      <div className="flex flex-1 justify-center flex-col items-center gap-14 bg-[#f8fafc] px-6">
        <div className="bg-white border border-[#DDE2E4] rounded-lg shadow-xl w-full max-w-md p-8">
          <h2 className="text-[22px] font-mulish font-bold text-[#1D1D18]">
            Log in to your account
          </h2>

          <SignupForm />

          <p className="text-xs text-[#84919A] mt-6">
            By clicking the button above, you agree to our{" "}
            <span className="text-[#FF8600] font-medium">Terms of Service</span>{" "}
            and{" "}
            <span className="text-orange-500 font-medium">Privacy Policy</span>.
          </p>

          <p className="mt-6 text-xs text-[#5B6871]">
            Don’t have an account?{" "}
            <Link href="/signup">
              <span className="text-[#FF8600] font-semibold cursor-pointer">
                Register
              </span>
            </Link>
          </p>
        </div>

        <div className="w-[80%] flex items-center justify-end">
          <div className="bg-[#FF8600] w-[120px] px-3 py-3 rounded-3xl flex items-center justify-center gap-3">
            <p className="text-white text-[14px] font-semibold">Get Help</p>
            <Image
              src="https://res.cloudinary.com/dbpcptmco/image/upload/v1753050649/bi_chat_wa1hbb.png"
              alt="Check"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SignupForm = () => {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isComplete = form.email.trim() && form.password.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('here')

    if (!isComplete) return;

    setLoading(true);
    try {
      console.log('here 2')
      const res = await loginUser(form);
     console.log ("Login successful!");
     console.log('here 3')
      router.push("/portfolio");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5 mt-3" onSubmit={handleSubmit}>
      <p className="text-[13px] text-[#5B6871] font-[400]">
        Proceed to create account and setup your organization
      </p>

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-[#FF8600] rounded-md px-10 py-2 text-sm"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Image
          src="https://res.cloudinary.com/dbpcptmco/image/upload/v1753054511/Mail_1_uh9qze.png"
          alt="email_icon"
          width={18}
          height={18}
          className="absolute top-2.5 left-3"
        />
        <div className="absolute top-2 right-3 text-[#FF8600] text-[22px]">
          {form.email ? <FcCheckmark /> : <AiOutlineInfoCircle />}
        </div>
      </div>

      {/* Password Input */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          maxLength={15}
          className="w-full border border-[#FF8600] rounded-md px-10 py-2 text-sm"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Image
          src="https://res.cloudinary.com/dbpcptmco/image/upload/v1753053975/lock_open_oqpcbm.png"
          alt="lock"
          width={18}
          height={18}
          className="absolute top-2.5 left-3"
        />
        <button
          type="button"
          className="absolute top-2.5 right-3 text-[#FF8600] text-lg"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        <p className="absolute right-3 bottom-[-20px] text-xs text-[#84919A]">
          {form.password.length}/15
        </p>
      </div>

      <button
        type="submit"
        disabled={!isComplete || loading}
        className={`w-full py-2 mt-4 rounded-md font-semibold ${
          isComplete && !loading
            ? "bg-[#FF8600] text-white hover:bg-orange-600"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default Login;