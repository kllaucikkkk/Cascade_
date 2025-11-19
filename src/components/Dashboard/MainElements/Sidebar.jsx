import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Mapowanie etykiet na ścieżki
  const pathMap = {
    'Przegląd': '/dashboard',
    'Transakcje': '/transactions',
    'Konta': '/accounts',
    'Cele': '/goals',
    'Odbiorcy': '/account/recipients',
    'Karty': '/cards',
  };

  const menuItems = [
    { label: 'Przegląd', icon: 'overview' },
    { label: 'Transakcje', icon: 'transactions' },
    { label: 'Konta', icon: 'accounts' },
    { label: 'Cele', icon: 'goals' },
    { label: 'Odbiorcy', icon: 'recipients' },
    { label: 'Karty', icon: 'cards' },
  ];

  // Określ aktywną ścieżkę na podstawie URL
  const getActiveMenu = () => {
    const currentPath = location.pathname;
    const activeEntry = Object.entries(pathMap).find(([_, path]) => 
      currentPath === path || (path !== '/dashboard' && currentPath.startsWith(path))
    );
    return activeEntry ? activeEntry[0] : 'Przegląd';
  };

  const [hovered, setHovered] = useState(null);
  const activeMenu = getActiveMenu();

  const handleMenuClick = (label) => {
    const path = pathMap[label];
    if (path) {
      navigate(path);
    }
  };

  return (
    <aside className="dashboard-sidebar">
      {/* Logo */}
      <div className="dashboard-sidebar__logo">
        Cascade<span className="dashboard-sidebar__logo-underline">_</span>
      </div>

      {/* Navigation */}
      <nav className="dashboard-sidebar__nav">
        {menuItems.map((item) => {
          const isActive = activeMenu === item.label;
          const isHovered = hovered === item.label;
          const iconPath = isActive || isHovered
            ? `/assets/icons/dashboard/${item.icon}-visible.svg`
            : `/assets/icons/dashboard/${item.icon}.svg`;

          return (
            <button
              key={item.label}
              className={`dashboard-sidebar__nav-link${isActive ? ' active' : ''}`}
              onClick={() => handleMenuClick(item.label)}
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => setHovered(null)}
              type="button"
            >
              <span className="dashboard-sidebar__nav-icon">
                <img
                  src={iconPath}
                  alt={item.label}
                  width={24}
                  height={24}
                  draggable="false"
                />
              </span>
              <span className="dashboard-sidebar__nav-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
