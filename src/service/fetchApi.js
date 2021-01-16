import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4444';

export const fetchAddItem = item => {
  return axios.post(`/contacts`, item);
};

export const fetchGetItem = () => {
  return axios.get('/contacts');
};

export const fetchDeleteItem = id => {
  return axios.delete(`/contacts/${id}`);
};
