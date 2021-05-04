import React from 'react';

import { CustomButtonProps } from './types';

import './styles.scss';

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { children, type } = props;

  return (
    <button className="custom-button" type={type}>
      {children}
    </button>
  );
};

CustomButton.defaultProps = {
  type: 'button',
};
