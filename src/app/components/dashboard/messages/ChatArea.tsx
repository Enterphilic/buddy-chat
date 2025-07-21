'use client';
import Image from 'next/image';
import { FaMicrophone, FaPaperPlane, FaPaperclip, FaSmile, FaImage } from 'react-icons/fa';

const ChatArea = () => {
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
      <div className="flex-1 overflow-y-auto py-4 space-y-4 text-sm">
        {/* Incoming */}
        <div className="flex items-start gap-2">
          <Image src="/lisa.png" alt="Lisa Roy" width={36} height={36} className="rounded-full" />
          <div className="bg-white px-4 py-2 rounded-xl max-w-sm shadow-sm">
            Hi David, have you got the project report pdf?
          </div>
        </div>

        {/* Outgoing */}
        <div className="flex items-start gap-2 justify-end">
          <div className="bg-orange-100 px-4 py-2 rounded-xl max-w-sm text-orange-500 shadow-sm">
            NO. I did not get it
          </div>
          <Image src="/david.png" alt="David" width={36} height={36} className="rounded-full" />
        </div>

        {/* Divider */}
        <div className="text-center text-xs text-gray-400 relative my-4">
          <hr className="border-t border-gray-300" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-[#FAFAFA] px-2">Yesterday</span>
        </div>

        {/* Incoming multiple */}
        <div className="flex items-start gap-2">
          <Image src="/lisa.png" alt="Lisa Roy" width={36} height={36} className="rounded-full" />
          <div className="flex flex-col gap-2">
            <div className="bg-white px-4 py-2 rounded-xl max-w-sm shadow-sm">
              Ok, I will just sent it here. Plz be sure to fill the details by today end of the day.
            </div>
            <div>
              <Image src="/report.png" alt="report" width={160} height={100} className="rounded-xl" />
              <div className="bg-white px-3 py-1 mt-1 rounded-md text-blue-500 w-fit shadow-sm">
                project_report.pdf
              </div>
            </div>
          </div>
        </div>

        {/* Outgoing long */}
        <div className="flex items-start gap-2 justify-end">
          <div className="bg-orange-100 px-4 py-2 rounded-xl max-w-sm text-orange-500 shadow-sm">
            Ok. Should I send it over email as well after filling the details.
          </div>
          <Image src="/david.png" alt="David" width={36} height={36} className="rounded-full" />
        </div>

        {/* Incoming */}
        <div className="flex items-start gap-2">
          <Image src="/lisa.png" alt="Lisa Roy" width={36} height={36} className="rounded-full" />
          <div className="bg-white px-4 py-2 rounded-xl max-w-sm shadow-sm">
            Ya. Ill be adding more team members to it.
          </div>
        </div>

        {/* Outgoing last */}
        <div className="flex items-start gap-2 justify-end">
          <div className="bg-orange-100 px-4 py-2 rounded-xl max-w-sm text-orange-500 shadow-sm">
            OK
          </div>
          <Image src="/david.png" alt="David" width={36} height={36} className="rounded-full" />
        </div>
      </div>

      {/* Input Section */}
      <div className="mt-auto bg-[#D9D9D9] rounded-xl p-4 " >
        <div className=" flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
          <FaMicrophone className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Write Something..."
            className="flex-1 outline-none text-sm placeholder-gray-400"
          />
          <div className="flex gap-2 items-center text-gray-500 ml-3">
            <FaImage />
            <FaPaperclip />
            <FaSmile />
          </div>
          <button className="ml-3 p-1 bg-orange-500 text-xl text-white rounded-full">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;