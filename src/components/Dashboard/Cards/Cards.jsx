import React from 'react';
import Topbar from '../MainElements/Topbar';
import '../../../styles/Dashboard/Cards/cards.css';

const Cards = () => {
  return (
    <>
      <Topbar />
      <div className="dashboard-content-container">
        <div className="dashboard-content-card">
          <div className="cards-header">
            <h1 className="cards-title">Karty</h1>
            <button className="cards-add-btn">
              🧾 Dodaj nową
            </button>
          </div>
          <div className="cards-grid">
            {/* Każda karta to teraz JEDEN element img */}
            <img
              src="/assets/images/Cascade_Physical_Card.svg"
              alt="Cascade Physical Card"
              className="card-item"
            />
            <img
              src="/assets/images/Cascade_Virtual_Card.svg"
              alt="Cascade Virtual Card"
              className="card-item"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
