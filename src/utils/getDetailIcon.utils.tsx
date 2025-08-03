import React from 'react';
import { PiShapesLight, PiRulerLight, PiSealWarningLight } from 'react-icons/pi';

const getDetailIcon = (label: string): React.ReactNode => {
  const lower = label.toLowerCase();
  if (lower.includes('material')) return <PiShapesLight className="inline-block text-primary mr-2 text-xl align-middle" />;
  if (lower.includes('dimension')) return <PiRulerLight className="inline-block text-primary mr-2 text-xl align-middle" />;
  if (lower.includes('care')) return <PiSealWarningLight className="inline-block text-primary mr-2 text-xl align-middle" />;
  return null;
};

export default getDetailIcon;
