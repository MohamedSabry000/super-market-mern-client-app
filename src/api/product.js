import axios from "axios";
const SERVER_ENDPOINT = "http://localhost:5000/api/v1";

// Create a new product
export const createProductReq = async (data, token) => {
    return axios.post(`http://localhost:5000/api/v1/product/`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }, body: JSON.stringify(data)
    });
};
// Get single product information
export const getProductDataReq = async (id) => {
    return axios.get(`${SERVER_ENDPOINT}/product/${id}`);
};
// Get all products owned by a user
export const getUserProductsReq = async (token, page=1) => {
    return axios.post(`${SERVER_ENDPOINT}/product/userproducts?page=${page}`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }
    });
};

// Get all products
export const getAllProductsData = async (page=1) => {
    return axios.get(`${SERVER_ENDPOINT}/product?page=${page}`);
};

// Remove a product
export const removeOneProduct = async (id, token) => {
    return axios.delete(`${SERVER_ENDPOINT}/product/${id}`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }
    });
};

// Update a product
export const updateProductReq = async (id, token, data) => {
    console.log(data);
    return axios.post(`${SERVER_ENDPOINT}/product/${id}`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }, body: JSON.stringify(data)
    });
};

// Update a product image
export const updateProductAvatar = async (id, token, formData) => {
    console.log("Hello Form Data: ", formData);
    return axios.patch(`http://localhost:5000/api/v1/product/${id}`, formData, 
    { headers: { "Content-Type": "multipart/form-data", authorization: `Bearer ${token}` }})  
};

// Get all products owned by user by category
export const getUserProductsByCategory = async (token, data, page=1) => {
    return axios.get(`${SERVER_ENDPOINT}/product/findByUser?key=${data}&page=${page}`, {
        headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        }
    });
};

// Get all products by category
export const getAllProductsByCategory = async (data, page=1) => {
    return axios.get(`http://localhost:5000/api/v1/product/find?key=${data}&?page=${page}`);
};