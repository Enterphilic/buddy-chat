'use client';

import Image from 'next/image';

const stats = [
  {
    label: 'Total Channels',
    value: 51,
    icon: '/icons/link.png',
    bg: 'bg-teal-100',
  },
  {
    label: 'New Members',
    value: 125,
    icon: '/icons/user-add.png',
    bg: 'bg-indigo-100',
  },
  {
    label: 'All Impressions',
    value: 789,
    icon: '/icons/trending-up.png',
    bg: 'bg-yellow-100',
  },
];

const StatsOverview = () => (
  <div className="w-full flex flex-wrap gap-4">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="flex items-center justify-between bg-white rounded-2xl shadow-sm p-4 flex-1 min-w-[180px]"
      >
        <div>
          <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg}`}>
          <Image src={stat.icon} alt={stat.label} width={28} height={28} />
        </div>
      </div>
    ))}
  </div>
);

export default StatsOverview;