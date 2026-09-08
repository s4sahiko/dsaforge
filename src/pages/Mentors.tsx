import { motion } from 'framer-motion';
import { Star, Trophy, Brain, MonitorPlay, ExternalLink } from 'lucide-react';
import neeteshImg from '../assets/mentors/Neetesh.png';
import himanshuImg from '../assets/mentors/Himanshu.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Mentors() {
  return (
    <motion.section
      id="mentors"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      style={{ marginBottom: '80px', marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="section-title" style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
          Meet Our Mentors
        </h2>
        <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '18px', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
          Learn from industry experts who bring real-world experience and passion to guide your journey
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1100px', width: '100%' }}>
        
        {/* Mentor 1: Neetesh Parashar */}
        <motion.div 
          className="glass-panel mentor-card" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mentor-img-wrapper">
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#000'
            }}>
              <img src={neeteshImg} alt="Neetesh Parashar" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
            </div>
          </div>
          
          <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Neetesh Parashar</h3>
          <p style={{ color: '#ffff00', fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Advanced DSA & AI Trainer</p>
          
          <p className="mentor-desc">
            Passionate Data Structures & Algorithms Trainer helping students master advanced concepts with AI integration
          </p>
          
          <div className="mentor-stats-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
              <Star size={16} color="#fbbf24" fill="#fbbf24" /> <span style={{color: '#fff'}}>4.8</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <Trophy size={16} color="#ffffff" /> 8+ Years
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <Trophy size={16} color="#ffffff" /> Expert Trainer
              </div>
            </div>
          </div>
          
          <a href="https://www.linkedin.com/in/neetesh-parashar-1441121ab/" target="_blank" rel="noopener noreferrer" className="icon-btn" style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            color: '#fff',
            marginTop: 'auto'
          }}>
            <ExternalLink size={18} />
          </a>
        </motion.div>

        {/* Mentor 2: Himanshu Sharma */}
        <motion.div 
          className="glass-panel mentor-card" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mentor-img-wrapper">
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#000'
            }}>
              <img src={himanshuImg} alt="Himanshu Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
            </div>
          </div>
          
          <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Himanshu Sharma</h3>
          <p style={{ color: '#ffff00', fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Full Stack & System Design Expert</p>
          
          <p className="mentor-desc">
            Full Stack Developer building responsive, scalable solutions with 7+ years of industry experience
          </p>
          
          <div className="mentor-stats-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
              <Star size={16} color="#fbbf24" fill="#fbbf24" /> <span style={{color: '#fff'}}>4.9</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <MonitorPlay size={16} color="#ffffff" /> 7+ years
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <Trophy size={16} color="#ffffff" /> Expert
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <Brain size={16} color="#ffffff" /> Ex-Microsoft
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <MonitorPlay size={16} color="#ffffff" /> DSA Trainer
              </div>
            </div>
          </div>
          
          <a href="https://www.linkedin.com/in/himanshu-sharma/" target="_blank" rel="noopener noreferrer" className="icon-btn" style={{ 
            background: 'rgba(255, 255, 255, 0.05)', 
            border: '1px solid rgba(255, 255, 255, 0.1)', 
            color: '#fff',
            marginTop: 'auto'
          }}>
            <ExternalLink size={18} />
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}
