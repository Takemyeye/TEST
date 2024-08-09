import React from 'react';
import { CardUnit } from "./component/pricingUnit/cardUnit";
import useIntersectionObserver from './useIntersectionObserver';
import "./styles/pricing.css";

export function Pricing() {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="pricing" ref={elementRef}>
      <div className={`pricing-block ${isVisible ? 'is-visible' : ''}`}>
        <h1>Pricing</h1>
        <div className="t1">
          Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.
        </div>
      </div>
      <CardUnit/>
    </div>
  );
}
