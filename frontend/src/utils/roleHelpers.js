export const ROLE_LABELS = {
      requester:   'Requester',
        hod:         'Head of Department',
          procurement: 'Procurement Officer',
            finance:     'Finance / Bursar',
              vc:          'Vice Chancellor',
                admin:       'System Administrator',
                };

                export const canApprove = (userRole, reqStatus) => {
                  const map = {
                      hod:         'pending_hod',
                          procurement: 'pending_procurement',
                              finance:     'pending_finance',
                                  vc:          'pending_vc',
                                    };
                                      return map[userRole] === reqStatus;
                                      };

                                      export const getInitials = (name) => {
                                        if (!name) return '?';
                                          return name
                                              .split(' ')
                                                  .map((w) => w[0])
                                                      .slice(0, 2)
                                                          .join('')
                                                              .toUpperCase();
                                                              };

                                                              export const NAV_BY_ROLE = {
                                                                requester: [
                                                                    { to: '/',             icon: '⊞', label: 'Dashboard'     },
                                                                        { to: '/requisitions', icon: '📋', label: 'Requisitions'  },
                                                                          ],
                                                                            hod: [
                                                                                { to: '/',             icon: '⊞', label: 'Dashboard'     },
                                                                                    { to: '/requisitions', icon: '📋', label: 'Requisitions'  },
                                                                                        { to: '/approvals',    icon: '✓',  label: 'Approvals'     },
                                                                                          ],
                                                                                            procurement: [
                                                                                                { to: '/',             icon: '⊞', label: 'Dashboard'     },
                                                                                                    { to: '/requisitions', icon: '📋', label: 'Requisitions'  },
                                                                                                        { to: '/approvals',    icon: '✓',  label: 'Approvals'     },
                                                                                                            { to: '/vendors',      icon: '🏢', label: 'Vendors'       },
                                                                                                                { to: '/lpo',          icon: '📄', label: 'LPO / Orders'  },
                                                                                                                    { to: '/reports',      icon: '📊', label: 'Reports'       },
                                                                                                                        { to: '/audit',        icon: '🔍', label: 'Audit Trail'   },
                                                                                                                          ],
                                                                                                                            finance: [
                                                                                                                                { to: '/',             icon: '⊞', label: 'Dashboard'     },
                                                                                                                                    { to: '/approvals',    icon: '✓',  label: 'Approvals'     },
                                                                                                                                        { to: '/budget',       icon: '₦',  label: 'Budget'        },
                                                                                                                                            { to: '/reports',      icon: '📊', label: 'Reports'       },
                                                                                                                                                { to: '/audit',        icon: '🔍', label: 'Audit Trail'   },
                                                                                                                                                  ],
                                                                                                                                                    vc: [
                                                                                                                                                        { to: '/',             icon: '⊞', label: 'Dashboard'     },
                                                                                                                                                            { to: '/approvals',    icon: '✓',  label: 'Approvals'     },
                                                                                                                                                                { to: '/budget',       icon: '₦',  label: 'Budget'        },
                                                                                                                                                                    { to: '/reports',      icon: '📊', label: 'Reports'       },
                                                                                                                                                                      ],
                                                                                                                                                                        admin: [
                                                                                                                                                                            { to: '/',             icon: '⊞', label: 'Dashboard'     },
                                                                                                                                                                                { to: '/requisitions', icon: '📋', label: 'Requisitions'  },
                                                                                                                                                                                    { to: '/approvals',    icon: '✓',  label: 'Approvals'     },
                                                                                                                                                                                        { to: '/vendors',      icon: '🏢', label: 'Vendors'       },
                                                                                                                                                                                            { to: '/lpo',          icon: '📄', label: 'LPO / Orders'  },
                                                                                                                                                                                                { to: '/budget',       icon: '₦',  label: 'Budget'        },
                                                                                                                                                                                                    { to: '/reports',      icon: '📊', label: 'Reports'       },
                                                                                                                                                                                                        { to: '/audit',        icon: '🔍', label: 'Audit Trail'   },
                                                                                                                                                                                                            { to: '/settings',     icon: '⚙',  label: 'Settings'      },
                                                                                                                                                                                                              ],
                                                                                                                                                                                                              };
