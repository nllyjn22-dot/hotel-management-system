import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, CreditCard, Hotel, User } from 'lucide-react';
import { SAMPLE_ROOMS } from '../data/mockData';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const roomId = searchParams.get('room');
  
  const [room, setRoom] = useState(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    adults: parseInt(searchParams.get('adults') || '1'),
    rooms: parseInt(searchParams.get('rooms') || '1'),
    guestName: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    specialRequests: '',
    paymentMethod: 'hotel'
  });

  useEffect(() => {
    if (roomId) {
      const foundRoom = SAMPLE_ROOMS.find(r => r.id === roomId);
      if (foundRoom) setRoom(foundRoom);
    }
  }, [roomId]);

  if (!room) return <div className="pt-32 text-center pb-20">Loading...</div>;

  // Calculate pricing
  const checkInDate = new Date(bookingDetails.checkIn);
  const checkOutDate = new Date(bookingDetails.checkOut);
  const diffTime = Math.abs(checkOutDate - checkInDate);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; // fallback to 1 if invalid
  
  const basePrice = room.price * nights * bookingDetails.rooms;
  const taxes = basePrice * 0.18; // 18% tax example
  const total = basePrice + taxes;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const submitBooking = async () => {
    setLoading(true);
    // Simulate API call to Supabase
    setTimeout(() => {
      setLoading(false);
      // Generate dummy ID
      const bookingId = `AGH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      navigate('/booking-confirmation', { 
        state: { bookingId, room, bookingDetails, total, nights } 
      });
    }, 1500);
  };

  return (
    <div className="bg-primary-50 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gold -z-10 transition-all duration-500`} style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
            
            {[
              { num: 1, label: 'Guest Details', icon: User },
              { num: 2, label: 'Review', icon: CheckCircle2 },
              { num: 3, label: 'Payment', icon: CreditCard }
            ].map(s => (
              <div key={s.num} className="flex flex-col items-center bg-primary-50 px-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= s.num ? 'bg-gold text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <s.icon size={20} />
                </div>
                <span className={`text-sm font-medium ${step >= s.num ? 'text-primary-900' : 'text-gray-500'}`}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Form Area */}
          <div className="lg:w-2/3">
            {step === 1 && (
              <form onSubmit={handleNextStep} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold mb-6 border-b pb-4">Guest Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" name="guestName" required value={bookingDetails.guestName} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" required value={bookingDetails.email} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" name="phone" required value={bookingDetails.phone} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <input type="text" name="country" value={bookingDetails.country} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                    <input type="text" name="address" value={bookingDetails.address} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                    <textarea name="specialRequests" rows="3" value={bookingDetails.specialRequests} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50"></textarea>
                  </div>
                </div>
                
                <div className="flex justify-end pt-4">
                  <button type="submit" className="bg-primary-900 hover:bg-gold text-white font-medium py-3 px-8 rounded transition-colors">
                    Continue to Review
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold mb-6 border-b pb-4">Review Your Booking</h2>
                
                <div className="mb-8 p-4 bg-gray-50 rounded-md border border-gray-200">
                  <h3 className="font-semibold text-lg mb-4 text-primary-900">Guest Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-gray-500 block">Name</span><span className="font-medium">{bookingDetails.guestName}</span></div>
                    <div><span className="text-gray-500 block">Email</span><span className="font-medium">{bookingDetails.email}</span></div>
                    <div><span className="text-gray-500 block">Phone</span><span className="font-medium">{bookingDetails.phone}</span></div>
                    <div><span className="text-gray-500 block">Country</span><span className="font-medium">{bookingDetails.country || 'Not provided'}</span></div>
                  </div>
                </div>

                <div className="mb-8 p-4 bg-gray-50 rounded-md border border-gray-200">
                  <h3 className="font-semibold text-lg mb-4 text-primary-900">Stay Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div><span className="text-gray-500 block">Check In</span><span className="font-medium">{bookingDetails.checkIn}</span></div>
                    <div><span className="text-gray-500 block">Check Out</span><span className="font-medium">{bookingDetails.checkOut}</span></div>
                    <div><span className="text-gray-500 block">Guests</span><span className="font-medium">{bookingDetails.adults}</span></div>
                    <div><span className="text-gray-500 block">Rooms</span><span className="font-medium">{bookingDetails.rooms}</span></div>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500 block">Special Requests</span>
                    <span className="italic">{bookingDetails.specialRequests || 'None'}</span>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <button onClick={() => setStep(1)} className="text-primary-900 border border-primary-900 hover:bg-primary-50 font-medium py-3 px-8 rounded transition-colors">
                    Back
                  </button>
                  <button onClick={handleNextStep} className="bg-primary-900 hover:bg-gold text-white font-medium py-3 px-8 rounded transition-colors">
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold mb-6 border-b pb-4">Payment Selection</h2>
                
                <div className="space-y-4 mb-8">
                  <label className={`block p-4 border rounded-lg cursor-pointer transition-colors ${bookingDetails.paymentMethod === 'hotel' ? 'border-gold bg-gold/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="paymentMethod" value="hotel" checked={bookingDetails.paymentMethod === 'hotel'} onChange={handleInputChange} className="h-4 w-4 text-gold focus:ring-gold" />
                      <div className="ml-4 flex items-center">
                        <Hotel className="text-gray-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">Pay at Hotel</p>
                          <p className="text-sm text-gray-500">Pay when you arrive at the property</p>
                        </div>
                      </div>
                    </div>
                  </label>

                  <label className={`block p-4 border rounded-lg cursor-not-allowed opacity-60 ${bookingDetails.paymentMethod === 'card' ? 'border-gold bg-gold/5' : 'border-gray-200'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="paymentMethod" value="card" disabled className="h-4 w-4 text-gold focus:ring-gold" />
                      <div className="ml-4 flex items-center">
                        <CreditCard className="text-gray-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">Credit / Debit Card <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded ml-2">Coming Soon</span></p>
                          <p className="text-sm text-gray-500">Secure online payment</p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                
                <div className="flex justify-between pt-4 border-t">
                  <button onClick={() => setStep(2)} disabled={loading} className="text-primary-900 border border-primary-900 hover:bg-primary-50 font-medium py-3 px-8 rounded transition-colors disabled:opacity-50">
                    Back
                  </button>
                  <button onClick={submitBooking} disabled={loading} className="bg-primary-900 hover:bg-gold text-white font-medium py-3 px-8 rounded transition-colors flex items-center disabled:opacity-70">
                    {loading ? 'Processing...' : 'Confirm Booking'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-serif font-bold text-xl mb-4">Booking Summary</h3>
              
              <div className="flex gap-4 mb-6 pb-6 border-b">
                <img src={room.images[0]} alt={room.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h4 className="font-bold text-gray-900">{room.name}</h4>
                  <div className="text-sm text-gray-500 mt-1">{nights} Night(s)</div>
                  <div className="text-sm text-gray-500">{bookingDetails.rooms} Room(s)</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span>Room Charge</span>
                  <span>₹{basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (18%)</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-lg font-bold text-primary-900">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
