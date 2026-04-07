import './globals.css';

export const metadata = {
  title: 'Procurement Requisition Portal',
  description: 'Submit and manage purchase requests efficiently',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="procurement-header">
          <nav className="procurement-nav">
            <div className="logo">
              <span className="logo-icon">📦</span>
              <span className="logo-text">Procurement Portal</span>
            </div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/requisitions">My Requisitions</a></li>
              <li><a href="/help">Help</a></li>
            </ul>
          </nav>
        </header>
        
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}