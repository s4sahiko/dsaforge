import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Login() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      style={{ maxWidth: '480px', margin: '40px auto 120px' }}
    >
      <div className="premium-box" style={{ padding: '40px' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '8px' }}>Welcome Back</h2>
        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '32px' }}>Log in to your account to continue</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500 }}>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-primary)', outline: 'none' }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500 }}>Password</label>
              <a href="#" style={{ color: 'var(--accent-primary)', fontSize: '12px', textDecoration: 'none' }}>Forgot Password?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-primary)', outline: 'none' }} 
            />
          </div>
          
          <button type="button" className="btn btn-primary" style={{ padding: '16px', marginTop: '16px' }}>
            Log In
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-secondary)', fontSize: '14px' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 500 }}>Sign up free</Link>
        </p>
      </div>
    </motion.section>
  );
}
