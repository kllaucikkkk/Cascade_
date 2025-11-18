import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [accept, setAccept] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await api.register(email, password, name, country);

      if (result.message === 'Registration successful') {
        navigate('/login');
      } else {
        setError(result.message || 'Rejestracja nie powiodła się');
      }
    } catch (err) {
      setError('Błąd połączenia: ' + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="register-page">
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

          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          <form className="register-page__form" onSubmit={handleSubmit}>
            <div className="register-page__input-group">
              <select
                className="register-page__input"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="" disabled>Kraj</option>
                <option value="pl">Polska</option>
                <option value="de">Niemcy</option>
                <option value="gb">Wielka Brytania</option>
              </select>
            </div>

            <div className="register-page__input-group">
              <input
                type="email"
                className="register-page__input"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="register-page__input-group">
              <input
                type="password"
                className="register-page__input"
                placeholder="Hasło"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="register-page__input-group">
              <input
                type="text"
                className="register-page__input"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="register-page__input-group">
              <input
                type="tel"
                className="register-page__input"
                placeholder="Numer telefonu"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
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
                Zgadzam się z <a>Warunkami użytkowania</a> i <a>Polityką prywatności</a>
              </span>
            </label>

            <button 
              type="submit"
              className="register-page__submit-btn"
              disabled={!accept || loading}
            >
              {loading ? 'Rejestrowanie...' : 'Zarejestruj się'}
            </button>
          </form>

          <p className="register-page__login-link">
            Masz konto? <a href="/login">Zaloguj się</a>
          </p>
        </div>

        <div className="register-page__footer">
          <div className="register-page__footer-links">
            <a>Polityka prywatności</a>
            <span>•</span>
            <a>Polityka plików cookie</a>
            <span>•</span>
            <a>Zasady i warunki</a>
            <span>•</span>
            <a>Wsparcie</a>
          </div>
          <p className="register-page__copyright">© 2025 Cascade_</p>
        </div>
      </div>

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
