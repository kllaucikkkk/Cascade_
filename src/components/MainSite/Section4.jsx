function Section4() {
  return (
    <section className="section-4">
      <div className="section-4__container">
        <div className="section-4__badge">Kantor</div>
        
        <h2 className="section-4__heading">
          Sprawdź nasz<br />przelicznik walut
        </h2>
        
        <p className="section-4__description">
          Wyświetlane kursy wymiany i opłaty mogą się różnić podczas<br />
          procesu wymiany walut, a podane kursy zostały ostatnio<br />
          zaktualizowane o godzinie 00:00 w dniu 03.11.2025 r.
        </p>

        <div className="section-4__converter">
          <div className="section-4__currency-card">
            <div className="section-4__currency-header">
              <span className="section-4__currency-icon">🇪🇺</span>
              <span className="section-4__currency-code">EUR</span>
              <button className="section-4__dropdown-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#E8404E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <input 
              type="text" 
              className="section-4__currency-input" 
              placeholder="€ 10" 
              defaultValue="€ 10"
            />
          </div>

          <div className="section-4__swap-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 5L17 10M7 14L12 19L17 14" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="section-4__currency-card">
            <div className="section-4__currency-header">
              <span className="section-4__currency-icon">🇵🇱</span>
              <span className="section-4__currency-code">PLN</span>
              <button className="section-4__dropdown-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#E8404E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <input 
              type="text" 
              className="section-4__currency-input" 
              placeholder="PLN 42,37" 
              defaultValue="PLN 42,37"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
