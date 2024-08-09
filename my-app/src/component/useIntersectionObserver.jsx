import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = ({ threshold = 0.1, root = null, rootMargin = '0%', freezeOnceVisible = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (freezeOnceVisible) {
            observer.unobserve(elementRef.current);
          }
        } else {
          setIsVisible(false);
        }
      },
      {
        root,
        rootMargin,
        threshold
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, root, rootMargin, threshold, freezeOnceVisible]);

  return [elementRef, isVisible];
};

export default useIntersectionObserver;
