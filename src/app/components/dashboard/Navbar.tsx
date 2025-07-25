'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Same navItems from Sidebar for consistency
const navItems = [
  { label: 'My Portfolio', href: '/portfolio' },
  { label: 'My Group', href: '/group' },
  { label: 'Messages', href: '/messages' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Pack', href: '/pack' },
  { label: 'Settings', href: '/settings' },
];

const Navbar = () => {
  const pathname = usePathname();

  // Find active page name based on pathname
  const activeItem = navItems.find((item) => pathname.includes(item.href));
  const activeTitle = activeItem ? activeItem.label : 'Dashboard';

  return (
    <div className="sticky top-0 z-40 bg-[#F7F8FA] px-4 py-6 flex flex-wrap items-center justify-between ">
      {/* Left: Dynamic Title */}
      <div className="hidden sm:block w-1/2 text-lg md:text-2xl font-bold text-gray-800">
        {activeTitle}
      </div>

      {/* Right: Icons and Search */}
      <div className="w-full sm:w-1/2 flex items-center justify-end gap-2 sm:flex-wrap">
        {/* Full Search Bar */}
        <div className="hidden sm:flex items-center bg-white px-3 py-2 rounded-xl shadow-sm border border-gray-200 flex-grow max-w-[400px]">
          <Image src="/search-icon.jpg" alt="Search" width={16} height={16} />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent focus:outline-none text-sm text-gray-700"
          />
        </div>

        {/* Mobile Search Icon */}
        <div className="sm:hidden w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-200">
          <Image src="/search-icon.jpg" alt="Search" width={18} height={18} />
        </div>

        {/* Plus Icon */}
        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-200 cursor-pointer">
          <Image src="/plus.jpg" alt="Add" width={20} height={20} />
        </div>

        {/* Notification Icon */}
        <div className="relative w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-200 cursor-pointer">
          <Image src="/notification-icon.jpg" alt="Notifications" width={20} height={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;