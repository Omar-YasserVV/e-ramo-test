import Image from "next/image";
import { Button } from "@/components/ui/button";
import { features } from "../../constants/features";


export default function AboutSection() {
  return (
    <section className="container mx-auto py-16 lg:py-24 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
              About Chair Location
            </h2>
            <p className="text-[#717A76] leading-relaxed text-[17px]">
              &ldquo;Chair location&rdquo; is a website where you can search, find and
              reserve co-working space, including co-working offices, private
              offices, meeting rooms, and virtual offices near you. It shows
              the features and amenities this space can provide.
              Professionals and businesses can then compare all available
              co-working spaces to find one with the services and facilities
              that best suit their requirements.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#1A1A1A]">Why Chair Location</h3>
            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full text-[#365327] bg-[#E7CAAA]">
                    {feature.icon}
                  </div>
                  <span className="text-[16px] font-semibold text-[#365327]">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="py-7 px-10 bg-[#365327] hover:bg-primary/90 text-white font-bold rounded-xl text-lg">
              View Products
            </Button>
            <Button variant="outline" className="py-7 px-10 border-[#7C9A82] text-[#7C9A82] font-bold rounded-xl text-lg hover:bg-brand-light-green">
              Book Now
            </Button>
          </div>
        </div>

        {/* Right Image Grid Column */}
        <div className="grid grid-cols-1 gap-4">
          <div className="relative h-[195px] w-full overflow-hidden rounded-[24px]">
            <Image
              src="/About.jpg" // Replace with your image
              alt="People in meeting"
              fill
              className="object-cover"
            />
          </div>
            <div className="relative h-[195px] overflow-hidden rounded-[24px]">
              <Image
                src="/About2.jpg" // Replace with your image
                alt="Modern office"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[195px] overflow-hidden rounded-[24px] self-end">
              <Image
                src="/About3.png" // Replace with your image
                alt="Person working"
                fill
                className="object-cover"
              />
            </div>
        </div>
        
      </div>
    </section>
  );
}