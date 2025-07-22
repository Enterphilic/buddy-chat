"use client";
import type { AxiosError } from "axios";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import React, { useState } from "react";
import Image from "next/image";
import AuthLayout from "./AuthLayout";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const [step, setStep] = useState<"choice" | "form">("choice");

  return (
    <div className="flex min-h-screen">
      <AuthLayout />
      <div className="flex flex-1 justify-center flex-col items-center gap-14 bg-[#f8fafc] px-6">
        <div className="bg-white border border-[#DDE2E4] rounded-lg shadow-xl w-full max-w-md p-8">
          <h2 className="text-[22px] font-mulish font-bold text-[#1D1D18]">
            Register your account
          </h2>

          {step === "choice" ? (
            <>
              <button
                onClick={() => setStep("form")}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 mb-4 hover:bg-gray-50 cursor-pointer mt-3"
              >
                <Image
                  src="https://res.cloudinary.com/dbpcptmco/image/upload/v1753014401/Mail_oi7v8a.png"
                  alt="email_logo"
                  width={20}
                  height={8}
                />
                <p className="text-[14px] font-[400] text-[#5B6871]">
                  Sign up with email
                </p>
              </button>

              <div className="text-center text-xs text-gray-500 mb-4">or</div>

              <button
                onClick={() => setStep("form")}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 mb-4 hover:bg-gray-50 cursor-pointer"
              >
                <Image
                  src="https://res.cloudinary.com/dbpcptmco/image/upload/v1753014401/gg_google_lpwwts.png"
                  alt="google_Logo"
                  width={20}
                  height={8}
                />
                <p className="text-[14px] font-[400] text-[#5B6871]">
                  Sign up with Google
                </p>
              </button>
            </>
          ) : (
            <SignupForm />
          )}

          <p className="text-xs text-[#84919A] mt-6">
            By clicking the button above, you agree to our{" "}
            <span className="text-[#FF8600] font-medium">Terms of Service</span>{" "}
            and{" "}
            <span className="text-orange-500 font-medium">Privacy Policy</span>.
          </p>

          <p className="mt-6 text-xs text-[#5B6871]">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-[#FF8600] font-semibold cursor-pointer">
                Login
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
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isComplete =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.password.trim() &&
    form.password.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isComplete) return;

    try {
      setLoading(true);
      const res = await axios.post("https://fe-test.zojapay.com/api/admin/register", {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.password,
      });

      if (res.data.success) {
        const token = res.data.data.token;
        localStorage.setItem("token", token);
        router.push("/verify-otp");
      } else {
        console.log("Signup failed");
      }
   } catch (err) {
  const error = err as AxiosError<{ message?: string }>;
  console.log(error.response?.data?.message || "Registration failed");
} finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5 mt-3" onSubmit={handleSubmit}>
      <p className="text-[13px] text-[#5B6871] font-[400]">
        Proceed to create account and setup your organization
      </p>

      <div className="flex gap-2">
        {["firstName", "lastName"].map((field) => (
          <div key={field} className="flex-1 relative">
            <input
              type="text"
              placeholder={field === "firstName" ? "First Name" : "Last Name"}
              className="w-full border border-[#FF8600] rounded-md px-10 py-2 text-sm"
              value={form[field as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required
            />
            <Image
              src="https://res.cloudinary.com/dbpcptmco/image/upload/v1753054441/Name_vkvln3.png"
              alt="icon"
              width={18}
              height={18}
              className="absolute top-2.5 left-3"
            />
          </div>
        ))}
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder="Work email"
          className="w-full border border-[#FF8600] rounded-md px-10 py-2 text-sm"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
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

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password (min 8 characters)"
          maxLength={15}
          className="w-full border border-[#FF8600] rounded-md px-10 py-2 text-sm"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
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
        {loading ? "Creating..." : "Create account"}
      </button>
    </form>
  );
};

export default SignupPage;