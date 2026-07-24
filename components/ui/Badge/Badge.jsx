import styles from './Badge.module.css';
import { statusMeta, priorityMeta } from '@/utils/statusHelpers';

export default function Badge({ status, priority, label, variant }) {
  let text  = label;
    let color = variant || 'secondary';

      if (status) {
          const meta = statusMeta(status);
              text  = meta.label;
                  color = meta.color;
                    }

                      if (priority) {
                          const meta = priorityMeta(priority);
                              text  = meta.label;
                                  color = meta.color;
                                    }

                                      return (
                                          <span className={`${styles.badge} ${styles[color]}`}>
                                                {text}
                                                    </span>
                                                      );
                                                      }