"use client";

import Image from "next/image";

const SignUpPage = () => {
  return (
    <main className="min-h-screen flex bg-[#F7F8FA]">
      {/* Left */}
      <section className="hidden lg:flex flex-col w-1/2 p-16 bg-white">
        <div>
          {/* Logo */}
          <div className="mb-12">
            <div className="flex items-center space-x-2">
              <Image src="/logo.jpg" alt="Buddy Logo" width={24} height={24} />
              <span className="text-2xl font-bold text-gray-900">Buddy</span>
            </div>
          </div>

          {/* Feature list */}
          <ul className="space-y-10 text-gray-600 text-sm">
            <li className="flex items-start space-x-3">
              <Image
                src="/checkbox.png"
                alt="Check"
                width={24}
                height={24}
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
                width={24}
                height={24}
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
                width={24}
                height={24}
                className="mt-1"
              />
              <span>
                Highlighted reports on budget deficit and surplus, accounting dimensions,
                balance sheets and real-time sales margin estimation.
              </span>
            </li>
          </ul>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="pt-10">
          <p className="text-xs text-gray-400">© 2022 Revvex. All rights reserved</p>
        </div>
      </section>

      {/* Right */}
      <section className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-24">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Register your account</h2>
          <p className="text-sm text-gray-500 mb-6">
            Proceed to create account and setup your organization
          </p>

          <form className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 border rounded-md text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 border rounded-md text-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Work email"
              className="w-full px-4 py-2 border rounded-md text-sm"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md text-sm"
            />

            <button
              type="submit"
              disabled
              className="w-full py-2 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
            >
              Create account
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By clicking the button above, you agree to our{" "}
            <span className="text-orange-500">Terms of Service</span> and{" "}
            <span className="text-orange-500">Privacy Policy</span>.
          </p>

          <p className="text-sm mt-4 text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-orange-500 font-medium">Login</a>
          </p>
        </div>
      </section>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full shadow-lg">
          Get Help
          <span className="text-white">💬</span>
        </button>
      </div>
    </main>
  );
};

export default SignUpPage;