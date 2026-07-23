import Button from '../ui/Button';

export default function EmptyState({ icon = '📭', title, message, action, onAction }) {
  return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>{icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{title}</div>
                        {message && <div style={{ color: '#6B7A99', fontSize: 14, marginBottom: 20 }}>{message}</div>}
                              {action && <Button onClick={onAction}>{action}</Button>}
                                  </div>
                                    );
                                    }