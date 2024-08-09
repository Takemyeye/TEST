import React from 'react';
import useIntersectionObserver from './useIntersectionObserver'; // Импортируем кастомный хук
import "./styles/time.css";

const img = {
    phone: 'img/phone2.png'
};

export function Time() {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="time-block">
      <div className="phoneTime">
        <img src={img.phone} alt="Phone" />
      </div>
      <div 
        ref={elementRef} 
        className={`container fade-in-section ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-block">
          <h3>Save your Time</h3>
          <div className="t2">
            Dictas scaevola democritum cu his, magna abhorrent dissentias ut Dictas scaevola democritum cu his.
          </div>
        </div>
        <div className="downloadBtn">
          <div className="t3-accent">Download App</div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4167 11L4.58332 11M17.4167 11L11.9167 16.5M17.4167 11L11.9167 5.5" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
