'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Chart data
const data = [
  { name: "JAN", value: 700 },
  { name: "FEB", value: 450 },
  { name: "MAR", value: 520 },
  { name: "APR", value: 470 },
  { name: "MAY", value: 620 },
  { name: "JUN", value: 830 },
  { name: "JUL", value: 650 },
  { name: "AUG", value: 560 },
  { name: "SEP", value: 410 },
  { name: "OCT", value: 690 },
  { name: "NOV", value: 340 },
  { name: "DEC", value: 600 },
];

const highlightIndex = 5; // JUN

const filters = [
  { label: "Robin Hood", color: "bg-orange-100 text-orange-600" },
  { label: "Almetrade", color: "bg-blue-100 text-blue-600" },
  { label: "Fidelity", color: "bg-green-100 text-green-600" },
  { label: "Charles", color: "bg-purple-100 text-purple-600" },
];

const MonthlyBarChart = () => (
  <div className="bg-white rounded-2xl shadow-md p-6 w-full mt-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
      <h2 className="text-xl font-bold text-gray-800">Overview</h2>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <span
            key={filter.label}
            className={`px-3 py-1 rounded-full text-sm font-medium ${filter.color}`}
          >
            {filter.label}
          </span>
        ))}
      </div>
    </div>

    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
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
        <Bar
          dataKey="value"
          radius={[4, 4, 0, 0]}
          fill="#FBBF24"
          barSize={28}
        >
          {data.map((entry, index) => (
            <cell
              key={`cell-${index}`}
              fill={index === highlightIndex ? "#F59E0B" : "#E5E7EB"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default MonthlyBarChart;
