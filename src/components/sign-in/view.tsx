import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { AuthState } from './types';
import { CustomButton } from '../custom-button';
import { FormInput } from '../form-input';
import { defaultState } from './constants';

import './styles.scss';

export const SignIn = () => {
  const [credentials, setCredentials] = useState<AuthState>(defaultState);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setCredentials(defaultState);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value, name } = event.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={credentials.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={credentials.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit">Sign in</CustomButton>
      </form>
    </div>
  );
};
