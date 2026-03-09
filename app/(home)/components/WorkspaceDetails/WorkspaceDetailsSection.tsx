"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const tabs = ["Shared Space", "Private Offices", "Meeting Rooms", "Virtual Offices"];

export default function WorkspaceDetailsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="container mx-auto py-24 px-4">
      {/* Container - added pt-20 to make room for the floating tab bar */}
      <div className="bg-[#FAF8F5] rounded-[40px] p-8 md:p-12 relative pt-24">
        
        {/* Navigation Tabs - Centered and absolute positioned to overlap the top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#365327] p-3 rounded-full inline-flex shadow-lg whitespace-nowrap overflow-x-auto max-w-[95%]">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`flex px-6 md:px-8 py-4 rounded-full text-sm font-semibold transition-all ${
                index === activeTab 
                  ? "bg-white text-[#3D522D] shadow-sm" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
              {tabs[activeTab]}
            </h2>
            <p className="text-xl font-medium text-[#1A1A1A]">(CO Work Space)</p>
            
            <p className="text-[#6B7280] leading-relaxed">
              Rent as many desks as you need in a dynamic, shared office space. 
              Business Address and storage options included.
            </p>

            <ul className="space-y-4">
              {["Reserved permanent workspace", "Book a desk by the hour", "Well-prepared place", "Hot desk as often as you need"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#6B7280]">
                  <span className="w-2 h-2 rounded-full bg-[#C2B5A8]" />
                  {item}
                </li>
              ))}
            </ul>
                <div className="w-1/4 m-0 p-0 h-[1px] bg-[#B49D97]"></div>
            <div className="pt-6   gap-4">
              <p className="text-[#1A1A1A] font-bold mb-4 text-lg">Price Starting From: 1250 EGP</p>
              <div className="flex gap-4">
                <Button className="h-14 px-10 bg-[#3D522D] hover:bg-[#2D3D21] rounded-xl font-bold">Book Now</Button>
                <Button variant="outline" className="h-14 px-10 border-[#D1D5DB] text-[#3D522D] rounded-xl font-bold">Learn More</Button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-[300px] md:h-[450px] w-full rounded-[30px] overflow-hidden shadow-xl">
            <Image 
              src="/office.jpg" 
              alt="Workspace"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}