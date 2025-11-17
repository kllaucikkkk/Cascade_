import React, { useState } from 'react';
import Topbar from '../MainElements/Topbar';
import '../../../styles/Dashboard/TransactionOverview/transaction-overview.css';

const TransactionOverview = () => {
  const [accountFilter, setAccountFilter] = useState('Wszystkie konta');
  const [fromDate, setFromDate] = useState('2025-11-19');
  const [toDate, setToDate] = useState('2025-11-20');

  return (
    <>
      <Topbar />
      <div className="transaction-overview">
        <div className="transaction-overview__header">
          <h1 className="transaction-overview__title">Transakcje</h1>
          
          <div className="transaction-overview__controls">
            {/* Account Filter */}
            <div className="transaction-overview__filter">
              <select 
                className="transaction-overview__select"
                value={accountFilter}
                onChange={(e) => setAccountFilter(e.target.value)}
              >
                <option>Wszystkie konta</option>
                <option>Konto 1</option>
                <option>Konto 2</option>
              </select>
            </div>

            {/* Date Range */}
            <div className="transaction-overview__date-range">
              <div className="transaction-overview__date">
                <span className="transaction-overview__date-label">Od</span>
                <input 
                  type="date" 
                  className="transaction-overview__date-input"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
              <div className="transaction-overview__date">
                <span className="transaction-overview__date-label">Do</span>
                <input 
                  type="date" 
                  className="transaction-overview__date-input"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
            </div>

            {/* Action Icons */}
            <div className="transaction-overview__actions">
              <button className="transaction-overview__action-btn" aria-label="Synchronizuj">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16 7.5L19 10.5M19 10.5L16 13.5M19 10.5H6C2.5 10.5 1 13 1 15.5M4 12.5L1 9.5M1 9.5L4 6.5M1 9.5H14C17.5 9.5 19 7 19 4.5" stroke="#E8404E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="transaction-overview__action-btn" aria-label="Odśwież">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10C4 6.13401 7.13401 3 11 3C13.5264 3 15.7792 4.28226 16.9995 6.23404M16 10C16 13.866 12.866 17 9 17C6.47362 17 4.22077 15.7177 3.00049 13.766M4 6H4.01M16 14H16.01" stroke="#E8404E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="transaction-overview__action-btn" aria-label="Filtruj">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5H17M6 10H14M8 15H12" stroke="#E8404E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="transaction-overview__content">
          <div className="transaction-overview__empty">
            <h2 className="transaction-overview__empty-title">
              Twoje ostatnie transakcje pojawią się tutaj!
            </h2>
            <p className="transaction-overview__empty-description">
              Nie masz jeszcze żadnych transakcji. Możesz zacząć od pierwszej, wpłacając{' '}
              <a href="#" className="transaction-overview__empty-link">Depozyt</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionOverview;
