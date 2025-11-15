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
        pinSpacing: true, // ZMIANA NA TRUE
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=400%',
          scrub: 1,
        }
      });

      tl.to(heading, { opacity: 0, duration: 1, ease: 'none' }, 0);

      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      const cardStartPositions = [
        { x: -800, y: -500 }, { x: -900, y: 600 },
        { x: 900, y: -500 }, { x: 900, y: 600 }
      ];

      cards.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        const moveX = viewportCenterX - cardCenterX;
        const moveY = viewportCenterY - cardCenterY;
        const startPos = cardStartPositions[index];
        tl.fromTo(card,
          { x: startPos.x, y: startPos.y },
          { x: moveX, y: moveY, duration: 0.8, ease: 'power2.out', delay: 0.2 },
          index * 0.1
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
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
  );
}

export default Section1;
