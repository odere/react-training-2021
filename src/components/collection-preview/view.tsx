import React from 'react';

import { CollectionItem } from '../collection-item';
import { CollectionPreviewProps } from './types';

import './styles.scss';

export const CollectionPreview: React.FC<CollectionPreviewProps> = (props) => {
  const { items, itemsOffset, title } = props;

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, itemsOffset).map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...{ id, ...otherItemProps }} />
        ))}
      </div>
    </div>
  );
};

CollectionPreview.defaultProps = {
  itemsOffset: 1,
};
