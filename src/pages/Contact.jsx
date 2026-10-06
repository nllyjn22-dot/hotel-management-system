import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { HOTEL_INFO } from '../data/mockData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API submission
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div className="bg-primary-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are here to assist you with any inquiries or requests. Reach out to us, and our team will be delighted to help make your stay exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 text-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-gray-600 text-sm mt-1">{HOTEL_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 text-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm mt-1">{HOTEL_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 text-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600 text-sm mt-1">{HOTEL_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-50 text-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Reception Hours</h4>
                    <p className="text-gray-600 text-sm mt-1">24 Hours / 7 Days</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <a 
                  href={`https://wa.me/${HOTEL_INFO.whatsapp}?text=Hi ${HOTEL_INFO.name}, I need some assistance.`}
                  target="_blank" rel="noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">Send us a Message</h3>
              
              {status === 'sent' && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded border border-green-200">
                  Thank you for your message! We will get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                    <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea name="message" required rows="5" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring-gold focus:border-gold bg-gray-50"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="bg-primary-900 hover:bg-gold text-white font-medium py-3 px-8 rounded transition-colors flex items-center disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending...' : <><Send size={18} className="mr-2" /> Send Message</>}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
