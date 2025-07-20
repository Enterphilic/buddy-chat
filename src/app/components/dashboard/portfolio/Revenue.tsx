'use client';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const revenues = [
  {
    platform: 'Recently Added Pages',
    amount: '$4,000',
    icon: <FaFacebookF className="text-white" />,
    bg: 'bg-blue-500',
  },
  {
    platform: 'Video Monetization',
    amount: '$2,120',
    icon: <FaInstagram className="text-white" />,
    bg: 'bg-pink-500',
  },
  {
    platform: 'Community Buildup',
    amount: '$1,752',
    icon: <FaLinkedinIn className="text-white" />,
    bg: 'bg-blue-700',
  },
];

const Revenue = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md space-y-4">
      <h2 className="font-bold text-gray-800 text-lg">Revenue</h2>
      <div className="space-y-3">
        {revenues.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center border border-[#f1f1f1] p-4 rounded-xl ">
            <div>
              <div className="font-semibold text-gray-800">{item.amount}</div>
              <div className="text-sm text-gray-500">{item.platform}</div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.bg}`}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Revenue;