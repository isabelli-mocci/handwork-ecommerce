import { useRef } from 'react';

export function usePopAnimation(className = 'pop-animation') {
  const ref = useRef<HTMLSpanElement>(null);

  function trigger() {
    if (ref.current) {
      ref.current.classList.remove(className);
      void ref.current.offsetWidth;
      ref.current.classList.add(className);
    }
  }

  return [ref, trigger] as const;
}
