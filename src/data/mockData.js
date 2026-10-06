export const HOTEL_INFO = {
  name: "Aurora Grand Hotel",
  tagline: "Luxury. Comfort. Unforgettable Experiences.",
  description: "Experience the pinnacle of luxury at Aurora Grand Hotel. Nestled in the heart of the city, we offer world-class amenities, exquisite dining, and unparalleled service to make your stay truly memorable.",
  address: "123 Aurora Boulevard, Grand City, AC 45678",
  phone: "+1 (555) 123-4567",
  email: "reservations@auroragrand.com",
  whatsapp: "+15551234567",
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
  stats: {
    rooms: "50+",
    experience: "10+",
    guests: "25K+",
    rating: "4.8"
  }
};

export const SAMPLE_ROOMS = [
  {
    id: "r1",
    name: "Deluxe King Room",
    type: "Deluxe",
    description: "A spacious room with a king-size bed, elegant furnishings, and modern amenities for a comfortable stay.",
    price: 4499,
    originalPrice: 5000,
    capacity: 2,
    beds: "1 King Bed",
    size: "350 sq ft",
    amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Coffee Maker", "Room Service"],
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviews: 120,
    available: true
  },
  {
    id: "r2",
    name: "Premium Pool View",
    type: "Premium",
    description: "Enjoy stunning views of our infinity pool from your private balcony. Features luxurious bedding and enhanced amenities.",
    price: 5999,
    capacity: 2,
    beds: "1 King Bed",
    size: "400 sq ft",
    amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Coffee Maker", "Room Service", "Balcony", "Pool View"],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviews: 85,
    available: true
  },
  {
    id: "r3",
    name: "Executive Room",
    type: "Executive",
    description: "Designed for the modern business traveler, featuring a dedicated workspace, ergonomic chair, and access to the executive lounge.",
    price: 6499,
    capacity: 2,
    beds: "1 King Bed",
    size: "450 sq ft",
    amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Workspace", "Lounge Access", "Safe"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviews: 64,
    available: true
  },
  {
    id: "r4",
    name: "Family Suite",
    type: "Suite",
    description: "Perfect for families, offering two interconnected rooms, a comfortable living area, and special amenities for children.",
    price: 7999,
    originalPrice: 9000,
    capacity: 4,
    beds: "1 King Bed, 2 Twin Beds",
    size: "650 sq ft",
    amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Living Area", "Bathtub", "Room Service"],
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviews: 150,
    available: true
  },
  {
    id: "r5",
    name: "Luxury Suite",
    type: "Suite",
    description: "Experience ultimate luxury with a separate living room, panoramic city views, and premium personalized services.",
    price: 9999,
    capacity: 2,
    beds: "1 King Bed",
    size: "800 sq ft",
    amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Living Room", "Bathtub", "City View", "Butler Service"],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 5.0,
    reviews: 42,
    available: true
  },
  {
    id: "r6",
    name: "Presidential Suite",
    type: "Suite",
    description: "Our most exclusive accommodation. Features opulent decor, a private dining area, jacuzzi, and spectacular top-floor views.",
    price: 17999,
    capacity: 4,
    beds: "2 King Beds",
    size: "1200 sq ft",
    amenities: ["Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Private Dining", "Jacuzzi", "Panoramic View", "Butler Service", "Complimentary Airport Transfer"],
    images: [
      "https://images.unsplash.com/photo-1618773928120-16a4d087b415?q=80&w=800&auto=format&fit=crop"
    ],
    rating: 5.0,
    reviews: 18,
    available: true
  }
];

export const SAMPLE_REVIEWS = [
  {
    id: "rev1",
    guestName: "Sarah Johnson",
    location: "United Kingdom",
    rating: 5,
    date: "2023-10-15",
    text: "Absolutely stunning hotel. The staff were incredibly attentive, and the room was beyond luxurious. The pool area is a perfect place to relax.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: "rev2",
    guestName: "Michael Chen",
    location: "Singapore",
    rating: 4,
    date: "2023-11-02",
    text: "Great location and beautiful interior design. The breakfast buffet had an amazing selection. Will definitely stay here again on my next business trip.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: "rev3",
    guestName: "Emma & David",
    location: "Australia",
    rating: 5,
    date: "2023-12-20",
    text: "We spent our anniversary here and it was magical. The romantic package they organized for us was perfect. Thank you to the wonderful team!",
    avatar: "https://i.pravatar.cc/150?u=emma"
  }
];

export const SAMPLE_OFFERS = [
  {
    id: "o1",
    title: "Weekend Escape",
    description: "Book a stay for Friday and Saturday nights and enjoy a 20% discount on your entire booking.",
    discount: "20% OFF",
    validity: "Valid until Dec 31, 2024",
    image: "https://images.unsplash.com/photo-1543637005-4d639a4e16de?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "o2",
    title: "Romantic Couple Package",
    description: "Includes complimentary romantic room decoration, a bottle of sparkling wine, and a candlelit dinner for two.",
    discount: "Free Dinner + Decoration",
    validity: "Ongoing",
    image: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "o3",
    title: "Extended Stay",
    description: "Stay longer and save more! Book 4 consecutive nights and only pay for 3.",
    discount: "Stay 4 Nights, Pay 3",
    validity: "Valid until Nov 30, 2024",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop"
  }
];

export const AMENITIES = [
  { id: "a1", name: "Swimming Pool", icon: "Waves" },
  { id: "a2", name: "Spa & Wellness", icon: "Sparkles" },
  { id: "a3", name: "Fitness Center", icon: "Dumbbell" },
  { id: "a4", name: "Fine Dining", icon: "Utensils" },
  { id: "a5", name: "High-Speed WiFi", icon: "Wifi" },
  { id: "a6", name: "Secure Parking", icon: "Car" },
  { id: "a7", name: "24/7 Room Service", icon: "BellConcierge" },
  { id: "a8", name: "Airport Transfer", icon: "Plane" }
];
