import React, { useState } from 'react';

import { SHOP_DATA } from './constants';
import { ProductGroup } from '../../types';
import { CollectionPreview } from '../../components/collection-preview';

export const Shop = () => {
  const [collections] = useState<ProductGroup[]>(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...{ id, itemsOffset: 4, ...otherCollectionProps }}
        />
      ))}
    </div>
  );
};
