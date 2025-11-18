import React, { useEffect, useState } from 'react';
import Topbar from '../MainElements/Topbar';
import '../../../styles/Dashboard/AccountOverview/account-overview.css';
import AccountBackground from '/assets/images/AccountBackground.svg';
import api from '../../../config/api';

const AccountOverview = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await api.getAccounts();
        setAccounts(data.accounts || []);
      } catch (error) {
        console.error('Failed to load accounts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <>
      <Topbar />
      <div className="account-overview">
        <div
          className="account-overview__hero-section"
          style={{ backgroundImage: `url(${AccountBackground})` }}
        >
          <div className="account-overview__hero-header">
            <h1 className="account-overview__hero-title">Moje konta</h1>
            <button className="account-overview__add-btn">+ Dodaj nowe</button>
          </div>

          <div className="account-overview__hero-card">
            <div className="account-overview__card-content">
              <div className="account-overview__card-header">
                <div className="account-overview__card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.7)" />
                  </svg>
                </div>
                <div>
                  <h3 className="account-overview__card-title">Konto główne</h3>
                </div>
              </div>
              <span className="account-overview__card-amount">
                {loading ? 'Ładowanie...' : accounts.reduce((sum, acc) => sum + acc.balance, 0)} PLN
              </span>
            </div>
          </div>
        </div>

        <div className="account-overview__main-section">
          <h2 className="account-overview__section-title">Konto główne</h2>

          <div className="account-overview__content-tabs">
            <button
              className={`account-overview__content-tab ${activeTab === 'transactions' ? '' : 'active'}`}
              onClick={() => setActiveTab('main')}
            >
              Transakcje
            </button>
            <button
              className={`account-overview__content-tab ${activeTab === 'transactions' ? 'active' : ''}`}
              onClick={() => setActiveTab('transactions')}
            >
              Szczegóły konta
            </button>
          </div>

          <div className="account-overview__empty">
            <h3 className="account-overview__empty-title">
              {activeTab === 'transactions' 
                ? 'Twoje ostatnie transakcje pojawią się tutaj!' 
                : 'Szczegóły konta pojawią się tutaj!'}
            </h3>
            <p className="account-overview__empty-description">
              {activeTab === 'transactions' 
                ? 'Nie masz jeszcze żadnych transakcji. Możesz zacząć od pierwszej, wpłacając ' 
                : ''}
              {activeTab === 'transactions' && <a href="#" className="account-overview__empty-link">Depozyt</a>}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountOverview;
