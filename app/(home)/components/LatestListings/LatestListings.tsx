import { listings } from "../../types/listingsCard";
import { ListingCard } from "./ListingCard";


export default function LatestListingsSection() {
 

  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-[42px] font-extrabold text-[#1A1A1A] tracking-tight">Latest Listings</h2>
          <p className="mt-2 text-lg font-medium text-[#6B7280]">Check our latest listings</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {listings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
        </div>
      </div>
    </section>
  );
}