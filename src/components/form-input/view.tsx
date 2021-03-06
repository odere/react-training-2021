import React from 'react';

import { FormInputProps } from './types';

import './styles.scss';

export const FormInput: React.FC<FormInputProps> = (props) => {
  const { onChange, label, ...otherProps } = props;
  const shrinkClassName = otherProps.value.length ? 'shrink' : '';

  return (
    <div className="group">
      <input
        id={label}
        className="form-input"
        onChange={onChange}
        {...otherProps}
      />
      <label className={`${shrinkClassName} form-input-label`} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

FormInput.defaultProps = {
  required: false,
};
