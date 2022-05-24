import React from 'react';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  focused?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} />;
};

export default Input;
