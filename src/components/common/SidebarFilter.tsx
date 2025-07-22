import React, { useState } from 'react';
import { PiSortAscendingThin } from 'react-icons/pi';
import FilterControls from './FilterControls';
import type { FilterControlsProps } from './FilterControls';

type SidebarFilterProps = FilterControlsProps;

const BUTTON_CLASS = 'hidden md:flex fixed left-6 bottom-8 z-[1001] items-center gap-2 py-2 px-4 text-base bg-white border border-gray-300 rounded shadow-md cursor-pointer';
const OVERLAY_CLASS = 'hidden md:block fixed inset-0 bg-black/30 z-[1000] transition-opacity duration-300';
const ASIDE_CLASS = 'hidden md:flex flex-col fixed top-0 left-0 h-screen w-[340px] max-w-[95vw] bg-[#f5f0ec] shadow-2xl z-[1002] overflow-y-auto p-8 pt-10 transition-all duration-300';

function openSidebar(setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  setIsOpen(true);
}

function closeSidebar(setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) {
  setIsOpen(false);
}

const SidebarFilter: React.FC<SidebarFilterProps> = props => {
  const [isOpen, setIsOpen] = useState(false);
  const asideRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSidebar(setIsOpen);
    };
    document.addEventListener('keydown', handleKeyDown);
    asideRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      <button
        className={BUTTON_CLASS}
        onClick={() => openSidebar(setIsOpen)}
        aria-label='Open filters'
      >
        <PiSortAscendingThin className='w-5 h-5 mr-2 inline-block align-middle' />
        Filters
      </button>
      {isOpen && (
        <div
          className={OVERLAY_CLASS}
          onClick={() => closeSidebar(setIsOpen)}
        />
      )}
      <aside
        ref={asideRef}
        className={
          ASIDE_CLASS +
          ' ' +
          (isOpen
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : '-translate-x-10 scale-95 opacity-0 pointer-events-none')
        }
        tabIndex={-1}
        aria-modal={isOpen}
        role='dialog'
      >
        <FilterControls {...props} />
      </aside>
    </div>
  );
};

export default SidebarFilter;
