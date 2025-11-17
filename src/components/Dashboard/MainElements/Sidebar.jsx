import React, { useState } from 'react';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('Przegląd');

  const menuItems = [
    { label: 'Przegląd', icon: '🏠' },
    { label: 'Transakcje', icon: '↔️' },
    { label: 'Konta', icon: '📋' },
    { label: 'Cele', icon: '🎯' },
    { label: 'Odbiorcy', icon: '👤' },
    { label: 'Karty', icon: '💳' },
  ];

  return (
    <aside className="dashboard-sidebar">
      {/* Logo */}
      <div className="dashboard-sidebar__logo">
        Cascade<span className="dashboard-sidebar__logo-underline">_</span>
      </div>

      {/* Navigation */}
      <nav className="dashboard-sidebar__nav">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`dashboard-sidebar__nav-link ${activeMenu === item.label ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.label)}
          >
            <span className="dashboard-sidebar__nav-icon">{item.icon}</span>
            <span className="dashboard-sidebar__nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
