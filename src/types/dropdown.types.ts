import React from 'react';

export type DropdownOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export interface DropdownProps {
  label: string;
  options: DropdownOption[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}
