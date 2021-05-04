import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from './pages/login';
import { Home } from './pages/home';
import { NotFound } from './pages/not-found';
import { Shop } from './pages/shop';
import { Header } from './components/header';
import firebase, { auth, createUserProfileDocument } from './firebase';
import { User, UserData } from './types';

type FireBaseUser = firebase.User;

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const firebaseUnsubscribe = auth.onAuthStateChanged(
      async (fireBaseUser: FireBaseUser | null) => {
        const userRef = await createUserProfileDocument(fireBaseUser);

        if (userRef) {
          userRef.onSnapshot((snapShot) => {
            const data: UserData = snapShot.data() as UserData;
            const { createdAt, displayName, email } = data;
            setUser({ id: snapShot.id, createdAt, displayName, email });
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      firebaseUnsubscribe();
    };
  }, []);

  return (
    <>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Login} />
        <Route exact path="/shop" component={Shop} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
