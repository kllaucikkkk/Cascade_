import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const result = await api.login(email, password);

      if (result.token) {
        localStorage.setItem('token', result.token);
        navigate('/dashboard'); // zmień jeśli masz inną stronę
      } else {
        setError(result.message || 'Błędne dane logowania');
      }
    } catch (err) {
      setError('Błąd serwera: ' + err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__form-section">
        <div className="login-page__header">
          <div className="login-page__logo">
            Cascade<span className="login-page__logo-underline">_</span>
          </div>
          <button className="login-page__language-btn">
            <span>🇵🇱</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="login-page__form-container">
          <h1 className="login-page__heading">Zaloguj się</h1>

          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          <form className="login-page__form" onSubmit={handleSubmit}>
            <div className="login-page__input-group">
              <label className="login-page__label">E-mail</label>
              <div className="login-page__input-wrapper">
                <input
                  type="email"
                  className="login-page__input"
                  placeholder="Wprowadź adres e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-page__input-group">
              <label className="login-page__label">Hasło</label>
              <div className="login-page__input-wrapper">
                <input
                  type="password"
                  className="login-page__input"
                  placeholder="Wprowadź hasło"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <a className="login-page__forgot-password">Zapomniałeś hasła?</a>

            <p className="login-page__register-link">
              Nie masz konta? <a onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>Zarejestruj się</a>
            </p>

            <button type="submit" className="login-page__submit-btn">
              Zaloguj się
            </button>
          </form>
        </div>

        <div className="login-page__footer">
          <div className="login-page__footer-links">
            <a>Polityka prywatności</a>
            <span>•</span>
            <a>Polityka plików cookie</a>
            <span>•</span>
            <a>Zasady i warunki</a>
            <span>•</span>
            <a>Wsparcie</a>
          </div>
          <p className="login-page__copyright">© 2025 Cascade_</p>
        </div>
      </div>

      <div className="login-page__hero-section">
        <img
          src="/assets/images/Login-Register-illustration.svg"
          alt="Login illustration"
          className="login-page__hero-image"
        />
      </div>
    </div>
  );
}

export default Login;
