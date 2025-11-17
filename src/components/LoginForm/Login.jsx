import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-page">
      {/* Left Side - Form */}
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
          <form className="login-page__form" onSubmit={handleSubmit}>
            <div className="login-page__input-group">
              <label className="login-page__label">E-mail</label>
              <div className="login-page__input-wrapper">
                <svg className="login-page__input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4H17C17.55 4 18 4.45 18 5V15C18 15.55 17.55 16 17 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4Z" stroke="#86868B" strokeWidth="1.5"/>
                  <path d="M18 5L10 11L2 5" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
                <svg className="login-page__input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 13V11M6 16H14C15.1046 16 16 15.1046 16 14V10C16 8.89543 15.1046 8 14 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16Z" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 8V6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V8" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
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

            <a href="#" className="login-page__forgot-password">Zapomniałeś hasła?</a>

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
            <a href="#">Polityka prywatności</a>
            <span>•</span>
            <a href="#">Polityka plików cookie</a>
            <span>•</span>
            <a href="#">Zasady i warunki</a>
            <span>•</span>
            <a href="#">Wsparcie</a>
          </div>
          <p className="login-page__copyright">© 2025 Cascade_</p>
        </div>
      </div>

      {/* Right Side - Image */}
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
