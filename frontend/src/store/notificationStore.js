import { create } from 'zustand';
import api from '../services/api';

export const useNotificationStore = create((set) => ({
  notifications: [],
    unreadCount:   0,

      fetch: async () => {
          try {
                const { data } = await api.get('/notifications');
                      const notifs   = data.data || [];
                            set({
                                    notifications: notifs,
                                            unreadCount:   notifs.filter((n) => !n.is_read).length,
                                                  });
                                                      } catch (_) {}
                                                        },

                                                          markRead: async (id) => {
                                                              await api.put(`/notifications/${id}/read`);
                                                                  set((s) => ({
                                                                        notifications: s.notifications.map((n) =>
                                                                                n.id === id ? { ...n, is_read: true } : n
                                                                                      ),
                                                                                            unreadCount: Math.max(0, s.unreadCount - 1),
                                                                                                }));
                                                                                                  },

                                                                                                    markAllRead: async () => {
                                                                                                        await api.put('/notifications/read-all');
                                                                                                            set((s) => ({
                                                                                                                  notifications: s.notifications.map((n) => ({ ...n, is_read: true })),
                                                                                                                        unreadCount:   0,
                                                                                                                            }));
                                                                                                                              },
                                                                                                                              }));