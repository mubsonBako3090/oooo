export default function Select({ label, error, children, ...props }) {
      return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {label && (
                        <label style={{
                                  fontSize:      12,
                                            color:         '#6B7A99',
                                                      fontWeight:    600,
                                                                textTransform: 'uppercase',
                                                                          letterSpacing: .5,
                                                                                  }}>
                                                                                            {label}
                                                                                                    </label>
                                                                                                          )}
                                                                                                                <select
                                                                                                                        {...props}
                                                                                                                                style={{
                                                                                                                                          background:   '#111827',
                                                                                                                                                    border:       `1px solid ${error ? '#E84545' : '#1E2D45'}`,
                                                                                                                                                              borderRadius: 8,
                                                                                                                                                                        padding:      '10px 14px',
                                                                                                                                                                                  color:        '#E8EDF5',
                                                                                                                                                                                            fontSize:     14,
                                                                                                                                                                                                      outline:      'none',
                                                                                                                                                                                                                width:        '100%',
                                                                                                                                                                                                                          cursor:       'pointer',
                                                                                                                                                                                                                                    ...props.style,
                                                                                                                                                                                                                                            }}
                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                          {children}
                                                                                                                                                                                                                                                                </select>
                                                                                                                                                                                                                                                                      {error && (
                                                                                                                                                                                                                                                                              <span style={{ fontSize: 12, color: '#E84545' }}>{error}</span>
                                                                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                          }
