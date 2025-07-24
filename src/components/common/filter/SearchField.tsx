import React from 'react';
import { INPUT_CLASS } from '../../../styles/input.styles';

interface SearchFieldProps {
  value: string;
  onChange: (v: string) => void;
  id?: string;
  placeholder?: string;
  className?: string;
}

const SearchField: React.FC<SearchFieldProps> = ({ value, onChange, id = 'search', placeholder = 'Search products...', className }) => (
  <input
    id={id}
    type='text'
    placeholder={placeholder}
    className={className || INPUT_CLASS}
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

export default SearchField;
