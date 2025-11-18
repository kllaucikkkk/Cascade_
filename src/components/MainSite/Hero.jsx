import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ContainerTextFlip } from '../ui/ContainerTextFlip';
import { BackgroundGradientAnimation } from '../ui/BackgroundGradientAnimation';

function Hero() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const elements = [logoRef.current, headingRef.current];
    if (elements.some(el => !el)) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(
      headingRef.current.querySelectorAll('.heading-line'),  // ZMIENIONE - animuj .heading-line zamiast .children
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
      '-=0.5'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(226, 86, 131)"
      gradientBackgroundEnd="rgb(246, 185, 162)"
      firstColor="226, 86, 131"
      secondColor="246, 185, 162"
      thirdColor="255, 200, 200"
      fourthColor="226, 86, 131"
      fifthColor="246, 185, 162"
      pointerColor="226, 86, 131"
      size="80%"
      blendingValue="hard-light"
      interactive={true}
      containerClassName="hero-cascade"
    >
      <section ref={heroRef} className="hero-cascade__section">
        <div className="hero-cascade__container">
          <div ref={logoRef} className="hero-cascade__logo">
            Cascade_
          </div>

          <div className="hero-cascade__actions">
            <button 
              className="hero-cascade__btn-secondary"
              onClick={() => navigate('/login')}
            >
              Zaloguj się
            </button>
            <button 
              className="hero-cascade__btn-primary"
              onClick={() => navigate('/register')}
            >
              Zarejestruj się
            </button>
          </div>

          <h1 ref={headingRef} className="hero-cascade__heading">
            <span className="heading-line">
              <span className="word light">Zarządzaj</span>
              <ContainerTextFlip 
                words={['pieniędzmi', 'budżetem', 'oszczędnościami']}
                interval={3000}
                animationDuration={700}
              />
            </span>
            <span className="heading-line">
              <span className="word bold">Płynnie</span> <span className="word light">i</span> <span className="word">bezpiecznie</span><span className="word light">.</span>
            </span>
          </h1>
        </div>
      </section>
    </BackgroundGradientAnimation>
  );
}

export default Hero;
