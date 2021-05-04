import React from 'react';

import { Directory } from '../../components/directory';
import { productsData } from './constants';

export const Home = () => (
  <div className="homepage container">
    <Directory data={productsData} />
  </div>
);
