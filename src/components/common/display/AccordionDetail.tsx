import React, { useState, useCallback } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

export type AccordionDetailProps = {
  label: string;
  content: string | string[];
  initialOpen?: boolean;
  icon?: React.ReactNode;
};

const AccordionDetail: React.FC<AccordionDetailProps> = React.memo(
  ({ label, content, initialOpen = false, icon }) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const toggleAccordion = useCallback(() => setIsOpen((open) => !open), []);
    return (
      <section className="py-2 border-b-2 border-secondary">
        <button
          className="flex justify-between items-center w-full text-left focus:outline-none px-0 py-2 transition-colors duration-200 hover:bg-brown-50 rounded"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          type="button"
        >
          <span className="font-semibold text-text text-base flex items-center gap-2">
            {icon}
            {label}
          </span>
          <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? <IoChevronUp className="text-gray-600" /> : <IoChevronDown className="text-gray-600" />}
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 py-2' : 'grid-rows-[0fr] opacity-0 py-0'} overflow-hidden ml-0.5`}
        >
          <div className="min-h-0">
            {Array.isArray(content)
              ? content.map((paragraph, i) => (
                  <p key={i} className="text-text/70 text-base mt-1">{paragraph}</p>
                ))
              : <p className="text-text/70 text-base mt-1">{content}</p>
            }
          </div>
        </div>
      </section>
    );
  }
);

export default AccordionDetail;
