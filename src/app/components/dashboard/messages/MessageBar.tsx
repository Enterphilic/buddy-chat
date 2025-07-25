"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

type Contact = {
  id: number;
  name: string;
  message: string;
  time: string;
  unreadCount: number;
  avatar: string;
};

type MessageBarProps = {
  onSelectContact: (contact: Contact) => void;
};

const initialMessages: Contact[] = [
  {
    id: 1,
    name: "Lisa Roy",
    message: "Hi, are you Available Tomorrow?",
    time: "10:35 AM",
    unreadCount: 0,
    avatar: "/lisa.png",
  },
  {
    id: 2,
    name: "Jamie Taylor",
    message: "Nice One. Will Do it tomorrow",
    time: "10:35 AM",
    unreadCount: 3,
    avatar: "/jamie.png",
  },
  {
    id: 3,
    name: "Jason Roy",
    message: "That's Great. I am Looking forward to having a great start.",
    time: "10:35 AM",
    unreadCount: 0,
    avatar: "/jason.png",
  },
  {
    id: 4,
    name: "Amy Frost",
    message: "Hi, will you start working on the chat app right now?",
    time: "10:35 AM",
    unreadCount: 0,
    avatar: "/amy.png",
  },
  {
    id: 5,
    name: "Paul Wilson",
    message: "See you tomrrow champ",
    time: "10:35 AM",
    unreadCount: 0,
    avatar: "/paul.png",
  },
  {
    id: 6,
    name: "Ana Wiliams",
    message: "??",
    time: "10:35 AM",
    unreadCount: 1,
    avatar: "/ana.png",
  },
];

const MessageBar = ({ onSelectContact }: MessageBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filteredMessages = initialMessages.filter((msg) =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (msg: Contact) => {
    setSelectedId(msg.id);
    onSelectContact?.(msg);
  };

  return (
    <div className="w-full max-w-xs p-4 bg-[#F7F8FA] rounded-xl h-full">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <Image
          src="/david.png"
          alt="David Peters"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold text-gray-800">David Peters</p>
          <p className="text-xs text-gray-500">Senior Developer</p>
        </div>
        <button className="ml-auto text-gray-400 hover:text-gray-700">✎</button>
      </div>

      {/* Search Bar */}
      <div className="relative bg-white mb-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-sm"
        />
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 mb-3" />

      {/* Messages List */}
      <div className="space-y-2">
        {filteredMessages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => handleSelect(msg)}
            className={`flex items-start p-3 rounded-xl cursor-pointer transition-shadow ${
              msg.id === selectedId ? "bg-white shadow-sm" : "hover:bg-white"
            }`}
          >
            <Image
              src={msg.avatar}
              alt={msg.name}
              width={40}
              height={40}
              className="rounded-full object-cover mr-3"
            />

            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-yellow-700 text-sm truncate">
                  {msg.name}
                </span>
                <span className="text-xs text-gray-400">{msg.time}</span>
              </div>

              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-600 truncate w-[80%]">
                  {msg.message}
                </p>
                {msg.unreadCount > 0 ? (
                  <span className="flex items-center justify-center text-[10px] font-bold text-white bg-yellow-400 rounded-full w-5 h-5">
                    {msg.unreadCount}
                  </span>
                ) : (
                  <span className="flex items-center justify-center text-[11px] font-bold text-white bg-green-500 rounded-full w-5 h-5">
                    ✓
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-4" />
    </div>
  );
};

export default MessageBar;