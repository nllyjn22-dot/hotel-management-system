import { CalendarDays, Users, IndianRupee, BedDouble, ArrowUpRight, Clock, Settings } from 'lucide-react';

export default function AdminDashboard() {
  const kpis = [
    { title: "Total Bookings", value: "1,284", change: "+12.5%", positive: true, icon: CalendarDays },
    { title: "Revenue", value: "₹24.5L", change: "+18.2%", positive: true, icon: IndianRupee },
    { title: "Occupancy Rate", value: "85%", change: "+5.4%", positive: true, icon: BedDouble },
    { title: "Total Guests", value: "3,492", change: "+8.1%", positive: true, icon: Users },
  ];

  const recentBookings = [
    { id: 'AGH-10452', guest: 'John Smith', room: 'Deluxe King', checkIn: 'Today', status: 'Checked In', amount: '₹12,500' },
    { id: 'AGH-10453', guest: 'Sarah Lee', room: 'Premium Pool View', checkIn: 'Tomorrow', status: 'Confirmed', amount: '₹18,000' },
    { id: 'AGH-10454', guest: 'Michael Chen', room: 'Executive Suite', checkIn: '24 Oct', status: 'Pending', amount: '₹24,000' },
    { id: 'AGH-10455', guest: 'Emma Davis', room: 'Family Suite', checkIn: '25 Oct', status: 'Confirmed', amount: '₹32,000' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500">Welcome back. Here's what's happening at the hotel today.</p>
        </div>
        <div className="text-sm text-gray-500 flex items-center bg-white px-3 py-1.5 rounded-md border border-gray-200">
          <Clock size={16} className="mr-2" />
          {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary-50 text-primary-900 rounded-lg">
                <kpi.icon size={24} />
              </div>
              <span className={`text-sm font-medium flex items-center ${kpi.positive ? 'text-green-600' : 'text-red-600'}`}>
                {kpi.change}
                {kpi.positive && <ArrowUpRight size={16} className="ml-1" />}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{kpi.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
            <button className="text-sm text-primary-900 font-medium hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-medium">Booking ID</th>
                  <th className="p-4 font-medium">Guest</th>
                  <th className="p-4 font-medium">Room</th>
                  <th className="p-4 font-medium">Check In</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-200">
                {recentBookings.map((booking, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-medium text-gray-900">{booking.id}</td>
                    <td className="p-4 text-gray-600">{booking.guest}</td>
                    <td className="p-4 text-gray-600">{booking.room}</td>
                    <td className="p-4 text-gray-600">{booking.checkIn}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Checked In' ? 'bg-blue-100 text-blue-800' :
                        booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-4 font-medium text-gray-900">{booking.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-primary-50 transition-colors group">
              <span className="font-medium text-gray-700 group-hover:text-primary-900">Create New Booking</span>
              <CalendarDays size={18} className="text-gray-400 group-hover:text-gold" />
            </button>
            <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-primary-50 transition-colors group">
              <span className="font-medium text-gray-700 group-hover:text-primary-900">Manage Rooms</span>
              <BedDouble size={18} className="text-gray-400 group-hover:text-gold" />
            </button>
            <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-primary-50 transition-colors group">
              <span className="font-medium text-gray-700 group-hover:text-primary-900">Update Settings</span>
              <Settings size={18} className="text-gray-400 group-hover:text-gold" />
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Today's Overview</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Check-ins</span>
                  <span className="font-medium">12 / 15</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Check-outs</span>
                  <span className="font-medium">8 / 10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
