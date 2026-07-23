export default function BudgetBar({ allocated, spent, committed, label }) {
      const pct     = Math.min(Math.round(((spent + committed) / allocated) * 100), 100);
        const spentPct = Math.min(Math.round((spent / allocated) * 100), 100);
          const color   = pct > 90 ? '#E84545' : pct > 70 ? '#F5A623' : '#00C37B';

            return (
                <div style={{ marginBottom: 16 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                              <span style={{ fontSize: 12, fontWeight: 500 }}>{label}</span>
                                      <span style={{ fontSize: 12, fontWeight: 700, color }}>{pct}%</span>
                                            </div>
                                                  <div style={{ background: '#1E2D45', borderRadius: 6, height: 8, position: 'relative' }}>
                                                          <div style={{ width: `${pct}%`, background: color + '44', height: '100%', borderRadius: 6, position: 'absolute' }} />
                                                                  <div style={{ width: `${spentPct}%`, background: color, height: '100%', borderRadius: 6, position: 'absolute' }} />
                                                                        </div>
                                                                            </div>
                                                                              );
                                                                              }
