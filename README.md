<p align="center">
  <img src="https://i.ibb.co.com/xtNzt58Y/Screenshot-2026-01-17-at-11-56-36-AM.png" width="100%"/>
  <br><br>
  <a href="https://per-care-kwu034u2c-tanim-ahameds-projects.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-0d47a1?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
</p>

<h1 align="center">🐾 Pet Care – Pet Care in Winter</h1>

<p align="center">
  A cozy winter companion platform designed to help pet owners keep their furry friends <strong>warm, safe, and healthy</strong> during the cold season.<br>
  Explore winter pet clothing, grooming services, paw care, heating solutions, and expert tips — all in one friendly place.
</p>

<hr>

## 🎯 Project Purpose

Helping pet owners take proper care of their pets during **cold weather** by providing:
- Winter-specific pet services
- Cozy clothing & accessory recommendations
- Grooming & health tips
- Easy access to trusted local providers

## 🌐 Live Demo

🔗 https://per-care-kwu034u2c-tanim-ahameds-projects.vercel.app/

## ✨ Key Features

- Fully responsive design (mobile, tablet, desktop)
- Persistent Navbar & Footer across all pages
- Firebase Authentication (Email/Password + Google Sign-In)
- Protected routes (Service Details & My Profile)
- Forgot Password functionality with Gmail redirect
- User Profile page + Update Profile (name & photo)
- Winter-themed Hero Slider with Swiper.js
- Dynamic service cards from JSON data (6+ services)
- Toast notifications (react-hot-toast)
- Scroll & hover animations (AOS + Animate.css)
- No reload crashes (proper SPA routing)

## 🛠️ Tech Stack & NPM Packages

- **Framework**: React + Vite
- **Routing**: React Router v6
- **Authentication**: Firebase Auth
- **Styling**: Tailwind CSS + DaisyUI (optional)
- **Animations**: 
  - AOS (Animate on Scroll)
  - Animate.css
- **Slider**: Swiper.js
- **Notifications**: react-hot-toast
- **State & Data**: JSON file + useState / useEffect

**Used at least 3 required NPM packages**:
1. AOS
2. Animate.css
3. react-hot-toast
4. swiper (bonus)

## 📂 Pages & Routes

| Route              | Description                                      | Protection    |
|--------------------|--------------------------------------------------|---------------|
| `/`                | Home – Hero slider, Services, Tips, Vets         | Public        |
| `/services/:id`    | Service Details + Book Service form              | Private       |
| `/profile`         | My Profile (view & update name/photo)            | Private       |
| `/login`           | Login + Google + Forgot Password                 | Public        |
| `/register`        | Sign Up (name, email, photo URL, password)       | Public        |
| `*`                | 404 Not Found                                    | Public        |


## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-USERNAME/pet-care.git
cd pet-care

# 2. Install dependencies
npm install

# 3. Create .env file with Firebase config
# Example:
VITE_apiKey=xxx
VITE_authDomain=xxx
VITE_projectId=xxx
VITE_storageBucket=xxx
VITE_messagingSenderId=xxx
VITE_appId=xxx

# 4. Run locally
npm run dev
