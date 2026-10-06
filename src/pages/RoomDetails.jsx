import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Users, Square, BedDouble, Check, Wifi, Wind, Tv, Coffee, Bath, Shield, ConciergeBell } from 'lucide-react';
import { SAMPLE_ROOMS, HOTEL_INFO } from '../data/mockData';

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = SAMPLE_ROOMS.find(r => r.id === id);
  
  const [activeImage, setActiveImage] = useState(room ? room.images[0] : '');
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    rooms: 1
  });

  if (!room) {
    return (
      <div className="pt-32 pb-16 text-center min-h-screen">
        <h1 className="text-3xl font-serif mb-4">Room Not Found</h1>
        <Link to="/rooms" className="text-gold hover:underline">Return to Rooms</Link>
      </div>
    );
  }

  const handleBooking = (e) => {
    e.preventDefault();
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert("Please select check-in and check-out dates");
      return;
    }
    const params = new URLSearchParams({
      room: room.id,
      ...bookingData
    });
    navigate(`/booking?${params.toString()}`);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-primary-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8">
          <Link to="/rooms" className="text-sm text-gray-500 hover:text-gold mb-4 inline-block">&larr; Back to Rooms</Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">{room.name}</h1>
              <div className="flex items-center text-sm text-gray-600">
                <Star size={16} className="text-gold fill-current mr-1" />
                <span className="font-semibold text-gray-900 mr-1">{room.rating}</span>
                <span>({room.reviews} reviews)</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-3xl font-bold text-primary-900 font-serif">₹{room.price}</div>
              <div className="text-sm text-gray-500">per night, excluding taxes</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Gallery */}
            <div className="mb-8">
              <div className="h-96 w-full rounded-lg overflow-hidden mb-4 relative bg-gray-200">
                <img src={activeImage} alt={room.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {room.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(img)}
                    className={`h-24 w-32 flex-shrink-0 rounded-md overflow-hidden border-2 ${activeImage === img ? 'border-gold' : 'border-transparent'}`}
                  >
                    <img src={img} alt={`${room.name} view ${i+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Room Overview</h2>
              <div className="flex flex-wrap gap-8 mb-8 border-b border-gray-100 pb-8">
                <div className="flex items-center text-gray-700">
                  <Users size={24} className="mr-3 text-gold" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Capacity</div>
                    <div className="font-medium">Up to {room.capacity} Guests</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <BedDouble size={24} className="mr-3 text-gold" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Bed Type</div>
                    <div className="font-medium">{room.beds}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-700">
                  <Square size={24} className="mr-3 text-gold" />
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Room Size</div>
                    <div className="font-medium">{room.size}</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-serif font-bold mb-6">Room Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <Check size={18} className="mr-2 text-gold" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Booking Box */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 sticky top-24">
              <h3 className="text-xl font-serif font-bold mb-6">Reserve this room</h3>
              
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check In</label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={bookingData.checkIn}
                    onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check Out</label>
                  <input
                    type="date"
                    required
                    min={bookingData.checkIn || today}
                    value={bookingData.checkOut}
                    onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50"
                  />
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select
                      value={bookingData.adults}
                      onChange={(e) => setBookingData({...bookingData, adults: parseInt(e.target.value)})}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50"
                    >
                      {[1, 2, 3, 4].filter(n => n <= room.capacity).map(n => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rooms</label>
                    <select
                      value={bookingData.rooms}
                      onChange={(e) => setBookingData({...bookingData, rooms: parseInt(e.target.value)})}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50"
                    >
                      {[1, 2, 3].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-6 pt-6">
                  <button 
                    type="submit"
                    className="w-full bg-primary-900 hover:bg-gold text-white font-bold py-3 px-4 rounded transition-colors"
                  >
                    Proceed to Booking
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Have questions about this room?</p>
                <a 
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hi ${HOTEL_INFO.name}, I would like to enquire about the ${room.name}.`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center text-[#25D366] font-medium hover:underline"
                >
                  Ask on WhatsApp
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
