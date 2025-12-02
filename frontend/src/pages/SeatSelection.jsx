import { useEffect, useState } from 'react'
import { ChevronRight, User } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
import { bookSeats, getBookedSeats, getServiceDetails } from '../actions/service';


export default function BusSeatSelector() {
  const { id } = useParams();
  const [seats, setSeats] = useState([])
  const [service, setService] = useState(null)
  const [departureDate, setDepartureDate] = useState('')
  const navigate = useNavigate()

  const handleSeatClick = (id) => {
    setSeats(
      seats.map((seat) =>
        seat.id === id && seat.isAvailable
          ? { ...seat, isSelected: !seat.isSelected }
          : seat
      )
    )
  }

  const selectedSeats = seats.filter((seat) => seat.isSelected)

  useEffect(() => {
    (async () => {
      const service = await getServiceDetails(id);
      if (service) {
        setService(service)
        setSeats(
          Array.from({ length: service.totalSeats }, (_, i) => ({
            id: `seat-${i + 1}`,
            isAvailable: true,
            isSelected: false,
          }))
        )
      }
    })()

  }, [id])

  useEffect(() => {
    (async () => {
      const bookedSeats = await getBookedSeats(id);
      if (bookedSeats) {
        setSeats((seats) =>
          seats.map((seat) =>
            bookedSeats.includes(seat.id)
              ? { ...seat, isAvailable: false }
              : seat
          )
        )
      }
    })()
  }, [id, service])

  const bookSeat = async () => {
    console.log(departureDate)
    const booking = await bookSeats(id, selectedSeats.map(seat => seat.id), departureDate);
    if (booking) {
      navigate(`/my-bookings`)
    }
  }



  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Select Your Bus Seats
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                <span className="text-sm text-gray-600">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Selected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <span className="text-sm text-gray-600">Unavailable</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold text-gray-900">Select Date</h2>
                <input onChange={(e)=>setDepartureDate(e.target.value)} type="date" className="border border-gray-200 rounded px-4 py-2" />
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 mb-8">
              {seats.map((seat) => (
                <button
                  key={seat.id}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${seat.isAvailable
                    ? seat.isSelected
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                    : 'bg-gray-400 cursor-not-allowed'
                    }`}
                  onClick={() => handleSeatClick(seat.id)}
                  disabled={!seat.isAvailable}
                >
                  <User size={20} />
                </button>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Selected Seats
              </h2>
              <div className="flex flex-wrap gap-2">
                {selectedSeats.map((seat) => (
                  <span
                    key={seat.id}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {seat.id.split('-')[1]}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Selected: {selectedSeats.length} seat(s)
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Total: ₹{selectedSeats.length * service?.price}
                </p>
              </div>
              <button onClick={bookSeat}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Continue
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}