'use client'
import { useEffect } from "react";

// components/SignupLeftSection.tsx
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const AuthLayout = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // router.push("/verify-otp");
    }
  }, [])

  return (
    <div className="hidden lg:flex w-1/2 flex-col justify-between items-start px-20 py-10 bg-[white]">
      <Image
        src="https://res.cloudinary.com/dbpcptmco/image/upload/v1752932996/Group_37619_er8rzy.png"
        alt="Buddy Logo"
        width={100}
        height={40}
      />

      <div className="space-y-6">
        <FeatureItem text="Track real-time overview of company’s financial performance." />
        <FeatureItem text="Track created projects budget against actual revenue and expenses." />
        <FeatureItem text="Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation." />
      </div>

      <p className="text-xs text-[#84919A] font-[400]">
        © 2022 Revex. All rights reserved
      </p>
    </div>
  );
};

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center justify-start gap-2 h-[fit]">
    <Image
      src="https://res.cloudinary.com/dbpcptmco/image/upload/v1752932996/Checkbox_yzahyj.png"
      alt="Check"
      width={20}
      height={20}
    />
    <p className="text-[15px] font-[400] text-[#5B6871] leading-relaxed ">
      {text}
    </p>
  </div>
);

export default AuthLayout;
