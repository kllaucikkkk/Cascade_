import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Hero() {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const elements = [logoRef.current, headingRef.current, subheadingRef.current, taglineRef.current, buttonRef.current];
    
    if (elements.some(el => !el)) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(headingRef.current.children,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
      '-=0.5'
    )
    .fromTo(taglineRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6 },
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-cascade">
      <div className="hero-cascade__container">
        {/* Logo */}
        <div ref={logoRef} className="hero-cascade__logo">
          Cascade_
        </div>

        {/* Language + Auth buttons - top right */}
        <div className="hero-cascade__actions">
          <button className="hero-cascade__lang-btn">
            <span className="globe-icon">🌐</span>
            <span>PL</span>
            <span className="chevron">▼</span>
          </button>
          <button className="hero-cascade__btn-secondary">Zaloguj się</button>
          <button className="hero-cascade__btn-primary">Zarejestruj się</button>
        </div>

        {/* Main heading */}
        <h1 ref={headingRef} className="hero-cascade__heading">
          <span className="heading-line"><span className="heading-highlight">Zarządzaj</span> pieniędzmi.</span>
          <span className="heading-line">Płynnie <span className="heading-highlight">i</span> bezpiecznie<span className="heading-highlight">.</span></span>
        </h1>

        {/* Tagline - right side */}
        <p ref={taglineRef} className="hero-cascade__tagline">
          Jedna aplikacja do<br />
          wszystkich Twoich<br />
          finansów.
        </p>

        {/* CTA Button - bottom left */}
        <button ref={buttonRef} className="hero-cascade__cta">
          <span className="lock-icon">🔒</span>
          <span>Przesuń w dół</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
