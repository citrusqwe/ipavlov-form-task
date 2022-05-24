import React from 'react';
import Input from './Input';

interface FormInputProps {
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string;
  pattern?: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  type,
  errorMessage,
  pattern,
  onInputChange,
  value,
  required,
}) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => setFocused(true);

  return (
    <label htmlFor={name} className="form__label">
      <Input
        className="form__input"
        name={name}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        onChange={onInputChange}
        value={value}
        required={required}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="error">{errorMessage}</span>
    </label>
  );
};

export default FormInput;
