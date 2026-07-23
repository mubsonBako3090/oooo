import api from './api';

export const getAll  = (params) => api.get('/vendors', { params });
export const getOne  = (id)     => api.get(`/vendors/${id}`);
export const create  = (data)   => api.post('/vendors', data);
export const update  = (id, d)  => api.put(`/vendors/${id}`, d);
export const remove  = (id)     => api.delete(`/vendors/${id}`);
export const verify  = (id)     => api.post(`/vendors/${id}/verify`);