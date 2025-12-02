const backendUrl = 'http://localhost:5000';

export const createNewService = async (title, location, boarding, destination, price, totalSeats, time) => {
  const response = await fetch(`${backendUrl}/services/new-service`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('user')
    },
    body: JSON.stringify({ title, location, boarding, destination, price, totalSeats, time })
  });

  const service = await response.json();
  return { service, success: true };
}


export const fetchOwnerServices = async () => {
  const response = await fetch(`${backendUrl}/services/owner-service`, {
    headers: {
      'auth-token': localStorage.getItem('user')
    }
  });

  const services = await response.json();
  return services;
}

export const getAllServices = async () => {
  const response = await fetch(`${backendUrl}/services/allservices`, {
    headers: {
      'auth-token': localStorage.getItem('user')
    }
  });

  const services = await response.json();
  return services;
}

export const getServiceDetails = async (id) => {
  const response = await fetch(`${backendUrl}/services/${id}`, {
    headers: {
      'auth-token': localStorage.getItem('user')
    }
  });

  const service = await response.json();
  return service;
}

export const getBookedSeats = async (id) => {
  const response = await fetch(`${backendUrl}/services/get-booked-seats/${id}`, {
    headers: {
      'auth-token': localStorage.getItem('user')
    }
  });

  const seats = await response.json();
  return seats;
}

export const bookSeats = async (id, seats, departureDate) => {
  const response = await fetch(`${backendUrl}/services/book-seats/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('user')
    },
    body: JSON.stringify({ seats, departureDate })
  });

  const data = await response.json();
  return data;
}

export const cancelBooking = async (id) => {
  const response = await fetch(`${backendUrl}/services/cancel-booking/${id}`, {
    method: 'POST',
    headers: {
      'auth-token': localStorage.getItem('user')
    }
  });

  const data = await response.json();
  if (data) {
    window.location.reload();
  }
}

export const getMyBookings = async () => {
  const response = await fetch(`${backendUrl}/services/my-bookings`, {
    headers: {
      'auth-token': localStorage.getItem('user')
    }
  });

  const bookings = await response.json();
  return bookings;
}

export const getServiceBooking = async (id) => {
  const response = await fetch(`${backendUrl}/services/service-booking`, {
    headers: {
      'auth-token': localStorage.getItem('user')
    }
  });

  const bookings = await response.json();
  return bookings;
}