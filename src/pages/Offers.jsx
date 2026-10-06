import { Link } from 'react-router-dom';
import { SAMPLE_OFFERS } from '../data/mockData';

export default function Offers() {
  return (
    <div className="bg-primary-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Special Offers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive packages and promotions designed to make your stay even more rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SAMPLE_OFFERS.map(offer => (
            <div key={offer.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
              <div className="h-56 relative">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded font-bold shadow">
                  {offer.discount}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold mb-3">{offer.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{offer.description}</p>
                <div className="text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Validity:</span> {offer.validity}
                </div>
                <Link to="/rooms" className="w-full text-center bg-primary-900 hover:bg-gold text-white font-medium py-3 px-4 rounded transition-colors mt-auto">
                  Book This Offer
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
