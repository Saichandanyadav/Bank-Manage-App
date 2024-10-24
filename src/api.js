import axios from 'axios';

const API_URL = 'https://bank-info-app-backend-chandan.onrender.com/api'; // Adjust the URL as per your backend

// User Registration
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data; // Handle error
    }
};

// User Login
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data; // Handle error
    }
};

// Add Bank Account
export const addBankAccount = async (accountData) => {
    try {
        const response = await axios.post(`${API_URL}/bank-accounts`, accountData);
        return response.data;
    } catch (error) {
        throw error.response.data; // Handle error
    }
};

// Get Bank Accounts
export const getBankAccounts = async () => {
    try {
        const response = await axios.get(`${API_URL}/bank-accounts`);
        return response.data;
    } catch (error) {
        throw error.response.data; // Handle error
    }
};

// Update Bank Account
export const updateBankAccount = async (id, accountData) => {
    try {
        const response = await axios.put(`${API_URL}/bank-accounts/${id}`, accountData);
        return response.data;
    } catch (error) {
        throw error.response.data; // Handle error
    }
};

// Delete Bank Account
export const deleteBankAccount = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/bank-accounts/${id}`);
        return response.data;
    } catch (error) {
        throw error.response.data; // Handle error
    }
};

// src/api.js
export const fetchBankAccounts = async (token) => {
    const response = await axios.get(`${API_URL}/bank`, {
        headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
        },
    });
    return response.data; // Return the data from the response
};