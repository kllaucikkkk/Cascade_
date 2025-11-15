import paymentMockup from '/assets/images/section3-payment-mockup.jpg';
import shoppingBag from '/assets/icons/shopping-bag.svg';
import coffee from '/assets/icons/coffee.svg';
import pizza from '/assets/icons/pizza.svg';

function Section3() {
  return (
    <section className="section-3">
      <div className="section-3__container">
        <div className="section-3__content">
          <h2 className="section-3__heading">
            Płać tak, jak<br />Ci wygodnie
          </h2>
          
          <div className="section-3__description">
            <p className="section-3__text">
              Szybkie <img src="/assets/icons/shopping-bag.svg" alt="Shopping bag icon" className="inline-emoji" /> w sklepie. 
            </p>
            <p className="section-3__text">
              <img src="/assets/icons/coffee.svg" alt="Coffee icon" className="inline-emoji" /> w ulubionej kawiarni. 
            </p>
            <p className="section-3__text">
              Włoska <img src="/assets/icons/pizza.svg" alt="Pizza icon" className="inline-emoji" /> w Mediolanie. 
            </p>
            <p className="section-3__text">
              Płać tak, jak ci wygodnie.
            </p>
            <p className="section-3__text">
              Kartą, telefonem lub kodem. 
            </p>
            <p className="section-3__text">
             <img src="/assets/logotypes/cascade_-133x35px-in-text-logo.svg" alt="Cascade_ 133x35px logotype" className="inline-logo" /> na bieżąco informuje
            </p>
            <p className="section-3__text">
            Cię o twoich wydatkach przez 
            </p>
            <p className="section-3__text">
            powiadomienia push.
            </p>
          </div>
        </div>

        <div className="section-3__image-container">
          <div className="section-3__image-placeholder">
            <img 
              src={paymentMockup} 
              alt="Powiadomienia push o płatnościach" 
              className="section-3__image"
            />
          </div>
          
          <p className="section-3__caption">
            Przejrzyste powiadomienia push
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section3;
