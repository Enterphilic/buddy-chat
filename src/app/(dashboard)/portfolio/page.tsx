import React from 'react';
import StatsOverview from '@/app/components/dashboard/portfolio/StatsOverview';
import MonthlyBarChart from '@/app/components/dashboard/portfolio/MonthlyBarChart';



const Page = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* left */}
       <div className="w-full lg:w-2/3 flex flex-col gap-4">
       <div className='flex gap-4 justify-between flex-wrap'>
         <StatsOverview/>
       </div>
   
    <div className="bg-white p-4 rounded shadow w-full h-[500px]">
      <MonthlyBarChart/>
    </div>
    <div className="bg-white p-4 rounded shadow">Box 3</div>
    <div className="bg-white p-4 rounded shadow">Box 4</div>
  </div>
      {/* right */}
      <div className='w-full lg:w-1/3 bg-blue'> r</div>
     
    </div>
  );
};

export default Page;