
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  inStock: boolean;
  rating: number;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Wilderness Explorer Tent",
    price: 129.99,
    description: "A spacious 4-person tent that's easy to set up and water-resistant. Perfect for family camping trips.",
    image: "/placeholder.svg",
    category: "tents",
    featured: true,
    inStock: true,
    rating: 4.7
  },
  {
    id: "p2",
    name: "Trailblazer Hiking Backpack",
    price: 79.99,
    description: "Durable 55L backpack with multiple compartments and padded shoulder straps for comfortable hiking.",
    image: "/placeholder.svg",
    category: "bags",
    featured: true,
    inStock: true,
    rating: 4.5
  },
  {
    id: "p3",
    name: "Campfire Cooking Set",
    price: 49.99,
    description: "Complete cooking set with pots, pans, and utensils designed for outdoor cooking.",
    image: "/placeholder.svg",
    category: "cooking",
    featured: true,
    inStock: true,
    rating: 4.3
  },
  {
    id: "p4",
    name: "Arctic Night Sleeping Bag",
    price: 89.99,
    description: "Warm, comfortable sleeping bag rated for temperatures down to -10°C.",
    image: "/placeholder.svg",
    category: "sleeping",
    featured: false,
    inStock: true,
    rating: 4.8
  },
  {
    id: "p5",
    name: "Aluminum Trekking Poles",
    price: 34.99,
    description: "Lightweight adjustable trekking poles with comfortable grips and wrist straps.",
    image: "/placeholder.svg",
    category: "accessories",
    featured: false,
    inStock: true,
    rating: 4.2
  },
  {
    id: "p6",
    name: "Portable Camping Chair",
    price: 29.99,
    description: "Foldable camping chair with cup holder and carry bag for easy transport.",
    image: "/placeholder.svg",
    category: "furniture",
    featured: false,
    inStock: true,
    rating: 4.0
  },
  {
    id: "p7",
    name: "LED Camping Lantern",
    price: 24.99,
    description: "Bright, long-lasting LED lantern with multiple brightness settings and 48-hour battery life.",
    image: "/placeholder.svg",
    category: "lighting",
    featured: true,
    inStock: true,
    rating: 4.6
  },
  {
    id: "p8",
    name: "Water Filtration System",
    price: 39.99,
    description: "Compact water filter that removes 99.9999% of bacteria and protozoa from water sources.",
    image: "/placeholder.svg",
    category: "hydration",
    featured: false,
    inStock: true,
    rating: 4.9
  },
  {
    id: "p9",
    name: "Insulated Food Container",
    price: 19.99,
    description: "Vacuum insulated container keeps food hot or cold for up to 12 hours.",
    image: "/placeholder.svg",
    category: "cooking",
    featured: false,
    inStock: true,
    rating: 4.1
  },
  {
    id: "p10",
    name: "Quick-Dry Camping Towel",
    price: 14.99,
    description: "Ultra-absorbent microfiber towel that dries 3x faster than regular towels.",
    image: "/placeholder.svg",
    category: "accessories",
    featured: false,
    inStock: true,
    rating: 4.4
  },
  {
    id: "p11",
    name: "Compact First Aid Kit",
    price: 22.99,
    description: "Comprehensive first aid kit in a waterproof case, perfect for outdoor adventures.",
    image: "/placeholder.svg",
    category: "safety",
    featured: false,
    inStock: true,
    rating: 4.7
  },
  {
    id: "p12",
    name: "Solar Power Bank",
    price: 44.99,
    description: "10000mAh power bank with solar charging capability for extended outdoor trips.",
    image: "/placeholder.svg",
    category: "electronics",
    featured: true,
    inStock: true,
    rating: 4.5
  }
];

export const categories = [
  { id: "tents", name: "Tents" },
  { id: "sleeping", name: "Sleeping Gear" },
  { id: "cooking", name: "Cooking & Food" },
  { id: "bags", name: "Backpacks & Bags" },
  { id: "furniture", name: "Camp Furniture" },
  { id: "lighting", name: "Lighting" },
  { id: "hydration", name: "Water & Hydration" },
  { id: "accessories", name: "Accessories" },
  { id: "safety", name: "Safety & First Aid" },
  { id: "electronics", name: "Electronics" }
];
