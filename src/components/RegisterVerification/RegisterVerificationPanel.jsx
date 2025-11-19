import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../config/api';

function RegisterVerificationPanel() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || 'user@example.com';
  
  const [stage, setStage] = useState('info'); // 'info' | 'code' | 'success'
  const [loading, setLoading] = useState(false);
  const [codeResent, setCodeResent] = useState(false);
  const [error, setError] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [inputs, setInputs] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // Generowanie i wysyłanie kodu
  const sendVerificationCode = async () => {
    setLoading(true);
    setError('');
    setInputs(['', '', '', '', '', '']);
    const code = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedCode(code);
    try {
      const result = await api.sendVerificationCode(email, code);
      if (result.success) {
        setCodeResent(true);
        setError('');
      } else {
        setError('Nie udało się wysłać kodu. Spróbuj ponownie.');
      }
    } catch (err) {
      setError('Błąd połączenia: ' + err.message);
    }
    setLoading(false);
  };

  const handleStartVerification = async () => {
    await sendVerificationCode();
    setStage('code');
  };

  const handleResendCode = async () => {
    await sendVerificationCode();
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  };

  const handleInput = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    const newInputs = [...inputs];
    newInputs[idx] = val;
    setInputs(newInputs);

    if (val && idx < 5) {
      inputRefs.current[idx + 1]?.focus();
    }
    if (!val && idx > 0 && e.nativeEvent.inputType === "deleteContentBackward") {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const userCode = inputs.join('');
    if (userCode === generatedCode) {
      setStage('success');
      // Auto-redirect po 3 sekundach
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } else {
      setError('Niepoprawny kod weryfikacyjny!');
    }
  };

  return (
    <div className="register-verification-page">
      {/* Lewa strona: ilustracja */}
      <div className="register-verification__hero-section">
        <img
          src="/assets/images/Login-Register-illustration.svg"
          alt="Register verification illustration"
          className="register-verification__hero-image"
        />
      </div>
      
      {/* Prawa strona */}
      <div className="register-verification__panel-section">
        <div className="register-verification__logo">
          Cascade<span className="register-verification__logo-underline">_</span>
        </div>
        
        <div className="register-verification__panel-container">
          {stage === 'info' && (
            <>
              <div className="register-verification__placeholder">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="60" fill="#E8E8E9"/>
                  <ellipse cx="60" cy="56" rx="22" ry="22" fill="#D1D2D3"/>
                  <ellipse cx="60" cy="90" rx="34" ry="16" fill="#D1D2D3"/>
                </svg>
              </div>
              <h1 className="register-verification__heading">Dziękujemy!</h1>
              <p className="register-verification__desc">Zweryfikujemy Twój adres e-mail</p>
              <p className="register-verification__info-text">
                Kod weryfikacyjny został wysłany, sprawdź swoją pocztę e-mail<br />
                <b>{email}</b>
              </p>
              <button
                className="register-verification__action-btn"
                onClick={handleStartVerification}
                disabled={loading}
              >
                {loading ? "Wysyłanie..." : "Rozpocznij weryfikację"}
              </button>
              <div className="register-verification__center-btn-row">
                <button
                  className="register-verification__resend-btn"
                  onClick={handleResendCode}
                  disabled={loading}
                  type="button"
                >
                  Wyślij kod weryfikacyjny ponownie
                </button>
              </div>
              {error && (<p className="register-verification__error">{error}</p>)}
              {codeResent && (<p className="register-verification__success">Kod weryfikacyjny wysłany!</p>)}
            </>
          )}
          
          {stage === 'code' && (
            <form className="register-verification__code-form" onSubmit={handleVerify} autoComplete="off">
              <h2 className="register-verification__code-title">Wpisz kod weryfikacyjny</h2>
              <div className="register-verification__code-inputs">
                {inputs.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value}
                    onChange={e => handleInput(e, idx)}
                    ref={el => inputRefs.current[idx] = el}
                    className="register-verification__code-input"
                    required
                  />
                ))}
              </div>
              <p className="register-verification__code-hint">
                Wpisz poniżej kod weryfikacyjny otrzymany na maila.
              </p>
              <button
                className="register-verification__submit-btn"
                type="submit"
              >
                Zweryfikuj
              </button>
              {error && (
                <p className="register-verification__error" style={{textAlign: 'center'}}>{error}</p>
              )}
            </form>
          )}
          
          {stage === 'success' && (
            <div className="register-verification__success-panel">
              <div className="register-verification__success-icon">
                <svg width="88" height="78" viewBox="0 0 88 78" fill="none">
                  <path d="M18 41L38 61L70 31" stroke="#E8404E" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="register-verification__success-title">Weryfikacja zakończona!</h2>
              <p className="register-verification__success-desc">
                Twój adres e-mail został pomyślnie zweryfikowany. Za chwilę zostaniesz przekierowany do panelu.
              </p>
              <button
                className="register-verification__success-btn"
                onClick={() => navigate('/dashboard')}
              >
                Przejdź do panelu teraz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegisterVerificationPanel;
