import { useLocation, Link, Navigate } from 'react-router-dom';
import { CheckCircle, Printer, Download, Calendar, Users, MapPin } from 'lucide-react';
import { HOTEL_INFO } from '../data/mockData';

export default function BookingConfirmation() {
  const location = useLocation();
  const { bookingId, room, bookingDetails, total, nights } = location.state || {};

  if (!bookingId) {
    return <Navigate to="/" />;
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-primary-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 mb-8 print:shadow-none print:border-none">
          {/* Header */}
          <div className="bg-green-600 text-white p-8 text-center print:bg-white print:text-black print:border-b print:pb-4">
            <CheckCircle size={64} className="mx-auto mb-4 print:text-green-600" />
            <h1 className="text-3xl font-serif font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-green-100 print:text-gray-600">Thank you for choosing {HOTEL_INFO.name}. We look forward to your stay.</p>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-100">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Booking Reference ID</p>
                <p className="text-2xl font-bold font-mono text-primary-900">{bookingId}</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-4 print:hidden">
                <button onClick={handlePrint} className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors text-sm font-medium">
                  <Printer size={16} className="mr-2" /> Print
                </button>
                <button className="flex items-center px-4 py-2 bg-primary-900 hover:bg-gold text-white rounded transition-colors text-sm font-medium">
                  <Download size={16} className="mr-2" /> Download PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Hotel & Stay Details */}
              <div>
                <h3 className="text-xl font-serif font-bold mb-4 text-gray-900 border-b pb-2">Stay Details</h3>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-1">{HOTEL_INFO.name}</h4>
                  <div className="flex items-start text-sm text-gray-600 mb-4">
                    <MapPin size={16} className="mr-1 mt-0.5 flex-shrink-0" />
                    <span>{HOTEL_INFO.address}</span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">{room.name}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" /> {bookingDetails.checkIn}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar size={16} className="mr-2" /> {bookingDetails.checkOut}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={16} className="mr-2" /> {bookingDetails.adults} Guest(s)
                    </div>
                    <div className="text-gray-600">
                      {nights} Night(s)
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest & Payment */}
              <div>
                <h3 className="text-xl font-serif font-bold mb-4 text-gray-900 border-b pb-2">Guest Details</h3>
                <div className="text-sm space-y-2 mb-8">
                  <p><span className="text-gray-500 inline-block w-24">Name:</span> <span className="font-medium text-gray-900">{bookingDetails.guestName}</span></p>
                  <p><span className="text-gray-500 inline-block w-24">Email:</span> <span className="font-medium text-gray-900">{bookingDetails.email}</span></p>
                  <p><span className="text-gray-500 inline-block w-24">Phone:</span> <span className="font-medium text-gray-900">{bookingDetails.phone}</span></p>
                </div>

                <h3 className="text-xl font-serif font-bold mb-4 text-gray-900 border-b pb-2">Payment Summary</h3>
                <div className="text-sm space-y-2 mb-4 pb-4 border-b">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment Method</span>
                    <span className="font-medium text-gray-900">{bookingDetails.paymentMethod === 'hotel' ? 'Pay at Hotel' : 'Credit Card'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment Status</span>
                    <span className="font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Pending</span>
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

        <div className="text-center print:hidden">
          <Link to="/" className="text-primary-900 font-medium hover:text-gold transition-colors underline">
            Return to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
