import React from 'react';
import { FaCircleInfo } from 'react-icons/fa6';

export interface InfoIconProps {
  className?: string;
  color?: string;
  size?: number;
  animate?: boolean;
}

const DEFAULT_CLASS = 'w-6 h-6';
const DEFAULT_COLOR = 'text-blue-500';
const DEFAULT_ANIMATE = 'animate-pulse';

const InfoIcon: React.FC<InfoIconProps> = ({
  className = '',
  color = DEFAULT_COLOR,
  size = 24,
  animate = true,
}) => {
  try {
    const classes = [DEFAULT_CLASS, color, animate ? DEFAULT_ANIMATE : '', className].filter(Boolean).join(' ');
    return <FaCircleInfo className={classes} size={size} />;
  } catch {
    return null;
  }
};

export default InfoIcon;
