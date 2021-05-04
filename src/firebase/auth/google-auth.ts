import firebase from 'firebase/app';

export const signInWithGoogle =
  async (): Promise<firebase.auth.UserCredential | null> => {
    let userCredential = null;

    const setupGoogleAuthProvider = () => {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

      googleAuthProvider.addScope(
        'https://www.googleapis.com/auth/contacts.readonly'
      );
      googleAuthProvider.setCustomParameters({
        login_hint: 'user@example.com',
      });
      googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

      return googleAuthProvider;
    };

    try {
      const googleAuthProvider = setupGoogleAuthProvider();
      userCredential = await firebase
        .auth()
        .signInWithPopup(googleAuthProvider);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    return userCredential;
  };
