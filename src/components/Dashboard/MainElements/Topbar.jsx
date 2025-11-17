import React from 'react';

const Topbar = () => (
  <header className="topbar">
    {/* LEFT - Account Verification Alert */}
    <div className="topbar__alert">
      <div className="topbar__alert-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="3" fill="#E8404E"/>
          <path d="M12 8V12M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="topbar__alert-content">
        <strong>Zweryfikuj swoje konto</strong>
        <span>Twoje konto nie jest zweryfikowane</span>
      </div>
      <button className="topbar__alert-close">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 14L14 6M14 14L6 6" stroke="#E8404E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>

    {/* RIGHT - User Actions */}
    <div className="topbar__user-section">
      <button className="topbar__dropdown-btn">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4.5 7L9 11.5L13.5 7" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="topbar__user-info">
        <div className="topbar__avatar">W</div>
        <span className="topbar__username">Wiktor</span>
      </div>

      <button className="topbar__dropdown-btn">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4.5 7L9 11.5L13.5 7" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="topbar__notification-btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 8C4 4.13 7.13 1 11 1C14.87 1 18 4.13 18 8V12L19 15H3L4 12V8Z" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 18C12.4 18.6 11.7 19 11 19C10.3 19 9.6 18.6 9 18" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  </header>
);

export default Topbar;
