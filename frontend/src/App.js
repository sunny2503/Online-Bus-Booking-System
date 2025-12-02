import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserRegiser from './pages/UserRegister';
import BusOwnerRegister from './pages/BusOwnerRegister';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MyBookings from './pages/MyBookings';
import NewService from './pages/NewService';
import BusOwnerDashboard from './pages/BusOwnerDashboard';
import BusSeatSelector from './pages/SeatSelection';


const App = () => {
  return (
    <Router>
      <div>
        < Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<BusOwnerDashboard />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/create-service" element={<NewService />} />
          <Route path="/book-bus/:id" element={<BusSeatSelector />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-register" element={<UserRegiser />} />
          <Route path="/busowner-register" element={<BusOwnerRegister />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;