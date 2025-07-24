import { useEffect, useCallback } from 'react';

export function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T | null>, handler: (event: MouseEvent) => void, active: boolean = true) {
  const memoizedHandler = useCallback(handler, [handler]);

  useEffect(() => {
    if (!active) return;
    function listener(event: MouseEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      memoizedHandler(event);
    }
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, memoizedHandler, active]);
}
