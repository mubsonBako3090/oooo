import api from './api';

export const getAll   = (params) => api.get('/requisitions', { params });
export const getOne   = (id)     => api.get(`/requisitions/${id}`);
export const create   = (data)   => api.post('/requisitions', data);
export const update   = (id, d)  => api.put(`/requisitions/${id}`, d);
export const remove   = (id)     => api.delete(`/requisitions/${id}`);
export const submit   = (id)     => api.post(`/requisitions/${id}/submit`);
export const withdraw = (id)     => api.post(`/requisitions/${id}/withdraw`);