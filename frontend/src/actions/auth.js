const backendUrl = 'http://localhost:5000';

export const loginUser = async (email, password) => {
  const response = await fetch(`${backendUrl}/auth/login-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const { token, user } = await response.json();

  return { token, user };
}

export const registerUser = async (fullname, email, password, phone) => {
  const response = await fetch(`${backendUrl}/auth/register-user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullname, email, password, phone }),
  });

  const { token, user } = await response.json();

  return { token, user };
}

export const registerBusOwner = async (fullname, email, password, phone, companyName) => {
  const response = await fetch(`${backendUrl}/auth/register-busowner`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullname, email, password, phone, companyName }),
  });

  const { token, user } = await response.json();

  return { token, user };
}

export const loginBusOwner = async (email, password) => {
  console.log('loginBusOwner', email, password);
  const response = await fetch(`${backendUrl}/auth/login-busowner`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const { token, user } = await response.json();

  return { token, user };
}

export const getProfile = async () => {
  const response = await fetch(`${backendUrl}/auth/getprofile`, {
    headers: {
      'auth-token': localStorage.getItem('job_user')
    }
  });

  const user = await response.json();
  return user;
}