export interface ListingCardProps {
  status: "Available" | "Not Available";
  category: string;
  title: string;
  rating: number;
  reviews: number;
  capacity: number;
  isOpen: boolean;
  price: number;
}