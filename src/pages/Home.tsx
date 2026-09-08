import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Boxes, LayoutGrid, Diamond, Network, Quote } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SoftAurora from '../components/SoftAurora/SoftAurora';
import Mentors from './Mentors';
import jainLogo from '../assets/trusted/Jain-logo.png';
import kceLogo from '../assets/trusted/KCE-logo-color.png';
import babuLogo from '../assets/trusted/babubanarasi.png';
import baddiLogo from '../assets/trusted/baddi.png';
import lpuLogo from '../assets/trusted/lpulogo.png';
import nimsLogo from '../assets/trusted/nims logo.png';
import skcetLogo from '../assets/trusted/skcet-logo.png';
import sriEshwarLogo from '../assets/trusted/sri eshwar.png';
import adaniLogo from '../assets/placement/Adani_logo_2012.svg.png';
import coindcxLogo from '../assets/placement/CoinDCX-Logo.png';
import cloudLogo from '../assets/placement/cloud.png';
import deliveryLogo from '../assets/placement/delivery.png';
import indusValleyLogo from '../assets/placement/indus valley.png';
import snapdealLogo from '../assets/placement/snapdeal.png';
import transunionLogo from '../assets/placement/transunion.png';
import vitraAiLogo from '../assets/placement/vitra_ai_log.png';
import boyStudyingImg from '../assets/boy_studying.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Animated Counter Component
const Counter = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Full Screen Soft Aurora Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -2 }}>
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#facc15" // Yellow/Gold for DSA Forge theme
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      {/* Overlay to ensure text readability globally */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.7) 100%)', zIndex: -1 }}></div>

      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '40px',
          padding: '0 20px'
        }}
      >

        {/* Content Box */}
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: '80px 40px',
          width: '100%',
          maxWidth: '1200px',
          textAlign: 'center'
        }}>
          {/* Blurred Background Layer */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: -1,
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(0,0,0,0.15)',
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 65%)'
          }} />
          <motion.div variants={fadeUp} style={{ marginBottom: '24px', position: 'relative', zIndex: 1 }}>
            <span style={{ background: '#fff', color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginRight: '12px' }}>NEW</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '15px', fontWeight: 500 }}>DSA Forge Platform</span>
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeUp} style={{ maxWidth: '1000px', letterSpacing: '-1px', position: 'relative', zIndex: 1 }}>
            Transform Learning into Success with <span style={{ textDecoration: 'underline', textDecorationColor: '#ffff00', textDecorationThickness: '3px', textUnderlineOffset: '8px', filter: 'drop-shadow(0 0 8px rgba(255,255,0,0.5))' }}>DSA-Forge</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp} style={{ color: 'rgba(255, 255, 255, 0.95)', position: 'relative', zIndex: 1 }}>
            Your end-to-end career partner to master DSA, OOPs, Full Stack, AI/ML, System Design, Cloud Computing, DevOps, Cyber Security, Data Science, and more to land your dream tech job.
          </motion.p>
          <motion.p className="hero-subtitle" variants={fadeUp} style={{ marginBottom: '40px', color: 'rgba(255, 255, 255, 0.95)', position: 'relative', zIndex: 1 }}>
            Learn from expert mentors, solve problems with AI assistance &amp; take the right step toward a successful career!
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '16px', position: 'relative', zIndex: 1 }}>
            <Link to="/programs" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px', background: '#fff' }}>
              Get started
            </Link>
            <Link to="/master-class" className="btn btn-outline" style={{ padding: '16px 32px', fontSize: '18px', background: 'rgba(255,255,255,0.05)' }}>
              Learn more
            </Link>
          </motion.div>
        </div>
        

      </motion.section>

      {/* Blurred Lower Section */}
      <div style={{ position: 'relative', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
        {/* Glassmorphic Background Layer */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(5, 5, 5, 0.5)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          zIndex: 0,
          borderTop: '1px solid rgba(255,255,255,0.03)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 100%)'
        }} />
        
        {/* Content Wrapper */}
        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Featured Topics Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        style={{ maxWidth: '1000px', width: '100%', margin: '60px auto 80px', padding: '0 20px' }}
      >
        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', textAlign: 'left', paddingLeft: '8px' }}>Featured</h3>
        <div className="featured-grid">
          {[
            { title: 'DSA', icon: Boxes, color: '16, 185, 129' },
            { title: 'Low Level Design (LLD)', icon: LayoutGrid, color: '212, 185, 140' },
            { title: 'All Problems', icon: Diamond, color: '168, 85, 247' },
            { title: 'OOPS', icon: Network, color: '236, 72, 153' }
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ 
              borderRadius: '24px', 
              padding: '24px 16px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.05)',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/programs');
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = `rgba(${item.color}, 0.4)`;
              e.currentTarget.style.boxShadow = `0 10px 30px rgba(${item.color}, 0.1)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{ 
                width: '100%', 
                aspectRatio: '16/9', 
                background: `linear-gradient(135deg, rgba(${item.color}, 0.25) 0%, rgba(${item.color}, 0.05) 100%)`, 
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
                border: `1px solid rgba(${item.color}, 0.2)`,
                backdropFilter: 'blur(10px)'
              }}>
                <item.icon size={36} color="#fff" />
              </div>
              <div style={{ fontWeight: 600, fontSize: '16px', color: '#fff', textAlign: 'center' }}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="stats-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ marginTop: 0 }}
      >
        <motion.div className="stat-card glass-panel" variants={fadeUp}>
          <div className="stat-number"><Counter end={95} />%</div>
          <div className="stat-label">Students Learning with AI</div>
        </motion.div>
        <motion.div className="stat-card glass-panel" variants={fadeUp}>
          <div className="stat-number"><Counter end={5000} />+</div>
          <div className="stat-label">Got Clarity After Mentorship</div>
        </motion.div>
        <motion.div className="stat-card glass-panel" variants={fadeUp}>
          <div className="stat-number"><Counter end={85} />%</div>
          <div className="stat-label">Interview Confidence Boosted</div>
        </motion.div>
      </motion.section>

      {/* Master Class Offer Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '0 20px',
          margin: '60px auto 100px',
          position: 'relative'
        }}
      >
        {/* Content Box */}
        <div className="glass-hero" style={{ 
          position: 'relative', 
          zIndex: 10, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '100%',
          maxWidth: '1000px',
          textAlign: 'center'
        }}>
          
          <motion.div variants={fadeUp} style={{ marginBottom: '24px' }}>
            <span style={{ background: '#fff', color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginRight: '12px' }}>OFFER</span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '15px', fontWeight: 500 }}>Limited Time Master Class</span>
          </motion.div>

          <motion.h2 variants={fadeUp} style={{ fontSize: '42px', fontWeight: 700, textAlign: 'center', marginBottom: '16px', lineHeight: 1.2 }}>
            Learn a Core Tech Topic in Just 2 Hours!
          </motion.h2>
          
          <motion.p variants={fadeUp} style={{ fontSize: '24px', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            Starting at <span style={{ color: '#fff', fontWeight: 700 }}>just ₹49</span>
          </motion.p>

          <motion.div variants={fadeUp} className="glass-panel masterclass-stats">
            <div style={{ textAlign: 'center' }}>
              <div className="masterclass-stats-number">50+</div>
              <div className="masterclass-stats-label">Masterclasses</div>
            </div>
            <div className="desktop-only" style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div className="masterclass-stats-number">5K+</div>
              <div className="masterclass-stats-label">Students</div>
            </div>
            <div className="desktop-only" style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div className="masterclass-stats-number">4.8</div>
              <div className="masterclass-stats-label">Rating ★</div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="two-col-grid masterclass-list">
            {[
              'Expert-led live sessions',
              'Interactive Q&A sessions',
              'Hands-on practice exercises',
              'Certificate of completion',
              'Lifetime access to recordings',
              'Community support'
            ].map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left' }}>
                <CheckCircle size={22} color="#fff" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <Link to="/master-class" className="btn btn-primary" style={{ 
              background: '#fff',
              color: '#000',
              padding: '16px 40px', 
              fontSize: '18px', 
              borderRadius: '100px',
              border: 'none',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              Join Master Class Now <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Mentors Section added directly to Home Page */}
      <Mentors />
      
      {/* Trusted By Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp} 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          width: '100%', 
          maxWidth: '1200px',
          margin: '0 auto 60px',
          padding: '0 20px'
        }}
      >
        <div className="glass-panel" style={{ padding: '80px 60px', borderRadius: '32px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '60px' }}>
            Trusted by top educational institutions
          </p>
          <div className="logo-grid">
            {[
              { src: jainLogo, alt: 'Jain University' },
              { src: kceLogo, alt: 'KCE' },
              { src: babuLogo, alt: 'Babu Banarasi Das' },
              { src: baddiLogo, alt: 'Baddi University' },
              { src: lpuLogo, alt: 'LPU' },
              { src: nimsLogo, alt: 'NIMS' },
              { src: skcetLogo, alt: 'SKCET' },
              { src: sriEshwarLogo, alt: 'Sri Eshwar' }
            ].map((logo, idx) => (
              <img 
                key={idx} 
                src={logo.src} 
                alt={logo.alt} 
                style={{ 
                  height: '90px', 
                  maxWidth: '100%',
                  objectFit: 'contain', 
                  transition: 'transform 0.3s ease',
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leading Placement Partners Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp} 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          width: '100%', 
          maxWidth: '1200px',
          margin: '0 auto 100px',
          padding: '0 20px'
        }}
      >
        <div className="glass-panel" style={{ padding: '80px 60px', borderRadius: '32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>
            Leading Placement Partners
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '60px' }}>
            100+ companies that trust our students
          </p>
          <div className="logo-grid">
            {[
              { src: adaniLogo, alt: 'Adani' },
              { src: coindcxLogo, alt: 'CoinDCX' },
              { src: cloudLogo, alt: 'Cloud' },
              { src: deliveryLogo, alt: 'Delivery' },
              { src: indusValleyLogo, alt: 'Indus Valley' },
              { src: snapdealLogo, alt: 'Snapdeal' },
              { src: transunionLogo, alt: 'Transunion' },
              { src: vitraAiLogo, alt: 'Vitra AI' }
            ].map((logo, idx) => (
              <img 
                key={idx} 
                src={logo.src} 
                alt={logo.alt} 
                style={{ 
                  height: '90px', 
                  maxWidth: '100%',
                  objectFit: 'contain', 
                  transition: 'transform 0.3s ease',
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            ))}
          </div>
        </div>
      </motion.section>
      {/* Success Stories Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer} 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          width: '100%', 
          maxWidth: '1200px',
          margin: '0 auto 100px',
          padding: '0 20px',
          textAlign: 'center'
        }}
      >
        <motion.h2 variants={fadeUp} style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
          Our Success Stories
        </motion.h2>
        <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '60px' }}>
          From doubt-solving to dream careers — here's how our students transformed their journey!
        </motion.p>

        <motion.div variants={fadeUp} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px'
        }}>
          {/* Story 1 */}
          <div className="glass-panel" style={{ 
            padding: '40px', 
            borderRadius: '24px', 
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(250, 204, 21, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <Quote size={40} color="var(--accent-primary)" style={{ opacity: 0.8 }} />
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--text-primary)', flex: 1 }}>
              "The platform has given me exactly what I needed — personal guidance and real growth. The mentors explain concepts clearly and doubt-solving sessions save time. The AI-powered DSA practice helped me crack Amazon!"
            </p>
            <div>
              <h4 style={{ color: 'var(--accent-primary)', fontSize: '18px', fontWeight: 700, margin: '0 0 4px 0' }}>Yug Dobariya</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>SDE at Amazon</p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="glass-panel" style={{ 
            padding: '40px', 
            borderRadius: '24px', 
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(250, 204, 21, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <Quote size={40} color="var(--accent-primary)" style={{ opacity: 0.8 }} />
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--text-primary)', flex: 1 }}>
              "The online coding contests simulate real interview conditions. The AI feedback helped me improve every time. The resume review made my profile industry-ready!"
            </p>
            <div>
              <h4 style={{ color: 'var(--accent-primary)', fontSize: '18px', fontWeight: 700, margin: '0 0 4px 0' }}>Dev Kardani</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: 0 }}>Software Engineer, Microsoft</p>
            </div>
          </div>
        </motion.div>
      </motion.section>


      {/* Have Questions Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp} 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          width: '100%', 
          maxWidth: '1200px',
          margin: '0 auto 100px',
          padding: '0 20px'
        }}
      >
        <div className="glass-panel contact-box">
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '16px' }}>
              Have Questions? We're Here to Help
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '32px', lineHeight: 1.6 }}>
              Get in touch with us and let's solve your doubts together! Our experts are always ready to guide you.
            </p>
            <div className="contact-img-mobile">
              <img src={boyStudyingImg} alt="Boy studying sketch" style={{ maxWidth: '100%', height: 'auto', maxHeight: '250px', objectFit: 'contain', margin: '0 auto 24px' }} />
            </div>
            <Link 
              to="/contact" 
              className="btn" 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 40px', 
                fontSize: '18px', 
                fontWeight: 700,
                color: '#000',
                background: 'linear-gradient(90deg, #fff, #f0f0f0)',
                borderRadius: '100px',
                border: 'none',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)';
              }}
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
          <div className="contact-img-desktop" style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <img 
              src={boyStudyingImg} 
              alt="Boy studying sketch" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                maxHeight: '350px',
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>
      </motion.section>
        </div>
      </div>
    </>
  );
}
