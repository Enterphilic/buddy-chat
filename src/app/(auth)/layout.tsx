// app/layout.tsx
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen bg-gray-50 font-sans">{children}</div>;
};

export default Layout;
