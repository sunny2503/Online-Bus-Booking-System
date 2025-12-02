
import { useEffect, useState } from 'react'
import { ArrowLeft, Calendar, Clock, MapPin, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cancelBooking, getMyBookings } from '../actions/service'


export default function MyBookings() {
  const [bookings, setBookings] = useState([])

  const upcomingBookings = bookings.filter(booking => new Date(booking.departureDate) >= new Date())
  const pastBookings = bookings.filter(booking => new Date(booking.departureDate) < new Date())

  useEffect(() => {
    (async () => {
      const bookings = await getMyBookings();
      if (bookings) {
        setBookings(bookings)
      }
    })()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link to="/" className="text-blue-600 hover:text-blue-800 flex items-center">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="ml-4 text-2xl font-bold text-gray-900">My Bookings</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section aria-labelledby="upcoming-bookings-heading">
          <h2 id="upcoming-bookings-heading" className="text-xl font-semibold text-gray-900 mb-4">Upcoming Bookings</h2>
          {upcomingBookings.length === 0 ? (
            <p className="text-gray-600">You have no upcoming bookings.</p>
          ) : (
            <div className="space-y-4">
              {upcomingBookings.map((booking, idx) => (
                <div key={idx} className="bg-white shadow rounded-lg p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{booking.bus.title}</h3>
                      <p className="text-gray-600">{booking.bus.location}</p>
                    </div>
                    <button
                      onClick={() => cancelBooking(booking._id)}
                      className="text-red-600 hover:text-red-800 flex items-center"
                      aria-label={`Cancel booking for ${booking.bus.title}`}
                    >
                      <X className="h-5 w-5 mr-1" />
                      Cancel
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{new Date(booking.departureDate).toDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{booking.bus.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Seat
                        <span className="uppercase ml-2 font-bold text-gray-800">
                          {
                            booking.seats.map(seat => seat).join(', ')
                          }</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Boarding Point
                        <span className="uppercase ml-2 font-bold text-gray-800">
                          {
                            booking.bus.boarding
                          }</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Destination Point
                        <span className="uppercase ml-2 font-bold text-gray-800">
                          {
                            booking.bus.destination
                          }</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section aria-labelledby="past-bookings-heading" className="mt-12">
          <h2 id="past-bookings-heading" className="text-xl font-semibold text-gray-900 mb-4">Past Bookings</h2>
          {pastBookings.length === 0 ? (
            <p className="text-gray-600">You have no past bookings.</p>
          ) : (
            <div className="space-y-4">
              {pastBookings.map((booking) => (
                <div key={booking.id} className="bg-white shadow rounded-lg p-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{booking.bus.title}</h3>
                    <p className="text-gray-600">{booking.route}</p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{booking.departureDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{booking.departureTime} - {booking.arrivalTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">Seat {booking.seatNumber}</span>
                    </div>
                    <div className="flex items-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/booking-details/${booking.id}`}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}