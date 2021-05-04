export interface CustomButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: FormEventHandler<HTMLFormElement>;
  type?: 'submit' | 'reset' | 'button';
}
