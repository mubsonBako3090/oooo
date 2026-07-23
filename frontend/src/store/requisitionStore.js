import { create } from 'zustand';
import api from '../services/api';

export const useRequisitionStore = create((set, get) => ({
  requisitions: [],
    current:      null,
      loading:      false,
        error:        null,
          pagination:   {},

            fetchAll: async (params = {}) => {
                set({ loading: true, error: null });
                    try {
                          const { data } = await api.get('/requisitions', { params });
                                set({
                                        requisitions: data.data?.data || data.data || [],
                                                pagination:   data.data?.pagination || {},
                                                        loading:      false,
                                                              });
                                                                  } catch (e) {
                                                                        set({ error: e.response?.data?.message || e.message, loading: false });
                                                                            }
                                                                              },

                                                                                fetchOne: async (id) => {
                                                                                    set({ loading: true });
                                                                                        try {
                                                                                              const { data } = await api.get(`/requisitions/${id}`);
                                                                                                    set({ current: data.data, loading: false });
                                                                                                          return data.data;
                                                                                                              } catch (e) {
                                                                                                                    set({ error: e.response?.data?.message || e.message, loading: false });
                                                                                                                        }
                                                                                                                          },

                                                                                                                            create: async (payload) => {
                                                                                                                                const { data } = await api.post('/requisitions', payload);
                                                                                                                                    return data.data;
                                                                                                                                      },

                                                                                                                                        update: async (id, payload) => {
                                                                                                                                            const { data } = await api.put(`/requisitions/${id}`, payload);
                                                                                                                                                return data.data;
                                                                                                                                                  },

                                                                                                                                                    submit: async (id) => {
                                                                                                                                                        const { data } = await api.post(`/requisitions/${id}/submit`);
                                                                                                                                                            await get().fetchAll();
                                                                                                                                                                return data.data;
                                                                                                                                                                  },

                                                                                                                                                                    withdraw: async (id) => {
                                                                                                                                                                        const { data } = await api.post(`/requisitions/${id}/withdraw`);
                                                                                                                                                                            await get().fetchAll();
                                                                                                                                                                                return data.data;
                                                                                                                                                                                  },

                                                                                                                                                                                    reset: () => set({ current: null, error: null }),
                                                                                                                                                                                    }));