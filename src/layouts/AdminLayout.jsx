import { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { LayoutDashboard, CalendarDays, Bed, Users, Image as ImageIcon, MessageSquare, Settings, LogOut, Menu, X } from 'lucide-react';
import { HOTEL_INFO } from '../data/mockData';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Very basic auth check (mock)
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';

  if (!isAuthenticated && location.pathname !== '/admin/login') {
    return <Navigate to="/admin/login" />;
  }

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Bookings', path: '/admin/bookings', icon: CalendarDays },
    { name: 'Rooms', path: '/admin/rooms', icon: Bed },
    { name: 'Guests', path: '/admin/guests', icon: Users },
    { name: 'Gallery', path: '/admin/gallery', icon: ImageIcon },
    { name: 'Enquiries', path: '/admin/enquiries', icon: MessageSquare },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.href = '/admin/login';
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      
      {/* Sidebar */}
      <aside className={`bg-primary-950 text-white transition-all duration-300 flex flex-col ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="h-20 flex items-center justify-center border-b border-primary-900">
          <Link to="/" className="text-xl font-serif font-bold text-gold truncate px-4">
            {sidebarOpen ? HOTEL_INFO.name : 'AGH'}
          </Link>
        </div>
        
        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-2 px-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-3 rounded-md transition-colors ${
                    location.pathname === item.path 
                      ? 'bg-primary-900 text-gold' 
                      : 'hover:bg-primary-900/50 text-gray-300 hover:text-white'
                  }`}
                  title={!sidebarOpen ? item.name : ''}
                >
                  <item.icon size={20} className="flex-shrink-0" />
                  {sidebarOpen && <span className="ml-3 text-sm font-medium">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-primary-900">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 text-gray-400 hover:text-white hover:bg-red-600/20 rounded-md transition-colors"
          >
            <LogOut size={20} />
            {sidebarOpen && <span className="ml-3 text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-700 mr-4">Admin User</span>
            <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
