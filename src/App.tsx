import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './App.css';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import MasterClass from './pages/MasterClass';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Techies from './pages/Techies';
import Footer from './components/Footer';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Main Content Area */}
        <main className="main-content">
          
          {/* Top Navigation Header */}
          <header className={`header ${isHeaderVisible ? '' : 'header-hidden'}`}>
            <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              DSA Forge<span className="logo-dot">.</span>
            </Link>
            
            <nav className="top-nav desktop-only">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Home</NavLink>
              <NavLink to="/programs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Programs</NavLink>
              <NavLink to="/master-class" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Master Class</NavLink>
              <NavLink to="/how-we-work" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>How We Work</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
            </nav>

            <div className="header-actions">
              <Link to="/login" className="btn btn-outline desktop-only" style={{ textDecoration: 'none' }}>Log In</Link>
              <Link to="/signup" className="btn btn-primary desktop-only" style={{ textDecoration: 'none' }}>Sign Up</Link>
              
              <button 
                className="mobile-menu-btn" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none', padding: '4px' }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </header>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay">
              <nav className="mobile-nav">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)} end>Home</NavLink>
                <NavLink to="/programs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Programs</NavLink>
                <NavLink to="/master-class" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Master Class</NavLink>
                <NavLink to="/how-we-work" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>How We Work</NavLink>
                <NavLink to="/techies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Meet our Techies</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
                  <Link to="/login" className="btn btn-outline" style={{ textDecoration: 'none', justifyContent: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
                  <Link to="/signup" className="btn btn-primary" style={{ textDecoration: 'none', justifyContent: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                </div>
              </nav>
            </div>
          )}

          <div className="page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/master-class" element={<MasterClass />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/techies" element={<Techies />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
