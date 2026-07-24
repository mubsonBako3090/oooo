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
                                          return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
                                          };

                                          export const NAV_BY_ROLE = {
                                            requester: [
                                                { href: '/dashboard',     icon: 'bi-grid',          label: 'Dashboard'    },
                                                    { href: '/requisitions',  icon: 'bi-clipboard-text',label: 'Requisitions' },
                                                      ],
                                                        hod: [
                                                            { href: '/dashboard',     icon: 'bi-grid',          label: 'Dashboard'    },
                                                                { href: '/requisitions',  icon: 'bi-clipboard-text',label: 'Requisitions' },
                                                                    { href: '/approvals',     icon: 'bi-check-circle',  label: 'Approvals'    },
                                                                      ],
                                                                        procurement: [
                                                                            { href: '/dashboard',     icon: 'bi-grid',          label: 'Dashboard'    },
                                                                                { href: '/requisitions',  icon: 'bi-clipboard-text',label: 'Requisitions' },
                                                                                    { href: '/approvals',     icon: 'bi-check-circle',  label: 'Approvals'    },
                                                                                        { href: '/vendors',       icon: 'bi-building',      label: 'Vendors'      },
                                                                                            { href: '/lpo',           icon: 'bi-file-text',     label: 'LPO / Orders' },
                                                                                                { href: '/reports',       icon: 'bi-bar-chart',     label: 'Reports'      },
                                                                                                    { href: '/audit',         icon: 'bi-search',        label: 'Audit Trail'  },
                                                                                                      ],
                                                                                                        finance: [
                                                                                                            { href: '/dashboard',     icon: 'bi-grid',          label: 'Dashboard'    },
                                                                                                                { href: '/approvals',     icon: 'bi-check-circle',  label: 'Approvals'    },
                                                                                                                    { href: '/budget',        icon: 'bi-cash-stack',    label: 'Budget'       },
                                                                                                                        { href: '/reports',       icon: 'bi-bar-chart',     label: 'Reports'      },
                                                                                                                            { href: '/audit',         icon: 'bi-search',        label: 'Audit Trail'  },
                                                                                                                              ],
                                                                                                                                vc: [
                                                                                                                                    { href: '/dashboard',     icon: 'bi-grid',          label: 'Dashboard'    },
                                                                                                                                        { href: '/approvals',     icon: 'bi-check-circle',  label: 'Approvals'    },
                                                                                                                                            { href: '/budget',        icon: 'bi-cash-stack',    label: 'Budget'       },
                                                                                                                                                { href: '/reports',       icon: 'bi-bar-chart',     label: 'Reports'      },
                                                                                                                                                  ],
                                                                                                                                                    admin: [
                                                                                                                                                        { href: '/dashboard',     icon: 'bi-grid',          label: 'Dashboard'    },
                                                                                                                                                            { href: '/requisitions',  icon: 'bi-clipboard-text',label: 'Requisitions' },
                                                                                                                                                                { href: '/approvals',     icon: 'bi-check-circle',  label: 'Approvals'    },
                                                                                                                                                                    { href: '/vendors',       icon: 'bi-building',      label: 'Vendors'      },
                                                                                                                                                                        { href: '/lpo',           icon: 'bi-file-text',     label: 'LPO / Orders' },
                                                                                                                                                                            { href: '/budget',        icon: 'bi-cash-stack',    label: 'Budget'       },
                                                                                                                                                                                { href: '/reports',       icon: 'bi-bar-chart',     label: 'Reports'      },
                                                                                                                                                                                    { href: '/audit',         icon: 'bi-search',        label: 'Audit Trail'  },
                                                                                                                                                                                        { href: '/settings',      icon: 'bi-gear',          label: 'Settings'     },
                                                                                                                                                                                          ],
                                                                                                                                                                                          };
