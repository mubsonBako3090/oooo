export default function Card({ children, style = {}, onClick, hover = false }) {
      return (
          <div
                onClick={onClick}
                      style={{
                              background:   '#1A2235',
                                      border:       '1px solid #1E2D45',
                                              borderRadius: 14,
                                                      padding:      24,
                                                              cursor:       onClick ? 'pointer' : 'default',
                                                                      transition:   'border-color .2s',
                                                                              ...style,
                                                                                    }}
                                                                                          onMouseEnter={hover ? (e) => e.currentTarget.style.borderColor = '#00C37B' : undefined}
                                                                                                onMouseLeave={hover ? (e) => e.currentTarget.style.borderColor = '#1E2D45' : undefined}
                                                                                                    >
                                                                                                          {children}
                                                                                                              </div>
                                                                                                                );
                                                                                                                }
