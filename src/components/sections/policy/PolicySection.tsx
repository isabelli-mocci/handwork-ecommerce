import { useRef } from 'react';
import useLazyVisibility from '../../../hooks/useLazyVisibility';
import type { ReactNode } from 'react';
import type { PolicySection } from '../../../data/privacyPolicy.data';

export const LazySection = ({ children, id }: { children: ReactNode; id: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useLazyVisibility<HTMLDivElement>(ref);
  return (
    <div ref={ref} id={id}>
      {isVisible ? children : null}
    </div>
  );
};

export const Section = ({ section }: { section: PolicySection }) => {
  const headingId = `heading-${section.heading.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <section
      tabIndex={0}
      aria-labelledby={headingId}
      className="outline-none"
    >
      <h2
        className="text-sm md:text-lg lg:text-xl font-medium text-text mt-8 mb-6"
        id={headingId}
      >
        {section.heading}
      </h2>
      {section.content.map((text, i) => (
        <p key={i} className="mb-5 last:mb-0">
          {text}
        </p>
      ))}
      {section.list && (
        <ul className="list-disc list-inside ml-4 space-y-3 mb-5">
          {section.list.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )}
      {section.content2 &&
        section.content2.map((text, k) => (
          <p key={k} className="mb-5 last:mb-0 indent-8">
            {text}
          </p>
        ))}
    </section>
  );
};
