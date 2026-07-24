import styles from './StatCard.module.css';

export default function StatCard({ label, value, sub, accent, icon }) {
  return (
      <div className={styles.card}>
            <div className={styles.top}>
                    <div>
                              <div className={styles.label}>{label}</div>
                                        <div className={styles.value} style={{ color: accent || 'var(--text)' }}>
                                                    {value}
                                                              </div>
                                                                        {sub && <div className={styles.sub}>{sub}</div>}
                                                                                </div>
                                                                                        {icon && (
                                                                                                  <div className={styles.iconBox}>
                                                                                                              <i className={`bi ${icon}`} style={{ fontSize: 22, color: accent || 'var(--muted)' }} />
                                                                                                                        </div>
                                                                                                                                )}
                                                                                                                                      </div>
                                                                                                                                          </div>
                                                                                                                                            );
                                                                                                                                            }