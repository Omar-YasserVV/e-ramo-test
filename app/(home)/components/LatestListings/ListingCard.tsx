import Image from "next/image";
import { Star, Share2, Heart, Users, Calendar, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ListingCardProps } from "../../types/ListingCardProps";



export const ListingCard = ({
  status,
  category,
  title,
  rating,
  reviews,
  capacity,
  isOpen,
  price,
}: ListingCardProps) => {
  const isAvailable = status === "Available";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/office.jpg" // Replace with actual dynamic source
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
     <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180.13deg, #4A4F4F -2.35%, rgba(76, 63, 59, 0) 90.18%)"
            }}
          />   
        {/* Status Ribbon */}
        <div 
          className={`absolute top-4 -left-8 w-32 -rotate-45 py-1 text-center text-[10px] font-bold  shadow-md ${
            isAvailable ? "bg-[#A7BC9D] text-black" : "bg-[#AE5B5B] text-white"
          }`}
        >
          {status}
        </div>

        {/* Action Icons */}
        <div className="absolute top-4 right-4 flex gap-4">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 backdrop-blur-sm transition-colors hover:text-primary">
            <Share2 className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-600 backdrop-blur-sm transition-colors hover:text-red-500">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col p-5">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-[#F4F1ED] text-[#365327] font-semibold border-none hover:bg-[#FAF8F5]">
            {category}
          </Badge>
          <div className="flex items-center gap-1 text-[13px] font-semibold text-[#6B7280]">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating} ({reviews} Review)</span>
          </div>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-[#2A3B32]">{title}</h3>
        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-[#717A76]">
          Chair location is a website where you can search, find and reserve co-working space.
        </p>

        <div className="mt-6 flex flex-col justify-end gap-3">
          <div className="flex items-center gap-2 text-[13px] font-semibold text-[#6B7280]">
            <Users className="h-4 w-4 text-primary" />
            <span>{capacity} Per</span>
          </div>
          <div className={`flex items-center gap-2 text-[13px] font-semibold ${isOpen ? "text-[#3D522D]" : "text-red-500"}`}>
            <Calendar className="h-4 w-4" />
            <span>{isOpen ? "Open" : "Closed"}</span>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-auto flex items-center justify-between border-t border-gray-50 px-5 py-4">
        <p className="text-[14px] text-gray-500">
          Starts From : <span className="font-extrabold text-[#1A1A1A]">{price}SAR /HOUR</span>
        </p>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAFFF7] text-primary transition-colors hover:bg-primary hover:text-white">
          <ChevronRight className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};