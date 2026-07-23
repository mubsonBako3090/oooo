import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar  from './Topbar';

export default function PageWrapper() {
  return (
      <div style={{ display: 'flex', minHeight: '100vh', background: '#0B0F1A' }}>
            <Sidebar />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto', minWidth: 0 }}>
                          <Topbar />
                                  <main style={{ flex: 1 }}>
                                            <Outlet />
                                                    </main>
                                                          </div>
                                                              </div>
                                                                );
                                                                }