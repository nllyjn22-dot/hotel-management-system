import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Users, Square, BedDouble, Check } from 'lucide-react';
import { SAMPLE_ROOMS, AMENITIES } from '../data/mockData';

export default function Rooms() {
  const [searchParams] = useSearchParams();
  const [rooms, setRooms] = useState(SAMPLE_ROOMS);
  const [sortBy, setSortBy] = useState('recommended');

  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const adults = parseInt(searchParams.get('adults') || '1');

  useEffect(() => {
    // Basic frontend filtering based on search params
    let filtered = [...SAMPLE_ROOMS];
    if (adults) {
      filtered = filtered.filter(room => room.capacity >= adults);
    }
    
    // Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setRooms(filtered);
  }, [searchParams, adults, sortBy]);

  return (
    <div className="bg-primary-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Rooms & Suites</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our beautifully appointed rooms and suites, designed to provide the ultimate comfort and luxury during your stay.
          </p>
          {checkIn && checkOut && (
            <div className="mt-6 inline-block bg-white px-6 py-2 rounded-full shadow-sm text-sm font-medium text-primary-900">
              Showing availability for: <span className="text-gold">{checkIn}</span> to <span className="text-gold">{checkOut}</span> • {adults} Guest(s)
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-serif font-bold text-xl mb-4">Sort By</h3>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-1 focus:ring-gold"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Guest Rating</option>
              </select>

              <h3 className="font-serif font-bold text-xl mb-4">Filter By</h3>
              {/* Example Filters (frontend only for now) */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-gray-700">Room Type</h4>
                  <div className="space-y-2">
                    {['Deluxe', 'Premium', 'Executive', 'Suite'].map(type => (
                      <label key={type} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded text-gold focus:ring-gold" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Room List */}
          <div className="flex-1 space-y-6">
            {rooms.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No rooms found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or dates.</p>
              </div>
            ) : (
              rooms.map(room => (
                <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row border border-gray-100">
                  <div className="md:w-2/5 h-64 md:h-auto relative">
                    <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-2xl font-serif font-bold text-gray-900">{room.name}</h2>
                      <div className="text-right">
                        {room.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">₹{room.originalPrice}</div>
                        )}
                        <div className="text-2xl font-bold text-primary-900 font-serif">₹{room.price}</div>
                        <div className="text-xs text-gray-500">per night</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm mb-4">
                      <Star size={16} className="text-gold fill-current mr-1" />
                      <span className="font-semibold mr-1">{room.rating}</span>
                      <span className="text-gray-500">({room.reviews} reviews)</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                      <div className="flex items-center"><Users size={16} className="mr-1 text-gold" /> Up to {room.capacity}</div>
                      <div className="flex items-center"><BedDouble size={16} className="mr-1 text-gold" /> {room.beds}</div>
                      <div className="flex items-center"><Square size={16} className="mr-1 text-gold" /> {room.size}</div>
                    </div>

                    <div className="mt-auto flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 pt-4 gap-4">
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.slice(0, 3).map((amenity, i) => (
                          <span key={i} className="text-xs bg-primary-50 text-primary-800 px-2 py-1 rounded border border-primary-100 flex items-center">
                            <Check size={12} className="mr-1" /> {amenity}
                          </span>
                        ))}
                        {room.amenities.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">+{room.amenities.length - 3} more</span>
                        )}
                      </div>
                      
                      <div className="flex space-x-3 w-full sm:w-auto">
                        <Link to={`/rooms/${room.id}`} className="flex-1 sm:flex-none text-center px-4 py-2 border border-primary-900 text-primary-900 rounded hover:bg-primary-50 transition-colors text-sm font-medium">
                          Details
                        </Link>
                        <Link 
                          to={`/booking?room=${room.id}${checkIn ? `&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}` : ''}`} 
                          className="flex-1 sm:flex-none text-center px-6 py-2 bg-primary-900 text-white rounded hover:bg-gold transition-colors text-sm font-medium"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
