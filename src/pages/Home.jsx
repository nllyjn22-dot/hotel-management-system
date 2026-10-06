import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star, MapPin } from 'lucide-react';
import BookingSearch from '../components/BookingSearch';
import { HOTEL_INFO, SAMPLE_ROOMS, AMENITIES, SAMPLE_OFFERS, SAMPLE_REVIEWS } from '../data/mockData';

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h3 className="text-gold font-medium tracking-widest uppercase text-sm mb-2">{subtitle}</h3>
    <h2 className="text-4xl font-serif font-bold text-gray-900">{title}</h2>
    <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
  </div>
);

export default function Home() {
  const featuredRooms = SAMPLE_ROOMS.slice(0, 3);
  const featuredOffers = SAMPLE_OFFERS.slice(0, 2);

  return (
    <div className="bg-primary-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-c6a4d14d2366?q=80&w=2000&auto=format&fit=crop)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg"
          >
            {HOTEL_INFO.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md"
          >
            {HOTEL_INFO.tagline}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/rooms" className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-md text-lg transition-colors font-medium">
              Explore Rooms
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Booking Search Component */}
      <BookingSearch />

      {/* Welcome Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Welcome To</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">{HOTEL_INFO.name}</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {HOTEL_INFO.description}
            </p>
            <Link to="/about" className="inline-flex items-center text-primary-900 font-semibold hover:text-gold transition-colors border-b-2 border-primary-900 hover:border-gold pb-1">
              Discover Our Story <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          <div className="flex-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop" 
              alt="Hotel Exterior" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Our Signature Rooms" subtitle="Luxurious Stays" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map(room => (
              <div key={room.id} className="bg-primary-50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.images[0]} 
                    alt={room.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded text-primary-900 font-bold font-serif">
                    ₹{room.price} <span className="text-xs font-sans font-normal text-gray-500">/ night</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-serif font-bold text-gray-900">{room.name}</h3>
                    <div className="flex items-center text-sm">
                      <Star size={16} className="text-gold fill-current mr-1" />
                      <span className="font-semibold">{room.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
                  <div className="flex justify-between items-center mt-6">
                    <Link to={`/rooms/${room.id}`} className="text-primary-800 font-medium hover:text-gold transition-colors">
                      View Details
                    </Link>
                    <Link to={`/booking?room=${room.id}`} className="bg-primary-900 hover:bg-gold text-white px-4 py-2 rounded transition-colors text-sm font-medium">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/rooms" className="inline-flex items-center text-primary-900 font-semibold hover:text-gold transition-colors text-lg border-b-2 border-primary-900 hover:border-gold pb-1">
              View All Rooms <ChevronRight size={24} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-gold font-medium tracking-widest uppercase text-sm mb-2">Exclusive Deals</h3>
            <h2 className="text-4xl font-serif font-bold text-white">Special Offers</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredOffers.map(offer => (
              <div key={offer.id} className="flex flex-col sm:flex-row bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/20">
                <div className="sm:w-2/5 h-48 sm:h-auto">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                  <div className="text-gold font-bold text-sm mb-1 uppercase tracking-wide">{offer.discount}</div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{offer.description}</p>
                  <Link to="/offers" className="inline-block mt-auto text-white border border-white/30 hover:border-gold hover:text-gold px-4 py-2 rounded text-sm transition-colors self-start">
                    Claim Offer
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
