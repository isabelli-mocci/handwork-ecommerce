import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

export default function useLazyVisibility<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    try {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observer) observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
    } catch {
      setIsVisible(true);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, [ref]);

  return isVisible;
}
