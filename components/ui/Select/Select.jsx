import styles from './Select.module.css';

export default function Select({ label, error, children, ...props }) {
  return (
      <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
                  <select
                          {...props}
                                  className={[styles.select, error ? styles.error : ''].join(' ')}
                                        >
                                                {children}
                                                      </select>
                                                            {error && <span className={styles.errorMsg}>{error}</span>}
                                                                </div>
                                                                  );
                                                                  }