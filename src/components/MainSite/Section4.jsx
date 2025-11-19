import React, { useState, useEffect } from "react";
import axios from "axios";

const SUPPORTED_CURRENCIES = [
  { code: "EUR", label: "Euro", flag: "🇪🇺" },
  { code: "USD", label: "Dolar amerykański", flag: "🇺🇸" },
  { code: "GBP", label: "Funt brytyjski", flag: "🇬🇧" },
  { code: "CHF", label: "Frank szwajcarski", flag: "🇨🇭" },
  { code: "CZK", label: "Korona czeska", flag: "🇨🇿" },
  { code: "PLN", label: "Polski złoty", flag: "🇵🇱" },
];

function formatAmount(val, curr) {
  if (isNaN(val)) return "";
  return curr === "PLN"
    ? `PLN ${Number(val).toLocaleString("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    : `${SUPPORTED_CURRENCIES.find(c => c.code === curr)?.flag || ""} ${Number(val).toLocaleString("pl-PL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function Section4() {
  const [rates, setRates] = useState([]);
  const [lastDate, setLastDate] = useState(null);
  const [loading, setLoading] = useState(true);

  // Wymiana: domyślnie z EUR na PLN
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("PLN");
  const [fromAmount, setFromAmount] = useState("10");
  const [toAmount, setToAmount] = useState("");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  // Pobierz kursy walut z backendu
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/exchange-rates")
      .then((res) => {
        setRates([
          ...res.data.rates,
          { code: "PLN", currency: "złoty polski", mid: 1 }
        ]);
        setLastDate(res.data.date);
      })
      .catch(() => setRates([]))
      .finally(() => setLoading(false));
  }, []);

  // Przelicz kwotę
  useEffect(() => {
    if (!rates.length) return;
    const fromRate = rates.find(r => r.code === from)?.mid ?? 1;
    const toRate = rates.find(r => r.code === to)?.mid ?? 1;
    if (fromAmount === "" || isNaN(Number(fromAmount))) {
      setToAmount("");
      return;
    }
    // Zawsze przelicz przez PLN: amount * (from -> PLN) / (to -> PLN)
    const result = Number(fromAmount) * (fromRate / toRate);
    setToAmount(result);
  }, [fromAmount, from, to, rates]);

  const formattedDate =
    lastDate &&
    new Date(lastDate).toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

  // Zamiana walut
  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setFromAmount(toAmount ? String(Number(toAmount).toFixed(2)) : "");
  };

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
          zaktualizowane o godzinie 00:00 w dniu {formattedDate ? `${formattedDate} r.` : "..." }
        </p>

        {/* KANTOR */}
        <div className="section-4__converter">
          <div className="section-4__currency-card">
            <div className="section-4__currency-header">
              <span className="section-4__currency-icon">{SUPPORTED_CURRENCIES.find(c => c.code === from)?.flag}</span>
              <span className="section-4__currency-code">{from}</span>
              <button className="section-4__dropdown-btn" onClick={() => setShowFromDropdown((p) => !p)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#E8404E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showFromDropdown && (
                <div className="section-4__dropdown">
                  {SUPPORTED_CURRENCIES.filter(c => c.code !== to).map((c) => (
                    <div 
                      key={c.code}
                      className="section-4__dropdown-item"
                      onClick={() => {
                        setFrom(c.code);
                        setShowFromDropdown(false);
                      }}
                    >{c.flag} {c.code}</div>
                  ))}
                </div>
              )}
            </div>
            <input 
              type="number"
              min="0"
              className="section-4__currency-input" 
              placeholder={formatAmount("", from)}
              value={fromAmount}
              onChange={e => setFromAmount(e.target.value.replace(',', '.'))}
            />
          </div>

          <div className="section-4__swap-icon" onClick={swapCurrencies} title="Zamień waluty">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 10L12 5L17 10M7 14L12 19L17 14" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="section-4__currency-card">
            <div className="section-4__currency-header">
              <span className="section-4__currency-icon">{SUPPORTED_CURRENCIES.find(c => c.code === to)?.flag}</span>
              <span className="section-4__currency-code">{to}</span>
              <button className="section-4__dropdown-btn" onClick={() => setShowToDropdown((p) => !p)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="#E8404E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showToDropdown && (
                <div className="section-4__dropdown">
                  {SUPPORTED_CURRENCIES.filter(c => c.code !== from).map((c) => (
                    <div 
                      key={c.code}
                      className="section-4__dropdown-item"
                      onClick={() => {
                        setTo(c.code);
                        setShowToDropdown(false);
                      }}
                    >{c.flag} {c.code}</div>
                  ))}
                </div>
              )}
            </div>
            <input 
              type="text" 
              className="section-4__currency-input" 
              placeholder={formatAmount("", to)}
              value={formatAmount(toAmount, to)}
              readOnly
              tabIndex={-1}
              style={{ background: "#ececec", cursor: "not-allowed" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
