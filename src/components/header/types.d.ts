import { ChangeEventHandler } from 'react';

export interface FormInputProps {
  name: string;
  type: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  required?: boolean;
}
