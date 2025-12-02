
import { useState } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { createNewService } from '../actions/service'
import { Bus, IndianRupee, List, Timer} from 'lucide-react'

export default function NewService() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    boarding: '',
    destination: '',
    price: '',
    totalSeats: '',
    time: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    if (Object.values(formData).some(field => field.trim() === '')) {
      setError('Please fill in all fields.')
      setIsSubmitting(false)
      return
    }

    try {
      const { title, location, boarding, destination, price, totalSeats, time } = formData
      const { success } = await createNewService(title, location, boarding, destination, price, totalSeats, time)

      if (success) {
        navigate('/dashboard')
      }

    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium leading-6 text-gray-900">Create a New Bus Service</h2>
          <p className="mt-1 text-sm text-gray-600">Fill out the form below to create a new bus service listing.</p>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Bus Service Title
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Bus className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block py-2 w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g. Amar Travels Mathura to Varanasi"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="focus:ring-indigo-500 focus:border-indigo-500 py-2 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g. Mathura, Delhi"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="boarding" className="block text-sm font-medium text-gray-700">
                Boarding Point
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="boarding"
                  id="boarding"
                  className="focus:ring-indigo-500 focus:border-indigo-500 py-2 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g. Masani Link Road"
                  value={formData.boarding}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination Point
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  className="focus:ring-indigo-500 focus:border-indigo-500 py-2 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g. Varanasi Railway Station"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <IndianRupee className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="focus:ring-indigo-500 focus:border-indigo-500 py-2 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g. 1200"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="totalSeats" className="block text-sm font-medium text-gray-700">
                  Total Seats
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <List className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="totalSeats"
                  id="totalSeats"
                  className="focus:ring-indigo-500 focus:border-indigo-500 py-2 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g. 20"
                  value={formData.totalSeats}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                  Time
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Timer className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="time"
                  id="time"
                  className="focus:ring-indigo-500 focus:border-indigo-500 py-2 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="e.g. 05:00 PM"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>


          </div>

          {error && (
            <div className="mt-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Creating...' : 'Create new service'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}