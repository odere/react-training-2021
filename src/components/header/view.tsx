import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderProps } from './types';
import { auth } from '../../firebase';

import './styles.scss';

export const Header: React.FC<HeaderProps> = (props) => {
  const { user } = props;

  const signOut = async () => {
    try {
      auth.signOut();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>

        <Link className="option" to="/shop">
          SHOP
        </Link>

        {!user ? (
          <Link className="option" to="/auth">
            LOG IN
          </Link>
        ) : (
          <a className="option" onClick={signOut} href="/">
            LOG OUT
          </a>
        )}
      </div>
    </div>
  );
};
