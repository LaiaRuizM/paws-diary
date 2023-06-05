import React, { FC } from 'react';
import { ButtonProps } from './button.interface';
import { ButtonStyles } from './button.styles';

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => (
  <ButtonStyles {...props} className={className}>
    {children}
  </ButtonStyles>
);
