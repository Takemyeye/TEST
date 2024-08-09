import React from 'react';
import { ModernSvg } from "./component/modernsvg";
import { Back } from "./component/back";
import { Text } from "./component/text";
import useIntersectionObserver from './useIntersectionObserver'; // Импортируем кастомный хук
import "./styles/modern.css";

export function Modern() {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={elementRef} className={`modern fade-in-section ${isVisible ? 'is-visible' : ''}`}>
      <Back/>
      <Text/>
      <div className="modern-img">
        <ModernSvg/>
      </div>
    </div>
  );
}
