import React from 'react';

import { Directory } from '../../components/directory';
import { productsData } from './constants';

import './styles.scss';

export const Home = () => (
  <div className="homepage">
    <Directory data={productsData} />
  </div>
);
