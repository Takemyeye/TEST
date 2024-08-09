import React from 'react';
import { Card } from "./pricingCard";
import useIntersectionObserver from '../../useIntersectionObserver';

export function CardUnit() {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div 
      className={`pricing-container ${isVisible ? 'is-visible' : ''}`} 
      ref={elementRef}
    >
      <div className="leftCard">
        <Card
          title="Starter Plan"
          price="Free"
          t3="Forever"
          info="Dictas scaevola democritum cu his magna abhorreant."
          btn="whitebtn"
        />
      </div>
      <Card
        title="Enterprise Plan"
        price="$18.00"
        t3="Month"
        info="Dictas scaevola democritum cu his, magna abhorrent dissentias utDictas scaevola democritum cu his."
        btn="startbtn"
      />
      <div className="rightCard">
        <Card
          title="Unlimeted Plan"
          price="$42.00"
          t3="Month"
          info="Dictas scaevola democritum cu his magna abhorreant."
          btn="whitebtn"
        />
      </div>
    </div>
  );
}
