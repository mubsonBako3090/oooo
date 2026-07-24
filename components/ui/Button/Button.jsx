'use client';
import styles from './Button.module.css';

export default function Button({
  children,
    onClick,
      variant  = 'primary',
        size     = 'md',
          disabled = false,
            type     = 'button',
              fullWidth= false,
                loading  = false,
                  icon,
                  }) {
                    return (
                        <button
                              type={type}
                                    onClick={disabled || loading ? undefined : onClick}
                                          disabled={disabled || loading}
                                                className={[
                                                        styles.btn,
                                                                styles[variant],
                                                                        styles[size],
                                                                                fullWidth ? styles.fullWidth : '',
                                                                                        loading   ? styles.loading   : '',
                                                                                              ].join(' ')}
                                                                                                  >
                                                                                                        {loading && <span className={styles.spinner} />}
                                                                                                              {icon && !loading && <i className={`bi ${icon}`} />}
                                                                                                                    {children}
                                                                                                                        </button>
                                                                                                                          );
                                                                                                                          }