import React from 'react';
import { PiWarningCircleFill } from 'react-icons/pi';

export interface WarningIconProps {
  className?: string;
  color?: string;
  size?: number;
  animate?: boolean;
}

const DEFAULT_CLASS = 'w-6 h-6';
const DEFAULT_COLOR = 'text-orange-500';
const DEFAULT_ANIMATE = 'animate-pulse';

const WarningIcon: React.FC<WarningIconProps> = ({
  className = '',
  color = DEFAULT_COLOR,
  size = 24,
  animate = true,
}) => {
  try {
    const classes = [DEFAULT_CLASS, color, animate ? DEFAULT_ANIMATE : '', className].filter(Boolean).join(' ');
    return <PiWarningCircleFill className={classes} size={size} />;
  } catch {
    return null;
  }
};

export default WarningIcon;
