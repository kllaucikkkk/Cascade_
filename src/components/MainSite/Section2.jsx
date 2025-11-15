function Section2() {

  return (
    <section className="section-2">
      <div className="section-2__container">
        <div className="section-2__content">
          <h2 className="section-2__heading">
            Śledź swoje<br />
            {/* Usunięto klasę powodującą podkreślenie */}
            <span>wydatki</span>
          </h2>
          
          <p className="section-2__text">
            tutaj jakiś fajny opis tutaj jakiś fajny opis tutaj jakiś fajny opis tutaj jakiś fajny opis tutaj jakiś fajny opis tutaj jakiś fajny opis tutaj jakiś.
          </p>
        </div>

        <div className="section-2__cards">
          <div className="section-2__top-placeholder">
            <img src={"/assets/images/functions1.svg"} alt="Funkcja 1" className="section-2__placeholder-image" />
          </div>
        </div>
      </div>

      <div className="section-2__bottom-placeholder">
        <img src={"/assets/images/functions2.svg"} alt="Funkcja 2" className="section-2__placeholder-image" />
      </div>
    </section>
  );
}

export default Section2;
