'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';


const navItems = [
  { label: 'My Portfolio', icon: '/portfolio.jpg', href: '/portfolio' },
  { label: 'My Group', icon: '/mygroup.jpg', href: '/group' },
  { label: 'Messages', icon: '/messages.jpg', href: '/messages' },
  { label: 'Analytics', icon: '/analytics.jpg', href: '/analytics' },
  { label: 'Pack', icon: '/park.jpg', href: '/pack' },
  { label: 'Settings', icon: '/setting.png', href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
   
    localStorage.removeItem('token');
  router.push('/login');
    
  }

  return (
    <div className="h-screen mt-4 bg-white px-2 py-4 flex flex-col justify-between shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start px-4 mb-3">
        <Image src="/logo.jpg" alt="logo" width={32} height={32} />
        <span className="hidden lg:block text-3xl font-semibold">Buddy</span>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-0">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.label} href={item.href} className="relative group">
              {isActive && (
                <div className="absolute -left-[10px] top-0 bottom-0 w-[3px] bg-[#FF8600] rounded-full" />
              )}
              <div
                className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-medium cursor-pointer transition
                ${
                  isActive
                    ? 'text-orange-500 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.04)]'
                    : 'text-gray-500 hover:bg-white hover:text-orange-500'
                }`}
              >
                <Image src={item.icon} alt={item.label} width={20} height={20} />
                <span className="hidden lg:inline">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Profile Card */}
      <div className="relative px-1 mt-10">
        <div className="bg-white shadow rounded-2xl pt-8 pb-4 px-3 flex flex-col items-center">
          <Image
            src="/avatar.png"
            alt="User"
            width={48}
            height={48}
            className="rounded-full absolute -top-6 shadow-md"
          />
          <div className="hidden lg:block text-sm font-semibold text-gray-800 mt-4">Theresa Milly</div>
          <div className="hidden lg:block text-xs text-gray-400 mb-3">Influencer</div>
          
          {/* Logout Button */}
          <div
            onClick={handleLogout}
            className="w-full bg-orange-100 text-orange-500 flex items-center justify-center gap-2 text-sm px-3 py-2 rounded-xl cursor-pointer hover:bg-orange-200 transition"
          >
            <Image src="/logout.png" alt="Logout" width={16} height={16} />
            <span className="hidden lg:inline">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}