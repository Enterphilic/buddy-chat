'use client';

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "JAN", long: 700, short: 500 },
  { name: "FEB", long: 450, short: 300 },
  { name: "MAR", long: 520, short: 400 },
  { name: "APR", long: 470, short: 350 },
  { name: "MAY", long: 620, short: 480 },
  { name: "JUN", long: 830, short: 600 },
  { name: "JUL", long: 650, short: 500 },
  { name: "AUG", long: 560, short: 420 },
  { name: "SEP", long: 410, short: 300 },
  { name: "OCT", long: 690, short: 550 },
  { name: "NOV", long: 340, short: 220 },
  { name: "DEC", long: 600, short: 430 },
];

const filters = [
  { label: "Robin Hood", activeIndex: 6 },
  { label: "Almetrade", activeIndex: 3 },
  { label: "Fidelity", activeIndex: 9 },
  { label: "Charles", activeIndex: 0 },
];

const MonthlyBarChart = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <h2 className="text-xl font-bold text-gray-800">Overview</h2>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1 rounded-2xl text-sm font-medium transition-colors duration-200 ${
                filter.label === activeFilter.label
                  ? "bg-[#FF8600] text-white"
                  : "bg-[#f6f6f6] text-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barCategoryGap={16}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            className="text-sm text-gray-500"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            className="text-sm text-gray-500"
          />
          <Tooltip
            contentStyle={{ fontSize: "14px", borderRadius: "8px" }}
            labelStyle={{ color: "#6B7280" }}
          />
          <Bar dataKey="long" radius={[4, 4, 0, 0]} barSize={14}>
            {data.map((_, index) => (
              <Cell
                key={`long-${index}`}
                fill={
                  index === activeFilter.activeIndex
                    ? "#FF8600"
                    : "#F1F1F2"
                }
              />
            ))}
          </Bar>
          <Bar dataKey="short" radius={[4, 4, 0, 0]} barSize={14}>
            {data.map((_, index) => (
              <Cell
                key={`short-${index}`}
                fill={
                  index === activeFilter.activeIndex
                    ? "#FFB800"
                    : "#E6E6E7"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;