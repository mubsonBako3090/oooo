'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
      (set) => ({
            token: null,
                  user:  null,

                        setAuth: (token, user) => set({ token, user }),

                              updateUser: (updates) =>
                                      set((s) => ({ user: { ...s.user, ...updates } })),

                                            logout: () => set({ token: null, user: null }),
                                                }),
                                                    {
                                                          name:    'ksu-auth',
                                                                version: 1,
                                                                    }
                                                                      )
                                                                      );