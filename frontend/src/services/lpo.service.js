import api from './api';

export const getAll = ()     => api.get('/lpo');
export const getOne = (id)   => api.get(`/lpo/${id}`);
export const create = (data) => api.post('/lpo', data);
export const getPDF = (id)   => api.get(`/lpo/${id}/pdf`, { responseType: 'blob' });