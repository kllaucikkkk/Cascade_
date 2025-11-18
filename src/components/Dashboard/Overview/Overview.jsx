import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Topbar from '../MainElements/Topbar';
import api from '../../../config/api';

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
  const [selectedFilter, setSelectedFilter] = useState('all-accounts');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const innerCardRef = useRef(null);
  const bg1Ref = useRef(null);
  const bg2Ref = useRef(null);

  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
    playCardAnimation();
  };

  const playCardAnimation = () => {
    const tl = gsap.timeline();

    tl.to(bg1Ref.current, {
      y: -30,
      scale: 1.08,
      opacity: 0.4,
      duration: 0.6,
      ease: 'power2.inOut',
    }, 0)
      .to(bg2Ref.current, {
        y: -15,
        scale: 1.04,
        opacity: 0.6,
        duration: 0.6,
        ease: 'power2.inOut',
      }, 0)
      .to(innerCardRef.current, {
        y: -5,
        duration: 0.6,
        ease: 'power2.inOut',
      }, 0);

    setTimeout(() => {
      tl.to(bg1Ref.current, {
        y: 0,
        scale: 1,
        opacity: 0.5,
        duration: 0.5,
        ease: 'power2.inOut',
      })
        .to(bg2Ref.current, {
          y: 0,
          scale: 1,
          opacity: 0.7,
          duration: 0.5,
          ease: 'power2.inOut',
        }, '<')
        .to(innerCardRef.current, {
          y: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        }, '<');
    }, 600);
  };

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const result = await api.getDashboard();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <p>Ładowanie...</p>;
  if (!data) return <p>Błąd ładowania danych.</p>;

  return (
    <>
      <Topbar />
      <div className="overview-content">
        <div className="overview-main">
          <div className="balance-card">
            <div className="balance-card__header">
              <h2 className="balance-card__title">Przegląd</h2>
              <div className="balance-card__filters">
                <button
                  className={`balance-card__filter-btn ${selectedFilter === 'all-accounts' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('all-accounts')}
                >
                  Wszystkie konta
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  className={`balance-card__filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('all')}
                >
                  Wszystko
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="balance-card__inner-wrapper">
              <div ref={bg1Ref} className="balance-card__inner-bg bg1"></div>
              <div ref={bg2Ref} className="balance-card__inner-bg bg2"></div>
              <div ref={innerCardRef} className="balance-card__inner">
                <div className="balance-card__amount-section">
                  <span className="balance-card__label">Całkowite saldo</span>
                  <p className="balance-card__amount">{data.totalBalance || '0,00'} PLN</p>
                </div>
                <div className="balance-card__actions">
                  <button className="balance-card__action-btn">
                    <span className="balance-card__action-icon">+</span>
                    Depozyt
                  </button>
                  <button className="balance-card__action-btn">
                    <span className="balance-card__action-icon">↑</span>
                    Wyślij
                  </button>
                  <button className="balance-card__action-btn">
                    <span className="balance-card__action-icon">↔</span>
                    Wymiana
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="transactions-card">
            <h2 className="transactions-card__title">Ostatnie transakcje</h2>
            <div className="transactions-card__empty">
              <p className="transactions-card__empty-title">
                Twoje ostatnie transakcje pojawią się tutaj!
              </p>
              <p className="transactions-card__empty-text">
                Nie masz jeszcze żadnych transakcji. Możesz zacząć od pierwszych, wpłacając{' '}
                <a href="#" className="transactions-card__link">Depozyt</a>.
              </p>
            </div>
          </div>
        </div>

        <aside className="overview-sidebar">
          <div className="image-placeholder">
            <img
              src="/assets/images/last-activity-component.svg"
              alt="Last Activity Component"
              className="image-placeholder__img"
            />
          </div>

          <div className="goals-placeholder">
            <img
              src="/assets/images/goals-component.svg"
              alt="Goals Component"
              className="goals-placeholder__img"
            />
          </div>
        </aside>
      </div>
    </>
  );
};

export default Overview;
