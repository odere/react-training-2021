import React from 'react';

import { MenuItem } from '../menu-item';
import { DirectoryProps } from './types';

import './styles.scss';

export const Directory: React.FC<DirectoryProps> = (props) => {
  const { data } = props;

  return (
    <div className="directory-menu">
      {data.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  );
};

Directory.defaultProps = {
  data: [],
};
