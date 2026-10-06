import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, ChevronDown } from 'lucide-react';

export default function BookingSearch() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Validate dates
    if (searchData.checkIn && searchData.checkOut) {
      if (new Date(searchData.checkOut) <= new Date(searchData.checkIn)) {
        alert('Check-out date must be after check-in date');
        return;
      }
    }
    
    // Convert to query params and navigate to rooms page
    const params = new URLSearchParams(searchData);
    navigate(`/rooms?${params.toString()}`);
  };

  // Get today's date in YYYY-MM-DD for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mx-4 md:mx-auto max-w-5xl -mt-16 relative z-10">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        
        {/* Check-in */}
        <div className="flex-1 flex flex-col">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Check In</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gold" />
            </div>
            <input
              type="date"
              required
              min={today}
              value={searchData.checkIn}
              onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold sm:text-sm bg-gray-50"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex-1 flex flex-col">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Check Out</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gold" />
            </div>
            <input
              type="date"
              required
              min={searchData.checkIn || today}
              value={searchData.checkOut}
              onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold sm:text-sm bg-gray-50"
            />
          </div>
        </div>

        {/* Guests & Rooms */}
        <div className="flex-1 flex flex-col">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Guests & Rooms</label>
          <div className="relative flex space-x-2">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="h-5 w-5 text-gold" />
              </div>
              <select
                value={searchData.adults}
                onChange={(e) => setSearchData({...searchData, adults: parseInt(e.target.value)})}
                className="block w-full pl-10 pr-8 py-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold sm:text-sm bg-gray-50 appearance-none"
              >
                {[1, 2, 3, 4].map(n => <option key={`adult-${n}`} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>)}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex-1 flex flex-col justify-end">
          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-dark text-white font-medium py-3 px-4 rounded-md transition-colors"
          >
            Check Availability
          </button>
        </div>

      </form>
    </div>
  );
}
