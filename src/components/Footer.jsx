import { Link } from 'react-router-dom';
import { HOTEL_INFO } from '../data/mockData';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Hotel Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6 text-gold">{HOTEL_INFO.name}</h2>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {HOTEL_INFO.description}
            </p>
            <div className="flex space-x-4">
              <a href={HOTEL_INFO.social.facebook} className="text-gray-300 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={HOTEL_INFO.social.instagram} className="text-gray-300 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href={HOTEL_INFO.social.twitter} className="text-gray-300 hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Amenities', 'Gallery', 'Special Offers', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-gold transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/my-booking" className="text-gray-300 hover:text-gold transition-colors text-sm">Find My Booking</Link>
              </li>
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Our Rooms</h3>
            <ul className="space-y-3">
              <li><Link to="/rooms" className="text-gray-300 hover:text-gold transition-colors text-sm">Deluxe Rooms</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-gold transition-colors text-sm">Executive Rooms</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-gold transition-colors text-sm">Family Suites</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-gold transition-colors text-sm">Presidential Suite</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-gray-300">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-gold" />
                <span>{HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Phone size={18} className="mr-3 flex-shrink-0 text-gold" />
                <span>{HOTEL_INFO.phone}</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <Mail size={18} className="mr-3 flex-shrink-0 text-gold" />
                <span>{HOTEL_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {HOTEL_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
