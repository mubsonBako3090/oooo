import api from './api';

export const getSummary   = (p) => api.get('/reports/summary',       { params: p });
export const getByDept    = (p) => api.get('/reports/by-department', { params: p });
export const getByStatus  = ()  => api.get('/reports/by-status');
export const getMonthly   = (p) => api.get('/reports/monthly',       { params: p });
export const exportCSV    = (p) => api.get('/reports/export/csv',    { params: p, responseType: 'blob' });
export const exportPDF    = (p) => api.get('/reports/export/pdf',    { params: p, responseType: 'blob' });