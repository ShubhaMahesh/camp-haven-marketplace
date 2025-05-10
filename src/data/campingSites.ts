
export interface CampingSite {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  description: string;
  image: string;
  amenities: string[];
  activities: string[];
  rating: number;
  featured: boolean;
  availableSpots: number;
}

export const campingSites: CampingSite[] = [
  {
    id: "cs1",
    name: "Pine Valley Campground",
    location: "Colorado Springs, CO",
    pricePerNight: 35.99,
    description: "Nestled among tall pine trees, this campground offers scenic views of the mountains and access to hiking trails.",
    image: "/placeholder.svg",
    amenities: ["Potable water", "Fire rings", "Picnic tables", "Restrooms", "Shower facilities"],
    activities: ["Hiking", "Fishing", "Wildlife viewing", "Mountain biking"],
    rating: 4.8,
    featured: true,
    availableSpots: 15
  },
  {
    id: "cs2",
    name: "Lakeside Retreat",
    location: "Lake Tahoe, CA",
    pricePerNight: 42.99,
    description: "Camp right next to the crystal-clear waters of Lake Tahoe. Enjoy water activities and stunning sunsets.",
    image: "/placeholder.svg",
    amenities: ["Beach access", "Boat ramp", "Fire rings", "Picnic tables", "Restrooms"],
    activities: ["Swimming", "Boating", "Fishing", "Hiking"],
    rating: 4.7,
    featured: true,
    availableSpots: 10
  },
  {
    id: "cs3",
    name: "Desert Oasis Campground",
    location: "Moab, UT",
    pricePerNight: 29.99,
    description: "Experience the unique beauty of the desert with this campground near amazing red rock formations.",
    image: "/placeholder.svg",
    amenities: ["Shade shelters", "Potable water", "Picnic tables", "Restrooms"],
    activities: ["Rock climbing", "Stargazing", "Photography", "Hiking"],
    rating: 4.5,
    featured: false,
    availableSpots: 8
  },
  {
    id: "cs4",
    name: "Forest Haven",
    location: "Olympic National Park, WA",
    pricePerNight: 38.99,
    description: "Camp in the heart of the temperate rainforest with lush greenery and peaceful surroundings.",
    image: "/placeholder.svg",
    amenities: ["Fire rings", "Picnic tables", "Restrooms", "Bear-proof storage", "Ranger programs"],
    activities: ["Hiking", "Wildlife viewing", "Photography", "Ranger-led walks"],
    rating: 4.9,
    featured: true,
    availableSpots: 12
  },
  {
    id: "cs5",
    name: "Mountain Vista Campground",
    location: "Great Smoky Mountains, TN",
    pricePerNight: 32.99,
    description: "Enjoy panoramic views of the Smoky Mountains from this elevated campground with beautiful sunrise views.",
    image: "/placeholder.svg",
    amenities: ["Potable water", "Fire rings", "Picnic tables", "Restrooms", "Amphitheater"],
    activities: ["Hiking", "Bird watching", "Photography", "Stargazing"],
    rating: 4.6,
    featured: false,
    availableSpots: 20
  },
  {
    id: "cs6",
    name: "Coastal Breeze Campground",
    location: "Big Sur, CA",
    pricePerNight: 45.99,
    description: "Fall asleep to the sound of ocean waves at this coastal campground with incredible ocean views.",
    image: "/placeholder.svg",
    amenities: ["Beach access", "Fire rings", "Picnic tables", "Restrooms", "Shower facilities"],
    activities: ["Beachcombing", "Surfing", "Tide pooling", "Coastal hiking"],
    rating: 4.8,
    featured: false,
    availableSpots: 5
  },
  {
    id: "cs7",
    name: "Riverside Camping Park",
    location: "Yellowstone National Park, WY",
    pricePerNight: 39.99,
    description: "Camp alongside a gentle river with great fishing opportunities and wildlife sightings.",
    image: "/placeholder.svg",
    amenities: ["Fishing access", "Fire rings", "Picnic tables", "Restrooms", "Potable water"],
    activities: ["Fishing", "Rafting", "Wildlife viewing", "Hiking"],
    rating: 4.7,
    featured: true,
    availableSpots: 9
  },
  {
    id: "cs8",
    name: "Alpine Meadow Campground",
    location: "Rocky Mountain National Park, CO",
    pricePerNight: 41.99,
    description: "High-elevation campground surrounded by wildflower meadows and alpine scenery.",
    image: "/placeholder.svg",
    amenities: ["Fire rings", "Picnic tables", "Restrooms", "Bear-proof storage"],
    activities: ["Hiking", "Wildlife viewing", "Photography", "Wildflower walks"],
    rating: 4.9,
    featured: false,
    availableSpots: 7
  }
];

export const regions = [
  { id: "west", name: "West Coast" },
  { id: "mountain", name: "Mountain Region" },
  { id: "southwest", name: "Southwest" },
  { id: "midwest", name: "Midwest" },
  { id: "southeast", name: "Southeast" },
  { id: "northeast", name: "Northeast" }
];

export const amenities = [
  { id: "water", name: "Potable Water" },
  { id: "restrooms", name: "Restrooms" },
  { id: "showers", name: "Showers" },
  { id: "electricity", name: "Electricity" },
  { id: "wifi", name: "Wi-Fi" },
  { id: "picnic", name: "Picnic Tables" },
  { id: "fire", name: "Fire Rings" },
  { id: "pets", name: "Pet Friendly" }
];

export const activities = [
  { id: "hiking", name: "Hiking" },
  { id: "fishing", name: "Fishing" },
  { id: "swimming", name: "Swimming" },
  { id: "boating", name: "Boating" },
  { id: "wildlife", name: "Wildlife Viewing" },
  { id: "biking", name: "Biking" },
  { id: "climbing", name: "Rock Climbing" },
  { id: "stargazing", name: "Stargazing" }
];
