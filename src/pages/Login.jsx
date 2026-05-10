import React from 'react';

export default function Login() {
  return (
    <div className="login-body">
      <div className="login-card glass-panel">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          margin: '0 auto 20px auto',
          background: 'rgba(88, 101, 242, 0.1)',
          border: '1px solid rgba(88, 101, 242, 0.3)',
          borderRadius: '24px',
          boxShadow: '0 0 30px rgba(88, 101, 242, 0.2)'
        }}>
          <span style={{ 
            fontSize: '3.5rem', 
            fontWeight: '900', 
            fontFamily: "'Outfit', sans-serif",
            lineHeight: 1,
            background: 'linear-gradient(135deg, #38bdf8, #2563eb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.5))'
          }}>
            Z
          </span>
        </div>
        <h2 className="brand-text-glow" style={{ margin: 0, paddingBottom: '5px' }}>ZENITH</h2>
        <p>PogyClient Guild Management &amp; Automation</p>
        
        <a href="/api/discord-login?callbackUrl=/" className="btn-discord" style={{ textDecoration: 'none' }}>
          <i className="fa-brands fa-discord"></i> Login with Discord
        </a>

        <p style={{
          marginTop: '28px',
          marginBottom: 0,
          fontSize: '0.7rem',
          color: 'rgba(219,222,225,0.3)',
          lineHeight: 1.8,
          letterSpacing: '0.03em'
        }}>
          created by <strong style={{ color: 'rgba(219,222,225,0.5)' }}>devrock07</strong>
          {' '}·{' '}
          updated by <strong style={{ color: 'rgba(219,222,225,0.5)' }}>void</strong>
        </p>
      </div>
    </div>
  );
}
