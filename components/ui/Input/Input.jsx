import styles from './Input.module.css';

export default function Input({ label, error, icon, ...props }) {
  return (
      <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
                  <div className={styles.inputWrapper}>
                          {icon && <i className={`bi ${icon} ${styles.icon}`} />}
                                  <input
                                            {...props}
                                                      className={[
                                                                  styles.input,
                                                                              error ? styles.error : '',
                                                                                          icon  ? styles.withIcon : '',
                                                                                                    ].join(' ')}
                                                                                                            />
                                                                                                                  </div>
                                                                                                                        {error && <span className={styles.errorMsg}>{error}</span>}
                                                                                                                            </div>
                                                                                                                              );
                                                                                                                              }