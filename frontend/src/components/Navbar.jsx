import { LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  const location = useLocation();
  const [userType, setUserType] = useState('')
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user_role');
    window.location.href = '/login';
  }

  const [isBusOwner, setIsBusOwner] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('user_role');
    setUserType(role);
    if (role === 'busowner') {
      setIsBusOwner(true);
    } else {
      setIsBusOwner(false);
    }
  }, [location.pathname]);


  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">BusBooker</h1>
          </div>
          <div>
            {
              !isBusOwner &&
              <Link to="/my-bookings" className="text-gray-500 hover:text-gray-700">
                My Bookings
              </Link>
            }
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={handleLogout} className="text-gray-500 hover:text-gray-700">
              <LogOut className="h-6 w-6" />
              <span className="sr-only">Log out</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar