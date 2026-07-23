import { getInitials } from '../../utils/roleHelpers';

export default function Avatar({ name, size = 36, bg = '#00C37B', src }) {
  if (src) {
      return (
            <img
                    src={src}
                            alt={name}
                                    style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                                          />
                                              );
                                                }
                                                  return (
                                                      <div style={{
                                                            width:          size,
                                                                  height:         size,
                                                                        borderRadius:   '50%',
                                                                              background:     bg,
                                                                                    display:        'flex',
                                                                                          alignItems:     'center',
                                                                                                justifyContent: 'center',
                                                                                                      fontSize:       size * .33,
                                                                                                            fontWeight:     700,
                                                                                                                  color:          '#000',
                                                                                                                        flexShrink:     0,
                                                                                                                              userSelect:     'none',
                                                                                                                                  }}>
                                                                                                                                        {getInitials(name)}
                                                                                                                                            </div>
                                                                                                                                              );
                                                                                                                                              }