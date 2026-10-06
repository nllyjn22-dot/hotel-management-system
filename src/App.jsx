import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Customer Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import About from './pages/About';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Offers from './pages/Offers';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import MyBooking from './pages/MyBooking';
import NotFound from './pages/NotFound';

// Admin Pages
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking-confirmation" element={<BookingConfirmation />} />
          <Route path="about" element={<About />} />
          <Route path="amenities" element={<Amenities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="offers" element={<Offers />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="my-booking" element={<MyBooking />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* We will add more admin routes here later */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
