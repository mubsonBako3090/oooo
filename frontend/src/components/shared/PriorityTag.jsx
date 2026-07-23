import { priorityColor } from '../../utils/statusHelpers';

export default function PriorityTag({ priority }) {
  const color = priorityColor(priority);
    return (
        <span style={{
              fontSize:      11,
                    fontWeight:    700,
                          color,
                                textTransform: 'uppercase',
                                      letterSpacing: .5,
                                          }}>
                                                {priority}
                                                    </span>
                                                      );
                                                      }