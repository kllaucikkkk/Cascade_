const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const api = {
  register: async (email, password, firstName, lastName) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, firstName, lastName })
    });
    return response.json();
  },

  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
    }
    return data;
  },

  getDashboard: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/dashboard/overview`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  getAccounts: async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/accounts`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  getTransactions: async (filters = {}) => {
    const token = localStorage.getItem('token');
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_BASE_URL}/transactions?${queryParams}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.json();
  },

  createTransaction: async (transactionData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/transactions`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(transactionData)
    });
    return response.json();
  }
};

export default api;
