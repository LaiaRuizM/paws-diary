import React, { FC } from 'react';
import { ButtonProps } from './button.interface';

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <button {...props} className={className}>
    {children}
  </button>
);
