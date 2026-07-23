export default function Button({
      children, onClick, variant = 'primary',
        size = 'md', disabled = false, type = 'button',
          fullWidth = false, style = {},
          }) {
            const base = {
                border:      'none',
                    borderRadius: 8,
                        cursor:      disabled ? 'not-allowed' : 'pointer',
                            fontFamily:  'Sora, sans-serif',
                                fontWeight:  600,
                                    transition:  'all .2s',
                                        opacity:     disabled ? .5 : 1,
                                            width:       fullWidth ? '100%' : 'auto',
                                                display:     'inline-flex',
                                                    alignItems:  'center',
                                                        justifyContent: 'center',
                                                            gap:         6,
                                                              };

                                                                const sizes = {
                                                                    sm: { fontSize: 12, padding: '6px 14px' },
                                                                        md: { fontSize: 13, padding: '10px 20px' },
                                                                            lg: { fontSize: 15, padding: '13px 28px' },
                                                                              };

                                                                                const variants = {
                                                                                    primary: { background: '#00C37B', color: '#000' },
                                                                                        danger:  { background: '#E84545', color: '#fff' },
                                                                                            ghost:   { background: 'transparent', color: '#E8EDF5', border: '1px solid #1E2D45' },
                                                                                                gold:    { background: '#F5A623', color: '#000' },
                                                                                                    blue:    { background: '#3B82F6', color: '#fff' },
                                                                                                        dark:    { background: '#1A2235', color: '#E8EDF5', border: '1px solid #1E2D45' },
                                                                                                          };

                                                                                                            return (
                                                                                                                <button
                                                                                                                      type={type}
                                                                                                                            onClick={disabled ? undefined : onClick}
                                                                                                                                  style={{ ...base, ...sizes[size], ...variants[variant], ...style }}
                                                                                                                                      >
                                                                                                                                            {children}
                                                                                                                                                </button>
                                                                                                                                                  );
                                                                                                                                                  }
