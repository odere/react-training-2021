import { ChangeEventHandler } from 'react';

export interface FormInputProps {
  name: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string;
  required?: boolean;
}
