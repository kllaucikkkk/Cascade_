import React from 'react';
import Topbar from '../MainElements/Topbar';
import '../../../styles/Dashboard/Recipients/recipients.css';

const Recipients = () => {
  // docelowo tutaj będzie pobieranie odbiorców z backendu
  const hasRecipients = false;

  return (
    <>
      <Topbar />
      <div className="dashboard-content-container">
        <div className="dashboard-content-card">
          <div className="recipients-header">
            <h1 className="recipients-title">Odbiorcy</h1>
            <button className="recipients-add-btn">👤 Utwórz nowy</button>
          </div>
          <div className="recipients-body-container">
            {hasRecipients ? (
              <div>Lista odbiorców</div>
            ) : (
              <div className="recipients-placeholder">
                <h2 className="placeholder-title">
                  Twoi odbiorcy pojawią się tutaj!
                </h2>
                <p className="placeholder-subtitle">
                  Nie masz jeszcze żadnych odbiorców.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipients;
