import { useState } from 'react';
import { Search, Info } from 'lucide-react';

export default function MyBooking() {
  const [searchData, setSearchData] = useState({
    bookingId: '',
    emailOrPhone: ''
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Dummy check
      if (searchData.bookingId.startsWith('AGH')) {
        setResult({
          bookingId: searchData.bookingId,
          status: 'Confirmed',
          guestName: 'John Doe',
          room: 'Deluxe King Room',
          checkIn: '2024-05-10',
          checkOut: '2024-05-12',
          total: 10618
        });
      } else {
        setError('Booking not found. Please check your details and try again.');
      }
    }, 1000);
  };

  return (
    <div className="bg-primary-50 min-h-screen pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Find Your Booking</h1>
          <p className="text-gray-600">Enter your booking reference number and contact details to view or manage your reservation.</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Booking ID</label>
              <input 
                type="text" 
                required 
                placeholder="e.g. AGH-2024-12345"
                value={searchData.bookingId} 
                onChange={e => setSearchData({...searchData, bookingId: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold bg-gray-50 uppercase" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address or Phone Number</label>
              <input 
                type="text" 
                required 
                placeholder="Entered during booking"
                value={searchData.emailOrPhone} 
                onChange={e => setSearchData({...searchData, emailOrPhone: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-gold focus:border-gold bg-gray-50" 
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary-900 hover:bg-gold text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center disabled:opacity-70"
            >
              {loading ? 'Searching...' : <><Search size={18} className="mr-2" /> Find Booking</>}
            </button>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-md flex items-start border border-red-100">
              <Info size={20} className="mr-2 flex-shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}

          {result && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif font-bold">Booking Details</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  {result.status}
                </span>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-md border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <div><span className="text-gray-500 block">Booking ID</span><span className="font-semibold text-gray-900">{result.bookingId}</span></div>
                <div><span className="text-gray-500 block">Guest Name</span><span className="font-semibold text-gray-900">{result.guestName}</span></div>
                <div><span className="text-gray-500 block">Room</span><span className="font-semibold text-gray-900">{result.room}</span></div>
                <div><span className="text-gray-500 block">Dates</span><span className="font-semibold text-gray-900">{result.checkIn} to {result.checkOut}</span></div>
                <div><span className="text-gray-500 block">Total Amount</span><span className="font-semibold text-primary-900 text-lg">₹{result.total.toLocaleString()}</span></div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors text-sm font-medium">
                  Print Confirmation
                </button>
                <button className="px-4 py-2 text-red-600 border border-red-200 hover:bg-red-50 rounded transition-colors text-sm font-medium">
                  Request Cancellation
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
