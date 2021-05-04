import React from 'react';

import { CollectionItemProps } from './types';

import './styles.scss';

export const CollectionItem: React.FC<CollectionItemProps> = (props) => {
  const { title, price, imageUrl } = props;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{title}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};
