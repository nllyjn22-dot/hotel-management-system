import { HOTEL_INFO } from '../data/mockData';
import { Shield, Star, Users, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-primary-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the heritage, passion, and dedication that makes {HOTEL_INFO.name} a premier destination for travelers worldwide.
          </p>
        </div>

        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1542314831-c6a4d14d2366?q=80&w=1000&auto=format&fit=crop" 
              alt="Hotel Building" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-gray-900">A Legacy of Luxury</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded over a decade ago, {HOTEL_INFO.name} was built on a simple premise: to provide an oasis of elegance and comfort in the heart of the city. We believe that true luxury is not just about opulent surroundings, but about intuitive, personalized service that anticipates your every need.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From our carefully curated room designs to our award-winning culinary experiences, every detail has been thoughtfully considered to ensure your stay with us is nothing short of extraordinary.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <div className="text-3xl font-serif font-bold text-gold mb-1">{HOTEL_INFO.stats.rooms}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Luxury Rooms</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-gold mb-1">{HOTEL_INFO.stats.guests}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Happy Guests</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-gold mb-1">{HOTEL_INFO.stats.experience}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-gold mb-1">{HOTEL_INFO.stats.rating} / 5</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-lg shadow-sm p-12 mb-16 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Why Choose Us</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Prime Location</h3>
              <p className="text-gray-600">Situated in the heart of the city, offering easy access to major attractions and business districts.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">World-Class Service</h3>
              <p className="text-gray-600">Our dedicated staff is committed to providing impeccable service to make your stay memorable.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">State-of-the-art security systems and protocols ensure your peace of mind during your visit.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
