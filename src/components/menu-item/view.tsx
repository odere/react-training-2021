import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { MenuItemProps } from './types';

import './styles.scss';

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { title, imageUrl, size, linkUrl } = props;
  const backgroundImage = `url(${imageUrl})`;
  const history = useHistory();
  const { url } = useRouteMatch();

  const onRedirect = () => {
    history.push(`${url}${linkUrl}`);
  };

  return (
    <div
      className={`${size} menu-item`}
      onClick={onRedirect}
      aria-hidden="true"
    >
      <div className="background-image" style={{ backgroundImage }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
