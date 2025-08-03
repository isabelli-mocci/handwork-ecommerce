import React, { memo } from 'react';

interface FormFieldProps {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = memo(({
  type,
  id,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false
}) => (
  <div className="flex flex-col w-full">
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full h-[48px] px-3 text-base border-b border-secondary bg-transparent focus:outline-none focus:border-primary transition-colors placeholder:text-text/70 [appearance:textfield]"
      required={required}
      autoComplete="off"
    />
    {error && (
      <span className="text-xs text-red-600/65 mt-1">
        {error}
      </span>
    )}
  </div>
));

FormField.displayName = 'FormField';

export default FormField;
