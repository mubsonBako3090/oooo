'use client';

import { create } from 'zustand';
import axios from 'axios';
import { useAuthStore } from './authStore';

const getHeaders = () => {
  const token = useAuthStore.getState().token;
    return token ? { Authorization: `Bearer ${token}` } : {};
    };

    export const useNotificationStore = create((set) => ({
      notifications: [],
        unreadCount:   0,

          fetch: async () => {
              try {
                    const { data } = await axios.get('/api/notifications', {
                            headers: getHeaders(),
                                  });
                                        const notifs = data.data || [];
                                              set({
                                                      notifications: notifs,
                                                              unreadCount:   notifs.filter((n) => !n.isRead).length,
                                                                    });
                                                                        } catch (_) {}
                                                                          },

                                                                            markRead: async (id) => {
                                                                                await axios.put(`/api/notifications/${id}/read`, {}, { headers: getHeaders() });
                                                                                    set((s) => ({
                                                                                          notifications: s.notifications.map((n) =>
                                                                                                  n._id === id ? { ...n, isRead: true } : n
                                                                                                        ),
                                                                                                              unreadCount: Math.max(0, s.unreadCount - 1),
                                                                                                                  }));
                                                                                                                    },
                                                                                                                    }));