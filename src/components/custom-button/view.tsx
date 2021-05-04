import React from 'react';

import { CustomButtonProps } from './types';

import './styles.scss';

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { children, className, type, onClick } = props;

  return (
    <button
      className={`custom-button ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

CustomButton.defaultProps = {
  type: 'button',
};
