import React from 'react';
import Topbar from '../MainElements/Topbar';
import '../../../styles/Dashboard/Goals/goals.css';


const Goals = () => {
  return (
    <>
      <Topbar />
      {/* Wrapper pozycjonujący (identyczny jak w transactions) */}
      <div className="dashboard-content-container">
        {/* Biały card na content */}
        <div className="dashboard-content-card">
          <div className="goals-header">
            <h1 className="goals-title">Cele</h1>
            <button className="goals-add-btn">🎯 Utwórz nowy</button>
          </div>
          <div className="goals-grid">
            {/* Placeholdery na przyszłe karty celów */}
            <div className="goals-card-placeholder"></div>
            <div className="goals-card-placeholder"></div>
            <div className="goals-card-placeholder"></div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Goals;
