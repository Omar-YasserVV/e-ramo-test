import Image from "next/image";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Taps } from "../../constants/taps";

export default function HeroSearchPanel() {
  return ( 
    <div className="absolute z-20 mx-auto w-[84%] left-[8%] -bottom-[86px] overflow-hidden rounded-[40px] bg-white shadow-2xl shadow-black/5">
      
      {/* Top Section (White Background) */}
      <div className="px-6 py-8 md:px-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
          {Taps.map((item) => {
            // Updated logic: if item.key matches "meetingRooms", apply active styles
            const isActive = item.key === "meetingRooms";

            return (
              <Button
                key={item.key}
                type="button"
                variant="ghost"
                className={`h-14 flex items-center justify-center gap-3 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FAFFF7] border border-primary/20 shadow-[0_1px_0_0_var(--primary)] text-black font-bold"
                    : "bg-[#F7F8F9] text-[#6B7280] font-semibold hover:bg-gray-100"
                }`}
              >
                <Image src={item.icon} alt={item.label} width={20} height={20} /> 
                <span className="text-[15px]">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Bottom Section (Cream Background) */}
      <div className="bg-[#FAF8F5] px-6 py-10 md:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          
          {/* Input Wrapper */}
          <div className="flex flex-1 items-center justify-between gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm border border-black/5">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <Search className="w-5 h-5 text-[#C2B5A8]" strokeWidth={2.5} />
              <input
                type="text"
                placeholder="Search Here..."
                className="w-full border-none bg-transparent text-[16px] font-medium text-black outline-none placeholder:text-[#C2B5A8]"
              />
            </div>

            {/* Search Nearby Button */}
            <button
              type="button"
              className="flex items-center gap-2 shrink-0 text-[14px] font-bold text-black hover:opacity-70 transition-opacity border-l pl-4 border-gray-100 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#C2B5A8]" />
              <span className="underline underline-offset-2">Search Nearby</span>
            </button>
          </div>

          {/* Main Search Button - Now using 'bg-primary' */}
          <Button className="h-[64px] min-w-[180px] bg-[#365327] hover:brightness-90 text-[18px] font-bold rounded-2xl transition-transform active:scale-95 hover:scale-102 text-white cursor-pointer">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}