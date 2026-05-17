# 🏨 QuickStay — Premium Hotel Booking & Luxury Experience Platform

QuickStay is a modern, high-end Single Page Application (SPA) designed to connect travelers with personally vetted luxury hotels and bespoke local experiences across major global cities, including **New York**, **London**, **Singapore**, and **Dubai**. 

Featuring seamless search, robust sorting/filtering options, interactive pages, secure billing, and an automated owner-onboarding dashboard, QuickStay represents the pinnacle of modern web design and premium user experience.

---

## 🌟 Key Features

### 1. Dynamic Hotel & Room Inventory
* **Curated Global Destinies:** Active listings spanning premium hotels across 4 main global hubs.
* **Diverse Categories:** 12 highly detailed rooms covering different categories (Single Bed, Double Bed, Luxury Suite, Family Room) and price brackets ranging from `$149` to `$899`.
* **Amenities Map:** Fully functional facilities system mapping dynamic icons for features like **Free WiFi**, **Free Breakfast**, **Room Service**, **Pool Access**, and **Mountain View**.

### 2. Premium Luxury Pages
* **Experience Hub (`/experience`):** Discover signature local excursions curated by travel experts. Features a responsive categories grid, beautiful visual timeline steps, and zoomable interactive galleries.
* **About Us Story (`/about`):** Detailed narrative of the brand's milestones and philosophy, custom team highlights, a founder quote section, and a **scroll-triggered animated statistics counters bar** (Luxury Hotels, Happy Guests, Global Cities, Average Rating).
* **Smooth Page Transitions & Scroll:** Equipped with standard `scroll-behavior: smooth` and fluid fade-in animations on all main page layouts.

### 3. Bulletproof Stripe Integration & Self-Verification
* **Safe Checkouts:** Integrated with Stripe Checkout sessions to handle online transactions securely.
* **Instant Verification Redirect:** Built a custom session verification API `/api/bookings/verify-stripe` that intercepts Stripe checkout redirects instantly. It parses the checkout session, confirms payment with Stripe, updates the booking to `Paid` in the database, and displays a successful toast notification instantly—bypassing local webhook limitations.

### 4. Clerk Authentication & Pre-Login Guards
* **Seamless Authentication:** Secure user registrations, profile syncs, and session states powered by Clerk.
* **Friendly Warnings:** Features friendly frontend auth alert checks showing a warm alert: `"Kindly login first and then try to book!"` when non-authenticated guests attempt booking.

### 5. Multi-User Role Dashboards
* **Guest Role:** Find hotels, manage check-in/check-out dates, review booking records, pay securely, and receive automatic confirmation emails.
* **Hotel Owner Dashboard:** Dedicated portal for hotel administrators to register properties, track total earnings, view overall reservations, and list new rooms.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
|---|---|
| **Frontend** | React (Vite), Tailwind CSS, React Router, Clerk React SDK, Axios, React Hot Toast |
| **Backend** | Node.js, Express, Mongoose (MongoDB), Stripe SDK, Svix, Nodemailer (SMTP) |
| **Database** | MongoDB (Local / Atlas Cloud) |

---

## 📂 Project Structure

```text
├── client/                 # Frontend Vite React Application
│   ├── src/
│   │   ├── assets/         # High-resolution luxury assets & SVGs
│   │   ├── components/     # Reusable components (Navbar, Footer, HotelCard, Title, Loader)
│   │   ├── context/        # AppContext managing state & API wrappers
│   │   ├── pages/          # Main views (Home, About, Experience, AllRooms, RoomDetails, MyBookings)
│   │   │   └── hotelOwner/ # Owner Dashboard views (Dashboard, AddRoom, ListRoom, Layout)
│   │   └── index.css       # Tailwind directives & smooth-scroll animations
├── server/                 # Express REST API
│   ├── config/             # Database connection & SMTP mailer configurations
│   ├── controllers/        # Business logic controllers (Bookings, Rooms, Stripe, Clerk Webhooks)
│   ├── middleware/         # Auth verification & raw body captures
│   ├── models/             # Mongoose Schemas (User, Hotel, Room, Booking)
│   ├── routes/             # REST route bindings
│   ├── seed.js             # Automated database seeding utility script
│   └── server.js / index.js# Main app bootstrap entry points
```

---

## 🚀 Local Development Setup

### Prerequisites
* **Node.js** (v18+ recommended)
* **MongoDB** (running locally on `mongodb://127.0.0.1:27017` or a Cloud MongoDB Atlas URL)
* **Stripe & Clerk** accounts (for API test credentials)

---

### Step 1: Clone and Configure Environment

1. Clone your repository:
   ```bash
   git clone https://github.com/Sushant-3010/Hotel-Booking.git
   cd Hotel-Booking
   ```

2. Create a `.env` file in the **`server/`** folder:
   ```env
   MONGODB_URI=mongodb://127.0.0.1:27017
   PORT=3000

   # Clerk Auth Credentials
   CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

   # Cloudinary Credentials
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Nodemailer SMTP Configuration
   SENDER_EMAIL=your_smtp_sender_email
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password

   # Stripe API Configuration
   STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

3. Create a `.env` file in the **`client/`** folder:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_BACKEND_URL=http://localhost:3000
   VITE_CURRENCY=$
   ```

---

### Step 2: Database Seeding
To populate your database with 8 hotels and 12 rooms across major global destinations:
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Install server dependencies:
   ```bash
   npm install
   ```
3. Run the automated seed script:
   ```bash
   node seed.js
   ```

---

### Step 3: Run the Servers

#### Start Backend
In the `server` folder, run:
```bash
npm start
```
*The server will run on port `3000`.*

#### Start Frontend
1. Open a new terminal and navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Run the Vite development server:
   ```bash
   npm run dev
   ```
*Open `http://localhost:5173/` in your browser to experience QuickStay!*

---

## 🌍 Production & Deployment Notes

### Frontend (Vercel Hosting)
* Set environment variables (`VITE_CLERK_PUBLISHABLE_KEY`, `VITE_BACKEND_URL`, `VITE_CURRENCY`) directly in the Vercel Project Dashboard.
* Ensure the build command is configured as `npm run build` and output directory as `dist`.

### Backend (Render / Vercel API Hosting)
* Host the Node/Express backend using an active database (such as MongoDB Atlas cluster instead of local instance).
* Configure your webhook secret values for Stripe and Clerk matching their respective dashboard integrations.
