import styles from './Card.module.css';

export default function Card({ children, style, className = '', hover = false, onClick }) {
  return (
      <div
            onClick={onClick}
                  style={style}
                        className={[
                                styles.card,
                                        hover    ? styles.hover    : '',
                                                onClick  ? styles.clickable: '',
                                                        className,
                                                              ].join(' ')}
                                                                  >
                                                                        {children}
                                                                            </div>
                                                                              );
                                                                              }