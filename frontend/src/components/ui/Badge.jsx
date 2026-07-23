import { statusMeta } from '../../utils/statusHelpers';

export default function Badge({ status, label, color, bg }) {
  const meta = status ? statusMeta(status) : { label: label || status, color, bg };
    return (
        <span style={{
              fontSize:      11,
                    fontWeight:    700,
                          padding:       '3px 10px',
                                borderRadius:  20,
                                      letterSpacing: .5,
                                            textTransform: 'uppercase',
                                                  background:    meta.bg    || '#1E2D45',
                                                        color:         meta.color || '#6B7A99',
                                                              whiteSpace:    'nowrap',
                                                                  }}>
                                                                        {meta.label}
                                                                            </span>
                                                                              );
                                                                              }