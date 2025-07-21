'use client';

import React from 'react';
import StatsOverview from '@/app/components/dashboard/portfolio/StatsOverview';
import MonthlyBarChart from '@/app/components/dashboard/portfolio/MonthlyBarChart';
import TrendingPosts from '@/app/components/dashboard/portfolio/TrendingPosts';
import PotentialMembers from '@/app/components/dashboard/portfolio/PotentialMembers';
import Revenue from '@/app/components/dashboard/portfolio/Revenue';
import Watchlist from '@/app/components/dashboard/portfolio/Watchlist';
import TrendingNews from '@/app/components/dashboard/portfolio/TrendingNews';

const Page = () => {
  return (
    <div className="p-4 min-h-screen flex gap-4 flex-col md:flex-row items-stretch">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-2">
        <div className="flex justify-between flex-wrap">
          <StatsOverview />
        </div>
        <MonthlyBarChart />
        <TrendingPosts />
        <PotentialMembers />
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <Watchlist />
        <Revenue />
        <TrendingNews />
      </div>
    </div>
  );
};

export default Page;