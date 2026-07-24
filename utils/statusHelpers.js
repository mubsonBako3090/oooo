export const statusMeta = (s) => {
      const map = {
          approved:            { label: 'Approved',            color: 'success' },
              pending_hod:         { label: 'Pending HOD',         color: 'warning' },
                  pending_procurement: { label: 'Pending Procurement', color: 'warning' },
                      pending_finance:     { label: 'Pending Finance',     color: 'warning' },
                          pending_vc:          { label: 'Pending VC',          color: 'primary' },
                              rejected:            { label: 'Rejected',            color: 'danger'  },
                                  draft:               { label: 'Draft',               color: 'secondary'},
                                      issued:              { label: 'Issued',              color: 'success' },
                                          acknowledged:        { label: 'Acknowledged',        color: 'primary' },
                                              delivered:           { label: 'Delivered',           color: 'info'    },
                                                  closed:              { label: 'Closed',              color: 'secondary'},
                                                    };
                                                      return map[s] || { label: s, color: 'secondary' };
                                                      };

                                                      export const priorityMeta = (p) => {
                                                        const map = {
                                                            urgent: { label: 'Urgent', color: 'danger'  },
                                                                high:   { label: 'High',   color: 'warning' },
                                                                    medium: { label: 'Medium', color: 'primary' },
                                                                        low:    { label: 'Low',    color: 'success' },
                                                                          };
                                                                            return map[p] || { label: p, color: 'secondary' };
                                                                            };
