export default function Spinner({ size = 24, color = '#00C37B' }) {
      return (
          <div style={{
                width:        size,
                      height:       size,
                            border:       `3px solid #1E2D45`,
                                  borderTop:    `3px solid ${color}`,
                                        borderRadius: '50%',
                                              animation:    'spin .7s linear infinite',
                                                    flexShrink:   0,
                                                        }} />
                                                          );
                                                          }
