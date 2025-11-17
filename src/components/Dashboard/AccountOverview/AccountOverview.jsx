import React, { useState } from 'react';
import Topbar from '../MainElements/Topbar';
import '../../../styles/Dashboard/AccountOverview/account-overview.css';
import AccountBackground from '/assets/images/AccountBackground.svg';

const AccountOverview = () => {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <>
      <Topbar />
      <div className="account-overview">
        {/* Grey Background Section with SVG */}
        <div 
          className="account-overview__hero-section"
          style={{ backgroundImage: `url(${AccountBackground})` }}
        >
          {/* Header with Title and Button */}
          <div className="account-overview__hero-header">
            <h1 className="account-overview__hero-title">Moje konta</h1>
            <button className="account-overview__add-btn">
              + Dodaj nowe
            </button>
          </div>

          {/* Large Glassmorphic Card */}
          <div className="account-overview__hero-card">
            <div className="account-overview__card-content">
              <div className="account-overview__card-header">
                <div className="account-overview__card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.7)"/>
                  </svg>
                </div>
                <div>
                  <h3 className="account-overview__card-title">Konto główne</h3>
                </div>
              </div>
              <span className="account-overview__card-amount">0 PLN</span>
            </div>
          </div>
        </div>

        {/* NOWA SEKCJA Z TŁem */}
        <div className="account-overview__main-section">
          <h2 className="account-overview__section-title">Konto główne</h2>

          {/* Tabs */}
          <div className="account-overview__content-tabs">
            <button className="account-overview__content-tab active">
              Transakcje
            </button>
            <button className="account-overview__content-tab">
              Szczegóły konta
            </button>
          </div>

          {/* Empty State */}
          <div className="account-overview__empty">
            <h3 className="account-overview__empty-title">
              Twoje ostatnie transakcje pojawią się tutaj!
            </h3>
            <p className="account-overview__empty-description">
              Nie masz jeszcze żadnych transakcji. Możesz zacząć od pierwszej, wpłacając{' '}
              <a href="#" className="account-overview__empty-link">Depozyt</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountOverview;
