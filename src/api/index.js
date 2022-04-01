import axios from "axios";

export const loginUser = async (credentials) => {
  console.log(JSON.stringify(credentials));
  return axios.post("http://localhost:5000/api/v1/user/login", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

export const fetchUserData = async (token) => {
  return axios.get(`http://localhost:5000/api/v1/user`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const signUpUser = async (data) => {
  return axios.post(`http://localhost:5000/api/v1/user/signup`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
};
