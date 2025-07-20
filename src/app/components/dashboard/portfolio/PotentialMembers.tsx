"use client";

import Image from "next/image";

const members = [
  {
    name: "Wanda Parker",
    username: "@ashking1234",
    img: "/members/wanda.png",
    percent: "10.3%",
    color: "bg-yellow-100",
  },
  {
    name: "Terry Brown",
    username: "@ashking1234",
    img: "/members/terry.png",
    percent: "9.8%",
    color: "bg-yellow-100",
  },
  {
    name: "Lucas Holmes",
    username: "@ashking1234",
    img: "/members/lucas.png",
    percent: "6.5%",
    color: "bg-orange-100",
  },
  {
    name: "Janice Miller",
    username: "@ashking1234",
    img: "/members/janice.png",
    percent: "8.6%",
    color: "bg-cyan-200",
  },
  {
    name: "Terry Brown",
    username: "@ashking1234",
    img: "/members/brown.png",
    percent: "9.8%",
    color: "bg-orange-100",
  },
];

const PotentialMembers = () => (
  <div className="mt-8 bg-white rounded-xl shadow-md border border-gray-200 p-6">
    <h2 className="text-lg font-bold mb-6">Potential Members</h2>
    <div className="flex flex-wrap justify-between gap-4">
      {members.map((member, ix) => (
        <div
          className="flex flex-col items-center bg-white px-4 py-5 rounded-lg w-full sm:w-[48%] md:w-[30%] lg:w-[18%] border border-gray-100 shadow-sm"
          key={ix}
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden shadow-sm mb-3 ${member.color}`}
          >
            <Image
              src={member.img}
              alt={member.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>
          <div className="font-semibold text-sm text-gray-800 text-center">{member.name}</div>
          <div className="text-gray-400 text-xs text-center">{member.username}</div>
          <div className="flex items-center gap-1 mt-3">
            <svg width="20" height="20" fill="none">
              <path
                d="M4 14l4-4 4 4 4-8"
                stroke="#10b981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-semibold text-black text-sm">{member.percent}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PotentialMembers;