'use client';

import { create } from 'zustand';
import axios from 'axios';
import { useAuthStore } from './authStore';

const getHeaders = () => {
  const token = useAuthStore.getState().token;
    return token ? { Authorization: `Bearer ${token}` } : {};
    };

    export const useRequisitionStore = create((set, get) => ({
      requisitions: [],
        current:      null,
          loading:      false,
            error:        null,

              fetchAll: async (params = {}) => {
                  set({ loading: true, error: null });
                      try {
                            const { data } = await axios.get('/api/requisitions', {
                                    params,
                                            headers: getHeaders(),
                                                  });
                                                        set({ requisitions: data.data || [], loading: false });
                                                            } catch (e) {
                                                                  set({ error: e.response?.data?.message || e.message, loading: false });
                                                                      }
                                                                        },

                                                                          fetchOne: async (id) => {
                                                                              set({ loading: true });
                                                                                  try {
                                                                                        const { data } = await axios.get(`/api/requisitions/${id}`, {
                                                                                                headers: getHeaders(),
                                                                                                      });
                                                                                                            set({ current: data.data, loading: false });
                                                                                                                  return data.data;
                                                                                                                      } catch (e) {
                                                                                                                            set({ error: e.response?.data?.message, loading: false });
                                                                                                                                }
                                                                                                                                  },

                                                                                                                                    create: async (payload) => {
                                                                                                                                        const { data } = await axios.post('/api/requisitions', payload, {
                                                                                                                                              headers: getHeaders(),
                                                                                                                                                  });
                                                                                                                                                      await get().fetchAll();
                                                                                                                                                          return data.data;
                                                                                                                                                            },

                                                                                                                                                              update: async (id, payload) => {
                                                                                                                                                                  const { data } = await axios.put(`/api/requisitions/${id}`, payload, {
                                                                                                                                                                        headers: getHeaders(),
                                                                                                                                                                            });
                                                                                                                                                                                return data.data;
                                                                                                                                                                                  },

                                                                                                                                                                                    submit: async (id) => {
                                                                                                                                                                                        const { data } = await axios.post(
                                                                                                                                                                                              `/api/requisitions/${id}/submit`,
                                                                                                                                                                                                    {},
                                                                                                                                                                                                          { headers: getHeaders() }
                                                                                                                                                                                                              );
                                                                                                                                                                                                                  await get().fetchAll();
                                                                                                                                                                                                                      return data.data;
                                                                                                                                                                                                                        },

                                                                                                                                                                                                                          reset: () => set({ current: null, error: null }),
                                                                                                                                                                                                                          }));