'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaMicrophone, FaPaperPlane, FaPaperclip, FaSmile, FaImage } from 'react-icons/fa';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  // Clear chat on mount (don't load from localStorage)
  useEffect(() => {
    setMessages([]);
  }, []);

  // Auto-scroll when messages update
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // Simulate auto-reply
    setTimeout(() => {
      const botReply: Message = {
        id: Date.now() + 1,
        text: "Thanks! We'll review it shortly.",
        sender: 'bot',
      };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-[#FAFAFA] rounded-xl px-6 py-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Image src="/lisa.png" alt="Lisa Roy" width={36} height={36} className="rounded-full" />
          <div className="text-sm font-semibold">Lisa Roy</div>
          <span className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <div className="flex gap-4 text-gray-400 text-xl">
          <span>🔍</span>
          <span>🤍</span>
          <span>🔔</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-4 space-y-4 text-sm" ref={chatRef}>
        {messages.map((msg) =>
          msg.sender === 'user' ? (
            <div key={msg.id} className="flex items-start gap-2 justify-end">
              <div className="bg-orange-100 px-4 py-2 rounded-xl max-w-sm text-orange-500 shadow-sm">
                {msg.text}
              </div>
              <Image src="/david.png" alt="David" width={36} height={36} className="rounded-full" />
            </div>
          ) : (
            <div key={msg.id} className="flex items-start gap-2">
              <Image src="/lisa.png" alt="Lisa Roy" width={36} height={36} className="rounded-full" />
              <div className="bg-white px-4 py-2 rounded-xl max-w-sm shadow-sm">
                {msg.text}
              </div>
            </div>
          )
        )}
      </div>

      {/* Input Section */}
      <div className="mt-auto bg-[#D9D9D9] rounded-xl p-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
          <FaMicrophone className="text-gray-400 mr-3" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write Something..."
            className="flex-1 outline-none text-sm placeholder-gray-400"
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <div className="flex gap-2 items-center text-gray-500 ml-3">
            <FaImage />
            <FaPaperclip />
            <FaSmile />
          </div>
          <button
            onClick={sendMessage}
            className="ml-3 p-1 bg-orange-500 text-xl text-white rounded-full"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;