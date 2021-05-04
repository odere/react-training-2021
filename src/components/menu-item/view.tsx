import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { MenuItemProps } from './types';

import './styles.scss';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { title, imageUrl, type } = props;
  const backgroundImage = `url(${imageUrl})`;
  const history = useHistory();
  const { url } = useRouteMatch();

  const onRedirect = () => {
    history.push(`${url}${type}`);
  };

  return (
    <div className="menu-item" onClick={onRedirect} aria-hidden="true">
      <div className="background-image" style={{ backgroundImage }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
