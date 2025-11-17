import { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [accept, setAccept] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodaj logikę rejestracji
    console.log({ email, password, country, name, phone, accept });
  };

  return (
    <div className="register-page">
      {/* Left Side - Form */}
      <div className="register-page__form-section">
        <div className="register-page__header">
          <div className="register-page__logo">
            Cascade<span className="register-page__logo-underline">_</span>
          </div>
          <button className="register-page__language-btn">
            <span>PL</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="register-page__form-container">
          <h1 className="register-page__heading">Zarejestruj się</h1>
          <form className="register-page__form" onSubmit={handleSubmit}>
            <div className="register-page__input-group">
              <select
                className="register-page__input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                defaultValue=""
              >
                <option value="" disabled>Kraj</option>
                <option value="pl">Polska</option>
                <option value="de">Niemcy</option>
                <option value="gb">Wielka Brytania</option>
              </select>
            </div>
            <div className="register-page__input-group">
              <div className="register-page__input-wrapper">
                <svg className="register-page__input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 4H17C17.55 4 18 4.45 18 5V15C18 15.55 17.55 16 17 16H3C2.45 16 2 15.55 2 15V5C2 4.45 2.45 4 3 4Z" stroke="#86868B" strokeWidth="1.5"/><path d="M18 5L10 11L2 5" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <input
                  type="email"
                  className="register-page__input"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="register-page__input-group">
              <div className="register-page__input-wrapper">
                <svg className="register-page__input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 13V11M6 16H14C15.1046 16 16 15.1046 16 14V10C16 8.89543 15.1046 8 14 8H6C4.89543 8 4 8.89543 4 10V14C4 15.1046 4.89543 16 6 16Z" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 8V6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V8" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <input
                  type="password"
                  className="register-page__input"
                  placeholder="Hasło"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="register-page__input-group">
              <div className="register-page__input-wrapper">
                <svg className="register-page__input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 11C12.2091 11 14 9.20914 14 7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7C6 9.20914 7.79086 11 10 11Z" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 17C4 14.7909 6.68629 13 10 13C13.3137 13 16 14.7909 16 17" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <input
                  type="text"
                  className="register-page__input"
                  placeholder="Nazwa"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="register-page__input-group">
              <div className="register-page__input-wrapper">
                <svg className="register-page__input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M19 16.85V17.65C19 18.4 18.4 19 17.65 19H2.35C1.6 19 1 18.4 1 17.65V16.85C1 15.95 1.47 15.12 2.23 14.72L6.97 12.23C7.61 11.89 8.39 11.89 9.03 12.23L13.77 14.72C14.53 15.12 15 15.95 15 16.85Z" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round"/><circle cx="10" cy="7" r="3" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <input
                  type="tel"
                  className="register-page__input"
                  placeholder="Numer telefonu"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <label className="register-page__checkbox-label">
              <input
                type="checkbox"
                checked={accept}
                onChange={e => setAccept(e.target.checked)}
                required
                className="register-page__checkbox"
              />
              <span>
                Potwierdzam, że przeczytałem i zgadzam się z <a href="#">Warunkami użytkowania</a> oraz <a href="#">Polityką prywatności</a>
              </span>
            </label>
            <button 
              type="submit"
              className="register-page__submit-btn"
              disabled={!accept}
            >
              Zarejestruj się
            </button>
          </form>
          <p className="register-page__login-link">
            Masz konto? <a href="/login">Zaloguj się</a>
          </p>
        </div>
        <div className="register-page__footer">
          <div className="register-page__footer-links">
            <a href="#">Polityka prywatności</a>
            <span>•</span>
            <a href="#">Polityka plików cookie</a>
            <span>•</span>
            <a href="#">Zasady i warunki</a>
            <span>•</span>
            <a href="#">Wsparcie</a>
          </div>
          <p className="register-page__copyright">© 2025 Cascade_</p>
        </div>
      </div>
      {/* Right Side - Image */}
      <div className="register-page__hero-section">
        <img
          src="/assets/images/Login-Register-illustration.svg"
          alt="Register illustration"
          className="register-page__hero-image"
        />
      </div>
    </div>
  );
}

export default Register;
