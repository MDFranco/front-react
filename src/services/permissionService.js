import axios from 'axios';

const API_URL = 'http://localhost:5005/api/permissions';

export const getPermissions = () => {
  return axios.get(API_URL);
};

export const requestPermission = (permission) => {
  return axios.post(API_URL, permission);
};

export const modifyPermission = (id, permission) => {
  return axios.put(`${API_URL}/${id}`, permission);
};
