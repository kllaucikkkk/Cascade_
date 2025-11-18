// src/components/ui/FloatingNav.jsx
"use client";

import React, { useState, useRef } from "react";

export const FloatingNav = ({ navItems }) => {
  const [hoverIdx, setHoverIdx] = useState(null);
  const [dropdownHoverIdx, setDropdownHoverIdx] = useState(null);
  const timerRef = useRef(null);

  const handleMouseEnter = (idx) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setHoverIdx(idx);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setHoverIdx(null);
    }, 200);
  };

  // Dane dla dropdownów
  const dropdowns = {
    0: [ // Osobiste
      { name: "Karta Cascade_", link: "#" },
      { name: "Opłaty", link: "#" },
    ],
    1: [ // O nas
      { name: "Kim jesteśmy?", link: "#" },
      { name: "Newsroom", link: "#" },
      { name: "Współpraca", link: "#" },
      { name: "Dla prasy", link: "#" },
      { name: "Informacje o wydaniu", link: "#" },
    ],
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  // Logika do dynamicznego ustawiania wysokości panelu
  const getPanelHeight = (idx) => {
    const items = dropdowns[idx];
    if (!items) return '0px';

    const itemCount = items.length;
    if (itemCount <= 2) return '144px'; // Base size
    if (itemCount === 4) return '288px'; // 2x
    if (itemCount === 5) return '250px'; // 2.5x
    return '144px'; // Domyślna wysokość
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 5000,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* KOŁO HOME */}
      <a href="/" onClick={handleLinkClick} style={{ width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "#f84d35", cursor: "pointer", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.10)" }} aria-label="Home">
        <svg width="28" height="24" viewBox="0 0 24 24" fill="none" style={{ display: "block" }}>
          <path d="M3 13h2v8H3zm4-8h2V3H7zm10 0h2V3h-2zm7 8h2v8h-2zM12 6L2 13h3v8h6v-6h2v6h6v-8h3z" fill="#fff"/>
        </svg>
      </a>

      {/* Wrapper dla kapsuły i dropdowna */}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }} onMouseLeave={handleMouseLeave}>
        {/* Generowanie paneli dynamicznie */}
        {Object.keys(dropdowns).includes(String(hoverIdx)) && (
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: "28px",
              width: "100%",
              height: getPanelHeight(hoverIdx),
              background: "#f84d35",
              color: "#fff",
              borderRadius: "32px 32px 0 0",
              boxShadow: "0 -10px 40px rgba(0,0,0,0.14)",
              padding: "20px 40px 22px 30px", // Zmniejszony górny padding o kolejne 10px
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              fontSize: "22px",
              fontWeight: 500,
              gap: "12px",
              zIndex: 5000,
              pointerEvents: "auto",
              transition: 'height 0.2s ease-out',
            }}
            onMouseEnter={() => handleMouseEnter(hoverIdx)}
          >
            {dropdowns[hoverIdx].map((item, index) => (
              <a key={index} href={item.link} onClick={handleLinkClick} onMouseEnter={() => setDropdownHoverIdx(index)} onMouseLeave={() => setDropdownHoverIdx(null)} style={{ opacity: dropdownHoverIdx === index ? 1 : 0.85, transform: dropdownHoverIdx === index ? 'translateX(12px)' : 'translateX(0)', transition: 'transform 0.2s ease-out, opacity 0.2s ease-out', color: '#ffffff', textDecoration: 'none', cursor: 'pointer' }}>
                {item.name}
              </a>
            ))}
          </div>
        )}

        {/* Kapsuła z linkami */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "10px",
            padding: "0 16px",
            height: "56px",
            minWidth: "440px",
            background: "#f84d35",
            color: "#ffffff",
            borderRadius: "999px",
            boxShadow: "0 14px 40px rgba(0,0,0,0.25)",
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            zIndex: 5001,
          }}
        >
          {navItems.map((navItem, idx) => (
            <div key={`link-${idx}`} onMouseEnter={() => handleMouseEnter(idx)}>
              <a href={navItem.link} onClick={handleLinkClick} style={{ fontSize: "19px", fontWeight: 500, lineHeight: "22px", color: "#ffffff", textDecoration: "none", whiteSpace: "nowrap", padding: "9px 24px", borderRadius: "999px", background: hoverIdx === idx ? "#F95F4A" : "transparent", transition: "background 0.18s", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", border: "none" }}>
                {navItem.name}
                {idx === 0 || idx === 1 ? <span style={{ fontSize: "19px", fontWeight: 400, paddingLeft: "4px" }}>▾</span> : null}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
