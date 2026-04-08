import React, { useEffect, useRef, useState } from 'react';
import {
  FaTwitter,
  FaTelegramPlane,
  FaDiscord,
  FaCode,
  FaGithub,
  FaFigma,
  FaMobileAlt,
  FaEnvelope,
  FaRobot,
  FaRegFileAlt,
  FaTasks,
  FaHandshake,
  FaUserTie,
  FaLightbulb,
  FaPalette,
  FaComments
} from 'react-icons/fa';
import { FiArrowRight, FiTrendingUp, FiSun, FiMoon } from 'react-icons/fi';

function App() {
  const [theme, setTheme] = useState('dark');
  const [isVietdogeOpen, setIsVietdogeOpen] = useState(false);
  const [isEvofrogOpen, setIsEvofrogOpen] = useState(false);
  const [isTrumpOpen, setIsTrumpOpen] = useState(false);
  const [isAriOpen, setIsAriOpen] = useState(false);
  const [isHumanityOpen, setIsHumanityOpen] = useState(false);
  // Simple intersection observer for scroll animations
  const observerRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '50px' });

    // Use a tiny timeout to ensure DOM paints completely before observing
    const timer = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.animate-on-scroll, .animate-scale');
      hiddenElements.forEach((el) => observer.observe(el));
      
      // Failsafe: instantly show hero section so it never gets stuck invisible
      document.querySelectorAll('#hero .animate-on-scroll, #hero .animate-scale, .profile-card').forEach(el => {
        el.classList.add('visible');
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      {/* Left Column: Sticky Profile */}
      <aside className="left-column">
        <div className="profile-card">
          {/* Decorative Dashed Line / Element */}
          <div className="decorative-dashed"></div>

          <div className="profile-image-container">
            {/* Premium generated avatar for SNOWYY */}
            <img src="/AptosPenguin.png" alt="SNOWYY - Certified CM" />
          </div>

          <h1 className="profile-name">SNOWYY</h1>
          <p className="profile-role">Certified CM & Ambassador</p>

          <p className="profile-bio">
            Specializing in dynamic ecosystem growth, moderating high-volume servers, and fostering loyal holder communities across the Web3 landscape.
          </p>

          <div className="social-links">
            <a href="https://x.com/snow_web" target="_blank" rel="noreferrer" className="social-link" aria-label="X (Twitter)">
              <FaTwitter size={20} />
            </a>
            <a href="https://t.me/YukiBladen" target="_blank" rel="noreferrer" className="social-link" aria-label="Telegram">
              <FaTelegramPlane size={20} />
            </a>
            <a href="mailto:snowcrypt7@gmail.com" className="social-link" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
            
            <button 
              className="social-link" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
              aria-label="Toggle Theme"
              style={{ marginLeft: 'auto', border: '1px solid var(--color-yellow)', color: 'var(--color-yellow)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
        </div>
      </aside>

      {/* Right Column: Scrollable Content */}
      <main className="right-column">

        {/* Section 1: Hero */}
        <section id="hero">
          <h2 className="hero-text animate-on-scroll">
            WEB3 COMMUNITY<br />
            <span className="hero-outline-text">MANAGER & AMBASSADOR</span>
          </h2>
          <p className="hero-subtitle animate-on-scroll delay-1">
            I help Web3 brands grow active communities, increase engagement, maintain safe spaces, and build loyal ecosystems across Telegram, Discord, and X.
          </p>

          <div className="stats-grid animate-on-scroll delay-2">
            <div className="stat-item">
              <h4>+3 Years</h4>
              <p>Experience</p>
            </div>
            <div className="stat-item">
              <h4>+10</h4>
              <p>Communities Managed</p>
            </div>
            <div className="stat-item">
              <h4>+100%</h4>
              <p>Dedication</p>
            </div>
          </div>

          <div className="feature-cards">
            <div className="feature-card animate-scale delay-1">
              <FiTrendingUp size={40} style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }} />
              <h3>Community Growth Strategy</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Fostering organic growth and high engagement in decentralized spaces.</p>
            </div>
            <div className="feature-card animate-scale delay-2">
              <FaMobileAlt size={40} style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }} />
              <h3>Brand Ambassadorship</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Representing and advocating for Web3 brands to build trust and presence.</p>
            </div>
          </div>
        </section>


        {/* Section 3: Experience */}
        <section id="experience">
          <h2 className="section-title animate-on-scroll">My <span>Experience</span></h2>

          <div
            className="case-study-card animate-on-scroll delay-1"
            onClick={() => setIsVietdogeOpen(!isVietdogeOpen)}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              marginBottom: '2rem',
              transition: 'all var(--transition-normal)'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-yellow)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, var(--color-yellow), var(--color-red))'
            }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>$VIETDOGE</h3>
                <p style={{ color: 'var(--color-yellow)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Community Manager & Admin on BSC • 2025</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://x.com/VietDogeToken" target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="social-link" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}>
                  <FaTwitter size={20} />
                </a>
                <a href="https://t.me/+4Q2lFMAFrFhmZWFl" target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="social-link" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}>
                  <FaTelegramPlane size={20} />
                </a>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: isVietdogeOpen ? '3rem' : '1rem', lineHeight: '1.8' }}>
              $VIETDOGE is a coin forged from the chaos of past crypto crashes. It’s all about turning members into real supporters 🫡.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-orange-light)', fontWeight: '600', marginBottom: isVietdogeOpen ? '2.5rem' : '0' }}>
              <FiTrendingUp />
              <span>{isVietdogeOpen ? 'Click to hide Proof of Work' : 'Click to view Proof of Work'}</span>
            </div>

            {isVietdogeOpen && (
              <div style={{ animation: 'fadeIn 0.4s ease-out', borderTop: '1px solid var(--border-hover)', paddingTop: '2.5rem' }}>
                <div style={{ height: 'auto', maxHeight: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                  <img src="/vietdoge.png" alt="Vietdoge Stats Screen" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Before Joining</p>
                    <h4 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>216 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>msgs/day</span></h4>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px dashed var(--color-yellow)' }}>
                    <p style={{ color: 'var(--color-orange-light)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>✅ First Day</p>
                    <h4 style={{ fontSize: '1.8rem', color: 'var(--color-yellow)' }}>734 <span style={{ fontSize: '1rem', color: 'var(--color-orange-dark)', fontWeight: 'normal' }}>msgs</span></h4>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px dashed var(--color-red)' }}>
                    <p style={{ color: 'var(--color-orange-dark)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>✅ Day 2</p>
                    <h4 style={{ fontSize: '1.8rem', color: 'var(--color-red)' }}>1,905 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>msgs</span></h4>
                  </div>
                </div>

                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Beyond the metrics:</h4>
                <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" className="icon-color" /> Helped grow their X account to 7,000+ followers.</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" className="icon-color" /> Created a completely new community culture.</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" className="icon-color" /> Endowed members with daily activities to keep them invested.</li>
                </ul>
              </div>
            )}
          </div>


          <div
            className="case-study-card animate-on-scroll delay-2"
            onClick={() => setIsEvofrogOpen(!isEvofrogOpen)}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '3rem',
              cursor: 'pointer',
              transition: 'all var(--transition-normal)'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-yellow)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '4px',
              background: 'linear-gradient(90deg, var(--color-teal), var(--color-yellow))'
            }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>$EVOFROG</h3>
                <p style={{ color: 'var(--color-yellow)', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>First Admin on SUI • 2025</p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://x.com/Evofrogsui" target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="social-link" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}>
                  <FaTwitter size={20} />
                </a>
                <a href="https://t.me/Evofrogsui" target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="social-link" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-main)' }}>
                  <FaTelegramPlane size={20} />
                </a>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: isEvofrogOpen ? '2rem' : '1rem' }}>
              This isn’t just any project; it’s an evolutionary frog journey from <span style={{ color: 'var(--text-main)' }}>Froakie</span> to <span style={{ color: 'var(--color-yellow)' }}>Frogadier</span> to <span style={{ color: 'var(--color-teal)' }}>Greninja</span>.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-orange-light)', fontWeight: '600', marginBottom: isEvofrogOpen ? '2rem' : '1.5rem' }}>
              <FiTrendingUp />
              <span>{isEvofrogOpen ? 'Click to hide Proof of Work' : 'Click to view Proof of Work'}</span>
            </div>

            {isEvofrogOpen && (
              <div style={{ animation: 'fadeIn 0.4s ease-out', borderTop: '1px solid var(--border-hover)', paddingTop: '2.5rem' }}>
                <div style={{ height: 'auto', maxHeight: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                  <img src="/evofrog.png" alt="Evofrog Admin Screen" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1rem' }}>Key Contributions:</h4>
                <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" className="icon-color" /> Oversaw day-to-day operations across EVOFROG community channels.</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" className="icon-color" /> Ensured smooth communication and member engagement.</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" className="icon-color" /> Supported growth initiatives by keeping the community informed and aligned.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="list-container">
            <div
              className="case-study-card animate-on-scroll delay-3"
              onClick={() => setIsTrumpOpen(!isTrumpOpen)}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                marginBottom: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-yellow)'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Trump Farm Airdrop</h3>
                <span style={{ backgroundColor: 'var(--color-yellow)', color: '#000', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>360K+ Members</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Role: Admin • 2024</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-orange-light)', fontWeight: '600' }}>
                <FiTrendingUp />
                <span>{isTrumpOpen ? 'Click to hide Proof of Work' : 'Click to view Proof of Work'}</span>
              </div>

              {isTrumpOpen && (
                <div style={{ animation: 'fadeIn 0.3s ease-out', marginTop: '2rem', borderTop: '1px solid var(--border-hover)', paddingTop: '1.5rem' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>Managed large-scale community operations for the Trump Farm Airdrop, one of the biggest 360K+ Facebook communities in the space.</p>
                  <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" /> Kept the community organized, positive, and informed during peak airdrop periods.</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" /> Handled high-volume user traffic and maintained communication standards.</li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="case-study-card"
              onClick={() => setIsAriOpen(!isAriOpen)}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                marginBottom: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-yellow)'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Ari Wallet Community Support</h3>
                <span style={{ backgroundColor: 'var(--color-yellow)', color: '#000', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>180K+ Members</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Role: Community Manager • 2024</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-orange-light)', fontWeight: '600' }}>
                <FiTrendingUp />
                <span>{isAriOpen ? 'Click to hide Proof of Work' : 'Click to view Proof of Work'}</span>
              </div>

              {isAriOpen && (
                <div style={{ animation: 'fadeIn 0.3s ease-out', marginTop: '2rem', borderTop: '1px solid var(--border-hover)', paddingTop: '1.5rem' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>Managed daily moderation and member support within a large-scale Web3 community of over 180K+ members.</p>
                  <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" /> Maintained order during high-traffic discussions and enforced community guidelines.</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" /> Ensured a smooth onboarding experience for new users and preserved engagement quality.</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" /> Handled technical inquiries and security concerns across discussions.</li>
                  </ul>
                </div>
              )}
            </div>

            {[
            ].map((item, idx) => (
              <div className="list-item" key={idx}>
                <div className="list-item-content">
                  <h3>{item.role}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <p style={{ fontWeight: '600' }}>{item.company}</p>
                    {item.highlight && <span style={{ backgroundColor: 'var(--color-yellow)', color: '#000', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.highlight}</span>}
                  </div>
                  {item.desc && <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.8rem', lineHeight: '1.6' }}>{item.desc}</p>}
                </div>
                <div className="list-item-meta">
                  <span className="list-item-date">{item.date}</span>
                  <div className="list-item-arrow">
                    <FiArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <a href="/Snowyyy_CV_Resume.pdf" download="Snowyyy_CV_Resume.pdf" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-yellow)',
                fontWeight: '600',
                textDecoration: 'none',
                border: '1px solid var(--color-yellow)',
                padding: '0.8rem 2rem',
                borderRadius: 'var(--radius-md)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-yellow)';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--color-yellow)';
                }}
              >
                See Full Experience <FiArrowRight />
              </a>
            </div>
          </div>
        </section>
        {/* Section: Volunteer Experience */}
        <section id="volunteer">
          <h2 className="section-title">Voluntary <span>Experience</span></h2>
          <div className="list-container">
            <div
              className="case-study-card"
              onClick={() => setIsHumanityOpen(!isHumanityOpen)}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                marginBottom: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-yellow)'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Humanity Protocol Fan Community</h3>
                <span style={{ backgroundColor: 'var(--color-yellow)', color: '#000', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>156K+ Members</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Role: Community Moderator • 2024</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-orange-light)', fontWeight: '600' }}>
                <FiTrendingUp />
                <span>{isHumanityOpen ? 'Click to hide Proof of Work' : 'Click to view Proof of Work'}</span>
              </div>

              {isHumanityOpen && (
                <div style={{ animation: 'fadeIn 0.3s ease-out', marginTop: '2rem', borderTop: '1px solid var(--border-hover)', paddingTop: '1.5rem' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>Supported the management and engagement of a rapidly growing Web3 fan community.</p>
                  <ul style={{ listStyleType: 'none', padding: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" /> Drove conversations, assisted members, and maintained a healthy communication environment.</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><FiArrowRight color="var(--color-yellow)" /> Proactively increased activity while ensuring discussions remained aligned with project messaging.</li>
                  </ul>
                </div>
              )}
            </div>

            {[
              {
                role: "CM Volunteer",
                company: "Lock In Dog",
                date: "2023",
                desc: "Helped maintain a friendly and organized environment. Contributed to day-to-day tasks as needed."
              },
              {
                role: "CM Volunteer",
                company: "Dog With Crown",
                date: "2023",
                desc: "Volunteered to gain hands-on experience in Web3 community building and engagement. Interacted with community members, kept chats active, and maintained a positive environment."
              }
            ].map((item, idx) => (
              <div className="list-item" key={idx}>
                <div className="list-item-content">
                  <h3>{item.role}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <p style={{ fontWeight: '600' }}>{item.company}</p>
                    {item.highlight && <span style={{ backgroundColor: 'var(--color-yellow)', color: '#000', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.highlight}</span>}
                  </div>
                  {item.desc && <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.8rem', lineHeight: '1.6' }}>{item.desc}</p>}
                </div>
                <div className="list-item-meta">
                  <span className="list-item-date">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Certifications */}
        <section id="certifications">
          <h2 className="section-title">My <span>Credentials</span></h2>
          <div className="case-study-card" style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--color-yellow)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div style={{ flex: '1 1 400px' }}>
              <p style={{ color: 'var(--color-yellow)', fontSize: '1rem', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>FeverBee Certificate</p>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--text-main)', marginBottom: '0.5rem', lineHeight: '1.2' }}>Successful Community Management</h3>
              <p style={{ color: 'var(--text-muted)' }}>Issued by Richard Millington • April 20, 2025</p>



              <div style={{ marginTop: '1.5rem' }}>
                <a href="/CM_FeverBee.jpg" download="FeverBee_Certificate.jpg" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-yellow)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: '1px solid var(--color-yellow)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: 'var(--radius-md)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-yellow)';
                    e.currentTarget.style.color = '#000';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-yellow)';
                  }}
                >
                  Download Certificate <FiArrowRight />
                </a>
              </div>
            </div>

          </div>
        </section>


        {/* Section 4: Skills & Tools */}
        <section id="skills-tools">
          <h2 className="section-title animate-on-scroll">Other <span>Skills</span></h2>
          <div className="skills-grid animate-on-scroll delay-1" style={{ marginBottom: '4rem' }}>
            {[
              "Management", "Negotiation", "Leadership",
              "Critical Thinking", "Creativity", "Communication"
            ].map((skill, idx) => (
              <div className="skill-card" key={idx}>
                {skill === "Management" ? <FaTasks size={32} /> :
                  skill === "Negotiation" ? <FaHandshake size={32} /> :
                    skill === "Leadership" ? <FaUserTie size={32} /> :
                      skill === "Critical Thinking" ? <FaLightbulb size={32} /> :
                        skill === "Creativity" ? <FaPalette size={32} /> :
                          skill === "Communication" ? <FaComments size={32} /> :
                            <FaCode size={32} />}
                <span>{skill}</span>
              </div>
            ))}
          </div>

          <h2 className="section-title animate-on-scroll">My <span>Tools</span></h2>
          <div className="skills-grid animate-on-scroll delay-1">
            {[
              "Telegram", "Discord", "Twitter/X",
              "Google Docs", "Notion", "AI Agents"
            ].map((tool, idx) => (
              <div className="skill-card" key={idx}>
                {tool === "Google Docs" ? <FaRegFileAlt size={32} /> :
                  tool === "Notion" ? <FaRegFileAlt size={32} /> :
                    tool === "AI Agents" ? <FaRobot size={32} /> :
                      tool === "Twitter/X" ? <FaTwitter size={32} /> :
                        tool === "Discord" ? <FaDiscord size={32} /> :
                          tool === "Telegram" ? <FaTelegramPlane size={32} /> :
                            <FaCode size={32} />}
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Telegram POW */}
        <section id="telegram-pow">
          <h2 className="section-title animate-on-scroll">Live <span>Proof of Work</span></h2>
          <div className="list-container animate-on-scroll delay-1">
            <a 
              href="https://t.me/+Q4W-0JI5S_4yYWY8" 
              target="_blank" 
              rel="noreferrer" 
              className="list-item" 
              style={{ borderLeftColor: 'var(--color-yellow)', borderLeftWidth: '4px', textDecoration: 'none' }}
            >
              <div className="list-item-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                  <FaTelegramPlane size={24} color="var(--color-yellow)" />
                  <h3 style={{ margin: 0 }}>Telegram POW Channel</h3>
                </div>
                <p>Join my live Proof of Work channel! Here, you can see real-time updates on my daily community management highlights, moderation logs, and impact across top Web3 ecosystems.</p>
              </div>
              <div className="list-item-meta">
                <div className="list-item-arrow">
                  <FiArrowRight size={20} />
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Section 6: Let's Work Together */}
        <section id="contact">
          <h2 className="section-title animate-on-scroll">Let's Work <span>Together</span></h2>
          <div className="contact-form animate-on-scroll delay-1">
            <form action="https://formspree.io/f/xjgpzaog" method="POST">
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" className="form-control" placeholder="What's your name?" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="_replyto" className="form-control" placeholder="What's your email?" required />
              </div>
              <div className="form-group">
                <label>Budget</label>
                <input type="text" name="budget" className="form-control" placeholder="What's your budget range?" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" className="form-control" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>Designed and Built by SNOWYY</p>
        </footer>

      </main>
    </div>
  );
}

export default App;
