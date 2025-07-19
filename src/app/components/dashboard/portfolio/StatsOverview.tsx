'use client';

import { HiOutlineLink, HiOutlineUserAdd, HiOutlineTrendingUp } from "react-icons/hi";

const stats = [
  {
    label: "Total Channels",
    value: 51,
    icon: <HiOutlineLink className="text-teal-400 text-2xl" />,
    bg: "bg-teal-100",
  },
  {
    label: "New Members",
    value: 125,
    icon: <HiOutlineUserAdd className="text-indigo-400 text-2xl" />,
    bg: "bg-indigo-100",
  },
  {
    label: "All Impressions",
    value: 789,
    icon: <HiOutlineTrendingUp className="text-yellow-400 text-2xl" />,
    bg: "bg-yellow-100",
  },
];

const StatsOverview = () => (
  <div className="w-full flex gap-4">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="flex items-center justify-between bg-white rounded-2xl shadow-sm  p-4 flex-1 min-w-[130px]"
      >
        <div>
          <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg}`}>
          {stat.icon}
        </div>
      </div>
    ))}
  </div>
);

export default StatsOverview;