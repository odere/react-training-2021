import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useHistory } from 'react-router-dom';

import firebase, {
  signInWithEmailAndPassword,
  signInWithGoogle,
} from '../../../firebase';
import { SignInState } from './types';
import { LoginProps } from '../types';
import { CustomButton } from '../../../components/custom-button';
import { FormInput } from '../../../components/form-input';
import { defaultState } from './constants';

import './styles.scss';

export const SignIn: React.FC<LoginProps> = (props) => {
  const { setShowSignUp } = props;
  const [credentials, setCredentials] = useState<SignInState>(defaultState);
  const history = useHistory();

  const redirectHome = (
    userCredential: firebase.auth.UserCredential | null
  ) => {
    if (userCredential) {
      history.push('/');
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    const { email, password } = credentials;
    event.preventDefault();

    const userCredential = await signInWithEmailAndPassword(email, password);

    setCredentials(defaultState);

    redirectHome(userCredential);
  };

  const handleSignInWithGoogle: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const userCredential = await signInWithGoogle();

    redirectHome(userCredential);
  };

  const handleGoToSignUp: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setShowSignUp(false);
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
      <h2>SIGN IN</h2>
      <p>
        <b>I already have an account</b>
      </p>
      <p>Sign in with your email and password</p>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handleChange}
          value={credentials.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton
          type="button"
          className="google-sign-in"
          onClick={handleSignInWithGoogle}
        >
          Sign in with Google
        </CustomButton>
        <CustomButton
          className="transparent"
          type="button"
          onClick={handleGoToSignUp}
        >
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};
