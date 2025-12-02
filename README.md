# Online Bus Booking System

<div align="center">

[![GitHub Stars](https://img.shields.io/github/stars/sunny2503/Online-Bus-Booking-System?style=social)](https://github.com/sunny2503/Online-Bus-Booking-System)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-14+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-Powered-61DAFB.svg)](https://reactjs.org/)

A modern, full-stack web application for seamless online bus ticket booking

[Live Demo](#) • [Documentation](#documentation) • [Get Started](#quick-start) • [Report Bug](https://github.com/sunny2503/Online-Bus-Booking-System/issues)

</div>

---

## 📋 Table of Contents

- [About](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

---

## About the Project

Online Bus Booking System is a comprehensive full-stack web application designed to revolutionize the way travelers book bus tickets. Built with modern web technologies, it provides a seamless user experience for searching, comparing, and booking bus tickets online.

Whether you're a travel enthusiast planning your next journey or a developer interested in learning full-stack development, this project offers:

- **User-Friendly Interface**: Intuitive design for easy navigation
- **Real-time Availability**: Live seat and bus availability updates
- **Secure Transactions**: Payment gateway integration for safe bookings
- **Admin Dashboard**: Comprehensive management tools for bus operators
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile

---

## ✨ Features

### User Features

- **🔐 Secure Authentication**
  - User registration and login
  - Password hashing and security
  - Session management

- **🔍 Smart Search**
  - Search buses by source, destination, and date
  - Filter by price, departure time, and amenities
  - Save favorite routes

- **💺 Seat Selection**
  - Interactive seat map
  - Real-time seat availability
  - Multiple seat selection
  - Seat categorization (AC, Non-AC, etc.)

- **💳 Booking Management**
  - Book tickets in minutes
  - Modify or cancel bookings
  - View booking history
  - Download e-tickets
  - Email and SMS confirmations

- **💰 Payment Integration**
  - Multiple payment methods
  - Secure payment gateway (Stripe/Razorpay)
  - Instant payment confirmation
  - Invoice generation

- **⭐ Reviews & Ratings**
  - Rate and review bus services
  - View other traveler reviews
  - Help other users make informed decisions

### Admin Features

- **🚌 Bus Management**
  - Add and manage bus routes
  - Set schedules and pricing
  - Manage bus inventory
  - Track revenue

- **📊 Dashboard & Analytics**
  - Real-time booking statistics
  - Revenue reports
  - Passenger analytics
  - Performance metrics

- **👥 User Management**
  - Manage user accounts
  - Handle support tickets
  - Track user activity

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **State Management**: Context API / Redux (if applicable)
- **Form Handling**: React Hook Form
- **Build Tool**: Create React App / Vite
- **Languages**: JavaScript, JSX, HTML5, CSS3

### Backend
- **Framework**: Node.js with Express.js
- **Database**: MongoDB / MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Middleware**: Express middleware for CORS, body parsing
- **Payment Gateway**: Stripe / Razorpay API
- **Email Service**: Nodemailer
- **ORM**: Mongoose (MongoDB) / Sequelize (MySQL)

### DevOps & Tools
- **Version Control**: Git & GitHub
- **Package Manager**: npm / yarn
- **Testing**: Jest (optional)
- **API Testing**: Postman
- **Deployment**: Heroku / AWS / Vercel

---

## 📁 Project Structure

```
Online-Bus-Booking-System/
├── backend/
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Bus.js
│   │   ├── Booking.js
│   │   └── Payment.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── buses.js
│   │   ├── bookings.js
│   │   └── payments.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── busController.js
│   │   └── bookingController.js
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── SearchForm.jsx
│   │   │   ├── BusList.jsx
│   │   │   ├── SeatMap.jsx
│   │   │   └── PaymentForm.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── SearchResults.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── AdminPanel.jsx
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── styles/
│   ├── package.json
│   ├── tailwind.config.js
│   └── .env.example
│
├── README.md
├── .gitignore
└── LICENSE
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB or MySQL database
- Git

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/sunny2503/Online-Bus-Booking-System.git
cd Online-Bus-Booking-System
```

#### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your configuration
# Example:
# DATABASE_URL=mongodb://localhost:27017/bus-booking
# JWT_SECRET=your_jwt_secret_key
# STRIPE_API_KEY=your_stripe_key

# Start the server
npm start
# Server runs on http://localhost:5000
```

#### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with API base URL
# Example:
# REACT_APP_API_URL=http://localhost:5000/api

# Start the development server
npm start
# App runs on http://localhost:3000
```

---

## 📖 Usage

### For Users

1. **Register/Login**: Create an account or login with existing credentials
2. **Search Buses**: Select source, destination, and travel date
3. **View Details**: Check bus amenities, timings, and prices
4. **Book Tickets**: Select seats and proceed to checkout
5. **Make Payment**: Pay securely via payment gateway
6. **Confirm Booking**: Receive confirmation via email and SMS
7. **Manage Bookings**: View, modify, or cancel bookings from dashboard

### For Admins

1. **Access Admin Panel**: Login with admin credentials
2. **Manage Buses**: Add new buses and routes
3. **Set Pricing**: Update ticket prices and discounts
4. **View Analytics**: Monitor bookings and revenue
5. **Manage Users**: Handle user accounts and support

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register        - Register new user
POST   /api/auth/login           - Login user
POST   /api/auth/logout          - Logout user
GET    /api/auth/profile         - Get user profile
```

### Buses
```
GET    /api/buses                - Get all buses
GET    /api/buses/search         - Search buses
GET    /api/buses/:id            - Get bus details
POST   /api/buses                - Add new bus (Admin)
PUT    /api/buses/:id            - Update bus (Admin)
DELETE /api/buses/:id            - Delete bus (Admin)
```

### Bookings
```
POST   /api/bookings            - Create new booking
GET    /api/bookings            - Get user bookings
GET    /api/bookings/:id        - Get booking details
PUT    /api/bookings/:id        - Update booking
DELETE /api/bookings/:id        - Cancel booking
```

### Payments
```
POST   /api/payments            - Process payment
GET    /api/payments/:id        - Get payment details
```

### Reviews
```
POST   /api/reviews             - Add review
GET    /api/reviews/:busId      - Get bus reviews
```

---

## 📊 Database Schema

### Key Collections/Tables:

**Users**
- userId, email, password (hashed), firstName, lastName, phone, address

**Buses**
- busId, busName, busNumber, capacity, amenities, routes, totalSeats

**Bookings**
- bookingId, userId, busId, departureDate, seats, totalPrice, status

**Payments**
- paymentId, bookingId, amount, paymentMethod, status, transactionId

**Routes**
- routeId, source, destination, distance, duration, baseFare

**Reviews**
- reviewId, busId, userId, rating, comment, createdAt

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

Please follow the existing code style and include appropriate comments.

---

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] Real-time bus tracking
- [ ] Multi-language support
- [ ] Advanced filters (AC/Non-AC, WiFi, etc.)
- [ ] Loyalty rewards program
- [ ] Group booking discounts
- [ ] Integration with travel insurance
- [ ] ChatBot support
- [ ] Analytics dashboard improvements
- [ ] Performance optimization

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

MIT License - feel free to use, modify, and distribute this project!

---

## 👤 Author

**Sunny Sharma**
- GitHub: [@sunny2503](https://github.com/sunny2503)
- Email: sharmasunny3158z@gmail.com
- Location: Agra, India

---

## 🙏 Acknowledgments

- Thanks to all contributors and testers
- Inspired by modern booking platforms
- Special thanks to the open-source community
- Built with passion for better travel experiences

---

## 📧 Support

Have questions or suggestions? Feel free to:
- Open an [Issue](https://github.com/sunny2503/Online-Bus-Booking-System/issues)
- Start a [Discussion](https://github.com/sunny2503/Online-Bus-Booking-System/discussions)
- Email: sharmasunny3158z@gmail.com

---

## 🌟 Show Your Support

If you found this project helpful, please consider giving it a ⭐ star! It helps other developers discover it and motivates us to keep improving.

**Happy Coding!** 🚀
