import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NotFound = () => {
  const location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>

      <Link to="/">Home</Link>
    </div>
  );
};
