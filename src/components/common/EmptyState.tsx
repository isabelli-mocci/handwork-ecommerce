import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  buttonText,
  onButtonClick
}) => (
  <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
    <h2 className="font-cardo text-primary text-2xl md:text-3xl mb-4">{title}</h2>
    <p className="text-text/70 mb-8">{description}</p>
    <button
      onClick={onButtonClick}
      className="text-sm px-8 py-4 bg-brown-800 text-white hover:bg-brown-900 transition-colors"
    >
      {buttonText}
    </button>
  </div>
);
