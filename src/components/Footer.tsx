import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, GitBranch, Home } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const isTechiesPage = location.pathname === '/techies';
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  if (isAuthPage) return null;

  return (
    <footer className="footer-container" style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: 'auto',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col-main" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>DSA-Forge</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                We provide AI-powered mentorship, live doubt-solving, coding contests, and career guidance to help students and professionals achieve their goals.
              </p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>Contact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="mailto:support@aidsaforge.com" style={{ 
                  display: 'flex', alignItems: 'center', gap: '8px', 
                  color: 'var(--accent-primary)', fontSize: '15px',
                  textDecoration: 'none', transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <Mail size={16} /> support@aidsaforge.com
                </a>
                <a href="tel:+919876543210" style={{ 
                  display: 'flex', alignItems: 'center', gap: '8px', 
                  color: 'var(--text-secondary)', fontSize: '15px',
                  textDecoration: 'none', transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <Phone size={16} /> +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>Explore</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'What we offer', path: '/' },
                { name: 'How we work', path: '/how-we-work' },
                { name: 'Meet our Mentors', path: '/techies' },
                { name: 'Submit Query', path: '/contact' },
                { name: 'Privacy Policy', path: '#' }
              ].map((item) => (
                <Link key={item.name} to={item.path} style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
                onClick={() => window.scrollTo(0, 0)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>Our Products</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {['LMS Portal', 'Coding Platform', 'AI Interview Prep', 'Course Subscription'].map((item) => (
                <Link key={item} to="#" style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '15px',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  display: 'inline-block',
                  width: 'fit-content'
                }}
                onClick={() => window.scrollTo(0, 0)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>
            © 2028 DSA-Forge. All rights reserved. Empowering Growth Through AI-Powered Learning!
          </p>
          
          <Link 
            to={isTechiesPage ? '/' : '/techies'} 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="footer-techies-btn"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px', 
              fontSize: '14px', 
              fontWeight: 600,
              color: 'var(--accent-primary)',
              background: 'rgba(250, 204, 21, 0.1)',
              borderRadius: '100px',
              border: '1px solid rgba(250, 204, 21, 0.2)',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(250, 204, 21, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(250, 204, 21, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(250, 204, 21, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {isTechiesPage ? <Home size={16} /> : <GitBranch size={16} />}
            {isTechiesPage ? 'Return to Home' : 'Meet our Techies'}
          </Link>
        </div>
      </div>
    </footer>
  );
}
