'use client';
import Image from "next/image";

const news = [
  {
    title: 'Russia & Ukraine War',
    description: 'Marketing is evolving. Its chang...',
    img: '/ukraine.png',
  },
  {
    title: 'Elon Musk bought Twitter',
    description: 'Twitter is the most useful social pl...',
    img: '/elon.png',
  },
  {
    title: 'Fuel Crisis Everywhere',
    description: 'Due to covid situation in 2020 the...',
    img: '/fuel.png',
  },
];

const TrendingNews = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md space-y-4">
      <h2 className="font-bold text-gray-800 text-lg">Trending News</h2>
      <div className="space-y-3">
        {news.map((item, idx) => (
          <div key={idx} className="flex items-start border border-[#f1f1f1] p-4 rounded-xl">
            <Image
              src={item.img}
              alt={item.title}
              width={40}
              height={40}
              className="rounded-md object-cover mr-3"
            />
            <div>
              <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
              <div className="text-xs text-gray-500">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;