import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardPlaceholderRef = useRef(null);
  const cardKantorRef = useRef(null);
  const cardWyslijRef = useRef(null);
  const cardWydatkiRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const heading = headingRef.current;
    const cards = [
      cardPlaceholderRef.current,
      cardKantorRef.current,
      cardWyslijRef.current,
      cardWydatkiRef.current
    ];

    if (!section || !container || !heading || cards.some(c => !c)) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=400%',
        pin: container,
        pinSpacing: true
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=400%',
          scrub: 1
        }
      });

      // Nagłówek znika
      tl.to(heading, { opacity: 0, duration: 1, ease: 'none' }, 0);

      // Start pozycje kart (z krawędzi ekranu)
      const cardStartPositions = [
        { x: -800, y: -500 },  // placeholder - lewo góra
        { x: -900, y: 600 },   // kantor - lewo dół
        { x: 900, y: -500 },   // wyslij - prawo góra
        { x: 900, y: 600 }     // wydatki - prawo dół
      ];

      // Animuj karty do centrum (x: 0, y: 0 = dokładny center)
      cards.forEach((card, index) => {
        if (!card) return;

        tl.fromTo(
          card,
          {
            x: cardStartPositions[index].x,
            y: cardStartPositions[index].y,
            scale: 0.8,
            opacity: 0
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out'
          },
          index * 0.15
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Sekcja animowana */}
      <section ref={sectionRef} className="section-1">
        <div ref={containerRef} className="section-1__container">
          <h2 ref={headingRef} className="section-1__heading">
            <span className="heading-black">Finanse w</span>
            <span className="heading-red"> jednym miejscu</span>
          </h2>
          <div ref={cardPlaceholderRef} className="section-1__card section-1__card--placeholder">
            <img src="/assets/images/card-placeholder.svg" alt="Card Placeholder" className="card-image" />
          </div>
          <div ref={cardKantorRef} className="section-1__card section-1__card--kantor">
            <img src="/assets/images/card-kantor.svg" alt="Kantor Card" className="card-image" />
          </div>
          <div ref={cardWyslijRef} className="section-1__card section-1__card--wyslij">
            <img src="/assets/images/card-wyslij.svg" alt="Wyślij Card" className="card-image" />
          </div>
          <div ref={cardWydatkiRef} className="section-1__card section-1__card--wydatki">
            <img src="/assets/images/card-wydatki.svg" alt="Wydatki Card" className="card-image" />
          </div>
        </div>
      </section>

      {/* Statyczna sekcja pod animacją */}
      <section className="section-1-static">
        <div className="section-1-static__inner">
          <div className="section-1-static__text">
            <h2 className="section-1-static__heading">
              Zobacz pełny obraz<br />swoich pieniędzy
            </h2>
            <p className="section-1-static__subtitle">
              Konta, wydatki i cele finansowe w jednym przejrzystym panelu.
            </p>
          </div>
          <div className="section-1-static__cards">
            <div className="section-1-static__card" />
            <div className="section-1-static__card" />
            <div className="section-1-static__card" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
