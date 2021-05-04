import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useHistory } from 'react-router-dom';

import firebase, {
  createUserProfileDocument,
  createUserWithEmailAndPassword,
} from '../../../firebase';
import { SignUpState } from './types';
import { LoginProps } from '../types';
import { CustomButton } from '../../../components/custom-button';
import { FormInput } from '../../../components/form-input';
import { defaultState } from './constants';

import './styles.scss';

export const SignUp: React.FC<LoginProps> = (props) => {
  const { setShowSignUp } = props;
  const [credentials, setCredentials] = useState<SignUpState>(defaultState);
  const { displayName, email, password, confirmPassword } = credentials;
  const history = useHistory();

  const redirectHome = (
    userCredential: firebase.auth.UserCredential | null
  ) => {
    if (userCredential) {
      history.push('/');
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ): Promise<void> => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredential) {
        const { user } = userCredential;
        await createUserProfileDocument(user, { displayName, email });

        setCredentials(defaultState);

        redirectHome(userCredential);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const handleGoToSignIn: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    setShowSignUp(true);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    const { value, name } = event.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2>SIGN UP</h2>
      <p>
        <b>I do not have a account</b>
      </p>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
        <CustomButton
          className="transparent"
          type="button"
          onClick={handleGoToSignIn}
        >
          BACK TO SIGN IN
        </CustomButton>
      </form>
    </div>
  );
};
