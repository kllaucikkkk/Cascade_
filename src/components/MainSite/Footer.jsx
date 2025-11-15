import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { 
        y: 100,
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: logoRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Navigation */}
        <div className="footer__nav">
          <div className="footer__column">
            <h3 className="footer__column-title">Zacznij tutaj</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Zarejestruj się</a></li>
              <li><a href="#" className="footer__link">Zaloguj się</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Odkryj</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Cascade_ Card</a></li>
              <li><a href="#" className="footer__link">Opłaty</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Firma</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">O nas</a></li>
              <li><a href="#" className="footer__link">Newsroom</a></li>
              <li><a href="#" className="footer__link">Współpraca</a></li>
              <li><a href="#" className="footer__link">Dla mediów</a></li>
              <li><a href="#" className="footer__link">Promocje</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Polityki</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">Polityka cookies</a></li>
              <li><a href="#" className="footer__link">Polityka prywatności</a></li>
              <li><a href="#" className="footer__link">Warunki użytkowania</a></li>
              <li><a href="#" className="footer__link">Zastrzeżenia</a></li>
              <li><a href="#" className="footer__link">Polityka AML</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__column-title">Pomoc</h3>
            <ul className="footer__links">
              <li><a href="#" className="footer__link">FAQ</a></li>
              <li><a href="#" className="footer__link">Wsparcie techniczne</a></li>
              <li><a href="#" className="footer__link">Informacja o wydaniu</a></li>
            </ul>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="footer__app-buttons">
          <button className="footer__app-btn footer__app-btn--apple">
            <span>Download on the App Store</span>
          </button>
          <button className="footer__app-btn footer__app-btn--google">
            <span>Get it on Google Play</span>
          </button>
        </div>

        {/* Logo Section with GSAP Animation */}
        <div className="footer__logo-section" ref={logoRef}>
          <div className="footer__logo">
            Cascade
            <span className="footer__logo-underline"></span>
          </div>
          
          <p className="footer__disclaimer">
            Cascade_ to fikcyjna aplikacja przygotowana wyłącznie w celach projektowych i demonstracyjnych.<br />
            Platforma nie świadczy usług płatniczych, nie prowadzi rachunków bankowych i nie odpowiada za<br />
            jakiekolwiek transakcje finansowe. Wszystkie dane i operacje mają charakter symulacji.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            Projekt i realizacja: Wiktor Kłosowski - listopad, 2025.<br/>PS: We <span className="footer__heart">💙</span> Edunitly
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
