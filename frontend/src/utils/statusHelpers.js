export const statusMeta = (s) => {
      const map = {
          approved:             { label: 'Approved',            color: '#00C37B', bg: '#00C37B22' },
              pending_hod:          { label: 'Pending HOD',         color: '#F5A623', bg: '#F5A62322' },
                  pending_procurement:  { label: 'Pending Procurement', color: '#F5A623', bg: '#F5A62322' },
                      pending_finance:      { label: 'Pending Finance',     color: '#F5A623', bg: '#F5A62322' },
                          pending_vc:           { label: 'Pending VC',          color: '#3B82F6', bg: '#3B82F622' },
                              rejected:             { label: 'Rejected',            color: '#E84545', bg: '#E8454522' },
                                  draft:                { label: 'Draft',               color: '#6B7A99', bg: '#1E2D45'   },
                                      issued:               { label: 'Issued',              color: '#00C37B', bg: '#00C37B22' },
                                          delivered:            { label: 'Delivered',           color: '#A855F7', bg: '#A855F722' },
                                              acknowledged:         { label: 'Acknowledged',        color: '#3B82F6', bg: '#3B82F622' },
                                                  closed:               { label: 'Closed',              color: '#6B7A99', bg: '#1E2D45'   },
                                                    };
                                                      return map[s] || { label: s, color: '#6B7A99', bg: '#1E2D45' };
                                                      };

                                                      export const priorityColor = (p) => ({
                                                        urgent: '#E84545',
                                                          high:   '#F5A623',
                                                            medium: '#3B82F6',
                                                              low:    '#00C37B',
                                                              }[p] || '#6B7A99');
