import React, { useState, useEffect } from 'react';
import Topbar from '../MainElements/Topbar';
import '../../../styles/Dashboard/TransactionOverview/transaction-overview.css';
import api from '../../../config/api';

const TransactionOverview = () => {
  const [accountFilter, setAccountFilter] = useState('Wszystkie konta');
  const [fromDate, setFromDate] = useState('2025-11-19');
  const [toDate, setToDate] = useState('2025-11-20');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        let filters = {};
        if (accountFilter !== 'Wszystkie konta') filters.account = accountFilter;
        if (fromDate) filters.fromDate = fromDate;
        if (toDate) filters.toDate = toDate;

        const data = await api.getTransactions(filters);
        setTransactions(data.transactions || []);
      } catch (error) {
        console.error('Failed to load transactions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, [accountFilter, fromDate, toDate]);

  return (
    <>
      <Topbar />
      <div className="transaction-overview">
        <div className="transaction-overview__header">
          <h1 className="transaction-overview__title">Transakcje</h1>

          <div className="transaction-overview__controls">
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

            <div className="transaction-overview__actions">
              <button className="transaction-overview__action-btn" aria-label="Synchronizuj">
                {/* Ikona synchronizacji */}
              </button>
              <button className="transaction-overview__action-btn" aria-label="Odśwież">
                {/* Ikona odświeżenia */}
              </button>
              <button className="transaction-overview__action-btn" aria-label="Filtruj">
                {/* Ikona filtrów */}
              </button>
            </div>
          </div>
        </div>

        <div className="transaction-overview__content">
          {loading ? (
            <p>Ładowanie transakcji...</p>
          ) : transactions.length === 0 ? (
            <div className="transaction-overview__empty">
              <h2 className="transaction-overview__empty-title">
                Twoje ostatnie transakcje pojawią się tutaj!
              </h2>
              <p className="transaction-overview__empty-description">
                Nie masz jeszcze żadnych transakcji. Możesz zacząć od pierwszej, wpłacając{' '}
                <a href="#" className="transaction-overview__empty-link">Depozyt</a>.
              </p>
            </div>
          ) : (
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  <div>{transaction.description}</div>
                  <div>{transaction.amount} PLN</div>
                  <div>{transaction.date}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default TransactionOverview;
