


'use client'
import MessageBar from '@/app/components/dashboard/messages/MessageBar'
import React from 'react'

const MessagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex m-4 p-4 gap-3 h-full rounded-xl bg-white">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 xl:w-1/4 bg-[#F7F8FA] rounded-xl w-[320px] border-r border-gray-200  ">
        <MessageBar/>
      </div>

      {/* Chat window */}
      <div className="flex-1 bg-[#F7F8FA] rounded-xl">
        {children}
      </div>
    </div>
  )
}

export default MessagesLayout