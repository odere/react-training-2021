import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Auth } from './pages/auth';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Shop } from './pages/shop';
import { Header } from './components/header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/shop" component={Shop} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
