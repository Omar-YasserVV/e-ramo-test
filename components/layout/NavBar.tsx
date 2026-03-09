"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/Navbar";

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4">
      <div className="container mx-auto flex h-16 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-30 w-30">
            <Image
              src="/logo.png"
              alt="Chair Location Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-11">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${
                link.active
                  ? "text-[#3D522D] font-semibold"
                  : "text-gray-500 hover:text-[#3D522D]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Language */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer group">
            <span className="text-sm font-semibold">العربية</span>

            <Image
              src="https://flagcdn.com/sa.svg"
              alt="Saudi Arabia"
              width={20}
              height={14}
              className="rounded-sm"
            />

            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-black transition" />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-[#3D522D] hover:bg-[#2d3d21] text-white py-6 px-6 rounded-md">
              Create Account
            </Button>

            <Button
              variant="outline"
              className="border-[#3D522D] text-[#3D522D] hover:bg-green-50 py-6 px-6 gap-2 rounded-md"
            >
              <User className="h-4 w-4" />
              Login
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;