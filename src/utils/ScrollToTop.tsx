import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const selectors = [
      'main',
      '.container',
      '.min-h-screen',
      '.flex-grow',
      '[data-scroll]',
    ];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (el.scrollTop !== undefined) el.scrollTop = 0;
      });
    });

    document.querySelectorAll('*').forEach(el => {
      const style = window.getComputedStyle(el);
      if (
        (style.overflow === 'auto' ||
          style.overflow === 'scroll' ||
          style.overflowY === 'auto' ||
          style.overflowY === 'scroll') &&
        el.scrollTop !== undefined
      ) {
        el.scrollTop = 0;
      }
    });

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
