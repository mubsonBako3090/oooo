import api from './api';

export const getAll    = ()         => api.get('/budget');
export const getByDept = (id, year) => api.get(`/budget/${id}`, { params: { year } });
export const create    = (data)     => api.post('/budget', data);
export const update    = (id, d)    => api.put(`/budget/${id}`, d);