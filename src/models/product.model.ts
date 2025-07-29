export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  images: string[];
  description: string[];
  details: { label: string; value: string }[];
  category: string;
  stock: number;
  reviewsCount: number;
  rating: number;
  color?: string;
  link?: string;
}
