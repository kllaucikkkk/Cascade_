import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();
  
  const [activeSection, setActiveSection] = useState('profile');
  const [personalData, setPersonalData] = useState({
    name: 'Jan Kowalski',
    email: 'jan@example.com',
    phone: '+48 123 456 789'
  });
  
  const [security, setSecurity] = useState({
    password: '••••••••',
    twoFactor: false,
    method2FA: 'Nie ustawiono',
    phone: '+48 123 456 789'
  });

  const sections = {
    profile: {
      title: 'Profile',
      items: [
        { label: 'Weryfikacja konta', desc: 'Wymagane dodatkowe dane', icon: '📋' },
        { label: 'Dane osobowe', desc: '', icon: '👤' },
        { label: 'Moje karty Cascade_', desc: '', icon: '💳' }
      ]
    },
    security: {
      title: 'Zabezpieczenia',
      items: [
        { label: 'Zmień hasło', desc: '', icon: '🔐' },
        { label: 'E-mail', desc: personalData.email, icon: '✉️' },
        { label: 'Metoda uwierzytelniania dwuetapowego', desc: 'Nie ustawiono', icon: '🔑' },
        { label: 'Numer telefonu', desc: personalData.phone, icon: '📱' }
      ]
    },
    support: {
      title: 'Pomoc techniczna',
      items: [
        { label: 'Obsługa klienta', desc: '', icon: '💬' }
      ]
    },
    account: {
      title: 'Konto',
      items: [
        { label: 'Zamknięcie konta', desc: '', icon: '🚪' }
      ]
    }
  };

  const handleSectionClick = (sectionKey) => {
    setActiveSection(sectionKey);
  };

  const handleItemClick = (item) => {
    if (item.label === 'Zmień hasło') {
      navigate('/settings/change-password');
    } else if (item.label === 'Dane osobowe') {
      setActiveSection('personal-data');
    } else if (item.label === 'Zamknięcie konta') {
      if (confirm('⚠️ Ta akcja jest nieodwracalna. Czy na pewno chcesz usunąć konto?')) {
        alert('Konto zostało usunięte.');
        navigate('/');
      }
    }
  };

  return (
    <div className="settings-page">
      {/* Header z profilu */}
      <div className="settings-header">
        <div className="settings-header__avatar">
          <div className="settings-header__avatar-placeholder"></div>
        </div>
        <div className="settings-header__info">
          <h1 className="settings-header__name">{personalData.name}</h1>
          <p className="settings-header__id">Identyfikator klienta: unique_7_digit_id_number</p>
        </div>
      </div>

      <div className="settings-content">
        {/* Lewą kolumna - nawigacja */}
        <div className="settings-sidebar">
          {Object.entries(sections).map(([key, section]) => (
            <div key={key} className="settings-sidebar__section">
              <h3 className="settings-sidebar__title">{section.title}</h3>
              <div className="settings-sidebar__items">
                {section.items.map((item, idx) => (
                  <button
                    key={idx}
                    className="settings-sidebar__item"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="settings-sidebar__item-icon"></div>
                    <div className="settings-sidebar__item-content">
                      <span className="settings-sidebar__item-label">{item.label}</span>
                      {item.desc && <span className="settings-sidebar__item-desc">{item.desc}</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Prawa kolumna - zawartość */}
        <div className="settings-main">
          {activeSection === 'profile' && (
            <div className="settings-section-content">
              <h2>Profil użytkownika</h2>
              <p>Zarządzaj swoim profilem i danymi konta.</p>
            </div>
          )}
          
          {activeSection === 'security' && (
            <div className="settings-section-content">
              <h2>Ustawienia bezpieczeństwa</h2>
              <p>Zarządzaj hasłem i metodami uwierzytelniania.</p>
            </div>
          )}
          
          {activeSection === 'personal-data' && (
            <div className="settings-section-content">
              <h2>Dane osobowe</h2>
              <div className="settings-form">
                <div className="settings-form__group">
                  <label>Imię i nazwisko</label>
                  <input 
                    type="text" 
                    value={personalData.name}
                    onChange={(e) => setPersonalData({...personalData, name: e.target.value})}
                  />
                </div>
                <div className="settings-form__group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={personalData.email}
                    disabled
                  />
                </div>
                <div className="settings-form__group">
                  <label>Telefon</label>
                  <input 
                    type="tel" 
                    value={personalData.phone}
                    onChange={(e) => setPersonalData({...personalData, phone: e.target.value})}
                  />
                </div>
                <button className="settings-form__save">Zapisz zmiany</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
