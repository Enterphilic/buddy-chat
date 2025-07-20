'use client';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts';

const watchlist = [
  {
    symbol: 'AAPL',
    price: '$142.90',
    change: '+0.47%',
    up: true,
    data: [
      { value: 120 },
      { value: 124 },
      { value: 128 },
      { value: 127 },
      { value: 132 },
      { value: 142 },
    ],
  },
  {
    symbol: 'BPL',
    price: '$91.30',
    change: '-0.78%',
    up: false,
    data: [
      { value: 95 },
      { value: 94 },
      { value: 93 },
      { value: 92 },
      { value: 91 },
      { value: 90 },
    ],
  },
];

const Watchlist = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-gray-800 text-lg">Watchlist</h2>
        <button className="text-sm font-semibold text-orange-500">VIEW ALL</button>
      </div>

      {watchlist.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-gray-100 p-3 rounded-xl"
        >
          {/* Left - Info block */}
          <div className="space-y-1">
            <div className="flex items-center gap-1 font-bold text-gray-800">
              {item.symbol}
              {item.up ? (
                <FaArrowUp className="text-green-500" />
              ) : (
                <FaArrowDown className="text-red-500" />
              )}
            </div>
            <div className="text-sm text-gray-500">{item.price}</div>
            <div className={`text-sm ${item.up ? 'text-green-500' : 'text-red-500'}`}>
              {item.change}
            </div>
          </div>

          {/* Right - Chart */}
          <div className="w-32 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={item.data}>
                <Line
                  type="basis"
                  dataKey="value"
                  stroke={item.up ? '#22c55e' : '#ef4444'}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;