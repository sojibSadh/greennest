# GreeNest Store Showcase (React + Vite)


#  Live Preview 🌸
https://grenest.netlify.app


# Clone Repository

git clone https://github.com/sojibSadh/greennest.git




# GreenNest – Indoor Plant Care & Store
# Project Purpose
GreenNest is a modern and elegant single-page web application designed for indoor plant enthusiasts.
It helps users explore plant care guides, purchase indoor plants, and book consultations with plant experts



# Key Features
🎯 Authentication System
- Firebase Authentication (Email/Password & Google Sign-In)
- User Registration, Login, Logout
- Password Validation (Uppercase, Lowercase, Minimum 6 characters)
- Profile Update (Name & PhotoURL)
- Forgot Password functionality



# Dynamic Plant Data
Plant data fetched from a local plants.json file
Each plant includes details such as name, category, price, rating, stock, description, and provider
“View Details” button opens a Protected Route showing full plant information



# Protected Routes
Only authenticated users can access Plant Details and My Profile pages
Unauthenticated users are redirected to the Login Page
After successful login, users are redirected back to their intended route



# My Profile Page
Displays user information: Name, Email, and Profile Photo
Includes an Update Profile button to change display name and photo in real-time



# Additional Features
- Fully Responsive (Mobile, Tablet, Desktop)
- Minimalist UI with Tailwind CSS + DaisyUI
- Toast notifications for success/error messages
- Dedicated Error Page for invalid routes
- Navbar & Footer remain visible on all routes


# Technologies Used
 - React.js (Vite), JSX
 -  Tailwind CSS, DaisyUI
 - React Router DOM v6
 - Framer Motion / Swiper.js
- Firebase Auth
- React Toastify
- React Icons



## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```stall



2. Start dev server
   ```bash
   npm run dev
   ```


3. Build
   ```bash
   npm run build
   ```


# Environment Setup
Create a .env.local file in your project root and add your Firebase credentials:
 ```bash
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
   ```
