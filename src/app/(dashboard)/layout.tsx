
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
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] " >
          <Sidebar/>
          </div> 
        {/* right */}
        <div className=" w-[86%] md:w-[92%] lg:-[84%] xl:-[86%] bg-[#F7F8FA] overflow-scroll ">
          <Navbar />
          {children}
        
        </div>
        </div>
  
  );
}