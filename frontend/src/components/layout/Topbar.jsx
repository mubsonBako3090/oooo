import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const TITLES = {
  '/':             'Dashboard',
    '/requisitions': 'Requisitions',
      '/approvals':    'Approvals Queue',
        '/vendors':      'Vendor Directory',
          '/lpo':          'LPO & Orders',
            '/budget':       'Budget Tracker',
              '/reports':      'Reports & Analytics',
                '/audit':        'Audit Trail',
                  '/settings':     'System Settings',
                  };

                  export default function Topbar() {
                    const { pathname } = useLocation();
                      const { user }     = useAuthStore();
                        const navigate     = useNavigate();

                          const title = TITLES[pathname] ||
                              (pathname.includes('/requisitions/') ? 'Requisition Detail' :
                                   pathname.includes('/lpo/')          ? 'LPO Document'       :
                                        pathname.includes('/vendors/')      ? 'Vendor Detail'      : 'KSU Procurement');

                                          return (
                                              <header style={{
                                                    background:    '#111827',
                                                          borderBottom:  '1px solid #1E2D45',
                                                                padding:       '15px 28px',
                                                                      display:       'flex',
                                                                            alignItems:    'center',
                                                                                  justifyContent:'space-between',
                                                                                        position:      'sticky',
                                                                                              top:           0,
                                                                                                    zIndex:        10,
                                                                                                        }}>
                                                                                                              <div>
                                                                                                                      <div style={{ fontSize: 17, fontWeight: 700, color: '#E8EDF5' }}>{title}</div>
                                                                                                                              <div style={{ fontSize: 11, color: '#6B7A99' }}>
                                                                                                                                        Kaduna State University • FY {new Date().getFullYear()}
                                                                                                                                                </div>
                                                                                                                                                      </div>

                                                                                                                                                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                                                                                                                                    {user?.role === 'requester' && (
                                                                                                                                                                              <button
                                                                                                                                                                                          onClick={() => navigate('/requisitions/new')}
                                                                                                                                                                                                      style={{
                                                                                                                                                                                                                    background:   '#00C37B',
                                                                                                                                                                                                                                  border:       'none',
                                                                                                                                                                                                                                                borderRadius: 8,
                                                                                                                                                                                                                                                              padding:      '8px 16px',
                                                                                                                                                                                                                                                                            color:        '#000',
                                                                                                                                                                                                                                                                                          fontWeight:   700,
                                                                                                                                                                                                                                                                                                        fontSize:     13,
                                                                                                                                                                                                                                                                                                                      cursor:       'pointer',
                                                                                                                                                                                                                                                                                                                                    fontFamily:   'Sora, sans-serif',
                                                                                                                                                                                                                                                                                                                                                }}
                                                                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                                                                      + New Request
                                                                                                                                                                                                                                                                                                                                                                                </button>
                                                                                                                                                                                                                                                                                                                                                                                        )}
                                                                                                                                                                                                                                                                                                                                                                                                <div style={{
                                                                                                                                                                                                                                                                                                                                                                                                          fontSize:     11,
                                                                                                                                                                                                                                                                                                                                                                                                                    color:        '#6B7A99',
                                                                                                                                                                                                                                                                                                                                                                                                                              background:   '#1A2235',
                                                                                                                                                                                                                                                                                                                                                                                                                                        border:       '1px solid #1E2D45',
                                                                                                                                                                                                                                                                                                                                                                                                                                                  borderRadius: 8,
                                                                                                                                                                                                                                                                                                                                                                                                                                                            padding:      '6px 12px',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              🗓 {new Date().toDateString()}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </header>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  }