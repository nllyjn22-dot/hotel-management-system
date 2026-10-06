# Aurora Grand Hotel - React Booking System

A complete, modern, production-style Hotel Booking Website built with React.

## Features
- **Modern Luxury Design:** Premium UI with Framer Motion animations and Tailwind CSS.
- **Complete Booking Flow:** Search, select, review, and confirm bookings.
- **Admin Dashboard:** Manage bookings, rooms, guests, and hotel settings.
- **Responsive:** Fully responsive on mobile, tablet, and desktop.
- **Database Ready:** Structured for Supabase integration.
- **Customizable:** Centralized data structure to easily sell/rebrand for other hotels.

## Tech Stack
- React 18 (Vite)
- Tailwind CSS
- React Router
- Lucide React (Icons)
- Framer Motion (Animations)
- Supabase (Backend/Auth)

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy the `.env.example` file to `.env` and fill in your Supabase credentials:
```bash
cp .env.example .env
```

### 3. Run Development Server
```bash
npm run dev
```

## Customization Guide
To customize this website for a different hotel:
1. Update `src/data/mockData.js` (or your Supabase `hotel_settings` table once connected).
2. Change the `VITE_HOTEL_NAME` and `VITE_WHATSAPP_NUMBER` in your `.env` file.
3. Update brand colors in `tailwind.config.js`.

## Supabase Database Schema

Run the following SQL in your Supabase SQL Editor to set up the database. The initial admin email is set as `teamstrategicgrid@gmail.com` via Supabase Auth.

```sql
-- 1. Hotel Settings
CREATE TABLE hotel_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR NOT NULL,
  description TEXT,
  phone VARCHAR,
  email VARCHAR,
  whatsapp VARCHAR,
  address TEXT,
  facebook_url VARCHAR,
  instagram_url VARCHAR,
  currency VARCHAR DEFAULT 'INR',
  tax_percentage DECIMAL DEFAULT 18.0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Rooms
CREATE TABLE rooms (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  description TEXT,
  price DECIMAL NOT NULL,
  original_price DECIMAL,
  capacity INTEGER NOT NULL,
  beds VARCHAR NOT NULL,
  size VARCHAR,
  quantity INTEGER DEFAULT 1,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Room Images
CREATE TABLE room_images (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  room_id UUID REFERENCES rooms(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  is_primary BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0
);

-- 4. Bookings
CREATE TABLE bookings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  booking_ref VARCHAR UNIQUE NOT NULL, -- e.g., AGH-2026-000123
  room_id UUID REFERENCES rooms(id),
  guest_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  country VARCHAR,
  address TEXT,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  adults INTEGER NOT NULL,
  number_of_rooms INTEGER DEFAULT 1,
  special_requests TEXT,
  total_amount DECIMAL NOT NULL,
  payment_method VARCHAR,
  payment_status VARCHAR DEFAULT 'pending', -- pending, paid, refunded
  status VARCHAR DEFAULT 'confirmed', -- confirmed, checked_in, checked_out, cancelled
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Offers
CREATE TABLE offers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR NOT NULL,
  description TEXT,
  discount_text VARCHAR,
  valid_until DATE,
  image_url TEXT,
  active BOOLEAN DEFAULT true
);

-- 6. Enquiries
CREATE TABLE enquiries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phone VARCHAR,
  subject VARCHAR NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR DEFAULT 'new', -- new, contacted, resolved
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Security Notes (Production)
1. Ensure Row Level Security (RLS) is enabled on all Supabase tables.
2. The `bookings` table should allow INSERT for anonymous users but SELECT only for authenticated admins (or anonymous users who provide the exact booking reference and email).
3. The `hotel_settings` and `rooms` tables should allow SELECT for anonymous users, but only allow UPDATE/INSERT/DELETE for authenticated admins.
4. Calculate final prices securely on the backend before finalizing payments to prevent tampering.

## Deployment
This project can be easily deployed to Vercel or Netlify.
1. Connect your GitHub repository.
2. Ensure you add all `VITE_*` environment variables in the deployment platform settings.
3. Build command: `npm run build`
4. Publish directory: `dist`
