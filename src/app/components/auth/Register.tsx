"use client";

import Image from "next/image";

const Register = () => {
  return (
    <main className="min-h-screen flex bg-[#F7F8FA]">
      {/* Left Side */}
      <section className="hidden lg:flex flex-col w-1/2 p-16 bg-white">
        <div className="flex flex-col items-start gap-16 mt-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="Buddy Logo"
              width={24}
              height={24}
            />
            <span className="text-2xl font-bold text-gray-900">Buddy</span>
          </div>

          {/* Feature list */}
          <ul className="space-y-10 text-gray-600 text-sm">
            <li className="flex items-start space-x-3">
              <Image
                src="/checkbox.png"
                alt="Check"
                width={20}
                height={20}
                className="mt-1"
              />
              <span>
                Track real-time overview of company’s financial performance.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Image
                src="/checkbox.png"
                alt="Check"
                width={20}
                height={20}
                className="mt-1"
              />
              <span>
                Track created projects budget against actual revenue and expenses.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Image
                src="/checkbox.png"
                alt="Check"
                width={20}
                height={20}
                className="mt-1"
              />
              <span>
                Highlighted reports on budget deficit and surplus, accounting dimensions,
                balance sheets and real-time sales margin estimation.
              </span>
            </li>
          </ul>

          {/* Footer - moved up */}
          <p className="text-xs text-gray-400 mt-10">
            © 2022 Revvex. All rights reserved
          </p>
        </div>
      </section>

      {/* Right Side */}
      <section className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-24">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative">
          {/* Logo Mobile View */}
          <div className="lg:hidden flex items-center space-x-2 mb-6">
            <Image
              src="/logo.jpg"
              alt="Buddy Logo"
              width={24}
              height={24}
            />
            <span className="text-2xl font-bold text-gray-900">Buddy</span>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Register your account
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Create your account using your email or sign up with Google.
          </p>

          {/* Sign up with Email */}
          <button className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-md mb-6 hover:bg-gray-50 transition">
            <Image
              src="/email.png"
              alt="Email"
              width={20}
              height={20}
            />
            <span className="text-sm text-gray-700 font-medium">
              Sign up with Email
            </span>
          </button>

          {/* Or Separator */}
          <div className="flex items-center gap-2 mb-6">
            <hr className="flex-1 border-gray-300" />
            <span className="text-xs text-gray-400 uppercase">or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Sign up with Google */}
          <button className="w-full flex items-center justify-center gap-3 py-2 border border-gray-300 rounded-md mb-6 hover:bg-gray-50 transition">
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            <span className="text-sm text-gray-700 font-medium">
              Sign up with Google
            </span>
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500 mt-4">
            By clicking the button above, you agree to our{" "}
            <span className="text-orange-500">Terms of Service</span> and{" "}
            <span className="text-orange-500">Privacy Policy</span>.
          </p>

          {/* Login link */}
          <p className="text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-orange-500 font-medium">Login</a>
          </p>

          {/* Get help link */}
          <div className="fixed bottom-6 right-6">
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full shadow-lg">
              Get Help
              <span className="text-white">💬</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;