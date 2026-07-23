import api from './api';

export const getQueue = ()                    => api.get('/approvals');
export const getByReq = (req_id)              => api.get(`/approvals/${req_id}`);
export const approve  = (req_id, comment)     => api.post(`/approvals/${req_id}/approve`, { comment });
export const reject   = (req_id, comment)     => api.post(`/approvals/${req_id}/reject`,  { comment });