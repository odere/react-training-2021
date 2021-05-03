import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { NotFound } from './pages/not-found';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
