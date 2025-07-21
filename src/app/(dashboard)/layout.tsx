import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Sidebar />
      </div>

      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] flex flex-col overflow-hidden">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}