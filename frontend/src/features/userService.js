import axios from 'axios';

const API_URL = process.env.REACT_APP_URL;

const registerUser = async (userData) => {
  const { data } = await axios.post(`${API_URL}/register`, {
    ...userData,
  });

  return data;
};

const loginUser = async (userData) => {
  
  const { data } = await axios.post(`${API_URL}/login`, {
    ...userData,
  });

  return data;
};

const userService = {
  registerUser,
  loginUser,
};

export default userService;
