import React, { useState } from 'react';

import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

import './styles.scss';

export const Login = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <div className="auth container">
      {showSignUp ? (
        <SignIn setShowSignUp={setShowSignUp} />
      ) : (
        <SignUp setShowSignUp={setShowSignUp} />
      )}
    </div>
  );
};
