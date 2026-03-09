import Image from "next/image";
import HeroSearchPanel from "./HeroSearch";

async function Hero() {

  return (
    <section className="container mx-auto w-full">
      <div className="relative">
        <div className="relative h-[320px] overflow-hidden rounded-[20px] md:h-[666px]">
          <Image
            src="/hero.jpg" 
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180.13deg, #3F3533 -2.35%, rgba(76, 63, 59, 0) 118.18%)"
            }}
          />
          <div className="absolute inset-x-0 top-10 z-10 px-6 text-center md:top-20">
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-[#F8E9D9] md:text-7xl">
                Office That Fit You
                Creative Way To Work            
            </h1>
          </div>
        </div>

        <HeroSearchPanel />
      </div>
    </section>
  );
}

export default Hero;