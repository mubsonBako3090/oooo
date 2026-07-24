import styles from './Textarea.module.css';

export default function Textarea({ label, error, ...props }) {
  return (
      <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
                  <textarea
                          {...props}
                                  className={[styles.textarea, error ? styles.error : ''].join(' ')}
                                        />
                                              {error && <span className={styles.errorMsg}>{error}</span>}
                                                  </div>
                                                    );
                                                    }