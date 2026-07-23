import { useEffect } from 'react';
import Button from './Button';

export default function Modal({ open, onClose, title, children, width = 500 }) {
  useEffect(() => {
      const handler = (e) => e.key === 'Escape' && onClose?.();
          document.addEventListener('keydown', handler);
              return () => document.removeEventListener('keydown', handler);
                }, [onClose]);

                  if (!open) return null;

                    return (
                        <div
                              onClick={onClose}
                                    style={{
                                            position:       'fixed',
                                                    inset:          0,
                                                            background:     'rgba(0,0,0,.7)',
                                                                    display:        'flex',
                                                                            alignItems:     'center',
                                                                                    justifyContent: 'center',
                                                                                            zIndex:         1000,
                                                                                                    padding:        20,
                                                                                                          }}
                                                                                                              >
                                                                                                                    <div
                                                                                                                            onClick={(e) => e.stopPropagation()}
                                                                                                                                    style={{
                                                                                                                                              background:   '#1A2235',
                                                                                                                                                        border:       '1px solid #1E2D45',
                                                                                                                                                                  borderRadius: 16,
                                                                                                                                                                            padding:      28,
                                                                                                                                                                                      width:        '100%',
                                                                                                                                                                                                maxWidth:     width,
                                                                                                                                                                                                          maxHeight:    '90vh',
                                                                                                                                                                                                                    overflowY:    'auto',
                                                                                                                                                                                                                              animation:    'fadeIn .2s ease',
                                                                                                                                                                                                                                      }}
                                                                                                                                                                                                                                            >
                                                                                                                                                                                                                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                                                                                                                                                                                                                                              <div style={{ fontSize: 17, fontWeight: 700 }}>{title}</div>
                                                                                                                                                                                                                                                                        <button
                                                                                                                                                                                                                                                                                    onClick={onClose}
                                                                                                                                                                                                                                                                                                style={{ background: 'none', border: 'none', color: '#6B7A99', fontSize: 20, cursor: 'pointer', lineHeight: 1 }}
                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                      ✕
                                                                                                                                                                                                                                                                                                                                </button>
                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                {children}
                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                            }