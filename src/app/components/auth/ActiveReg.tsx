'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ActiveReg = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const emailValid = /\S+@\S+\.\S+/.test(form.email);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // handle submit logic
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-white p-10 hidden lg:flex flex-col justify-between relative">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center text-white font-bold text-lg">B</div>
            <span className="text-xl font-semibold text-gray-700">Buddy</span>
          </div>

          <ul className="space-y-8">
            <li className="flex items-start">
              <Image src="/checkbox.png" alt="check" width={20} height={20} className="mr-4 mt-1" />
              <span className="text-sm text-gray-600 leading-snug">
                Track real-time overview of company’s financial performance.
              </span>
            </li>
            <li className="flex items-start">
              <Image src="/checkbox.png" alt="check" width={20} height={20} className="mr-4 mt-1" />
              <span className="text-sm text-gray-600 leading-snug">
                Track created project budgets against actual revenue and expenses.
              </span>
            </li>
            <li className="flex items-start">
              <Image src="/checkbox.png" alt="check" width={20} height={20} className="mr-4 mt-1" />
              <span className="text-sm text-gray-600 leading-snug">
                Highlighted reports on budget deficit/surplus, balance sheets and real-time sales margin estimations.
              </span>
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-400 mt-16">&copy; 2022 Revvex. All rights reserved</p>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-[#F7F8FA] flex flex-col justify-center items-center px-6 sm:px-10 py-16">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Register your account</h2>
          <p className="text-sm text-gray-500 mb-6">Proceed to create account and setup your organization</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-sm text-gray-500">First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInput}
                  placeholder="First Name"
                  className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-sm text-gray-500">Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleInput}
                  placeholder="Last Name"
                  className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-500">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  placeholder="Email"
                  className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400 ${
                    emailValid ? 'border-yellow-300' : 'border-gray-300'
                  }`}
                />
                {form.email && emailValid && (
                  <span className="absolute right-2 top-2 text-green-500 text-lg">&#10004;</span>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm text-gray-500">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleInput}
                placeholder="Password"
                maxLength={15}
                className="w-full border border-yellow-300 rounded-lg px-4 py-2 focus:outline-none focus:border-yellow-400"
              />
              <span className="text-xs text-gray-400 float-right mt-1">{form.password.length}/15</span>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 transition-colors text-white font-semibold rounded-lg py-2 mt-2"
            >
              Create account
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              By clicking the button above, you agree to our
              <span className="text-orange-400 ml-1">Terms of Service</span> and
              <span className="text-orange-400 ml-1">Privacy Policy</span>.
            </p>
          </form>

          <div className="text-sm text-gray-500 text-center mt-6">
            Already have an account?
            <span className="ml-1 text-orange-400 hover:underline cursor-pointer">Login</span>
          </div>
        </div>

        <button className="mt-8 bg-orange-400 text-white px-6 py-2 rounded-full text-sm hover:bg-orange-500 shadow-md">
          Get Help
        </button>
      </div>
    </div>
  );
};

export default ActiveReg;