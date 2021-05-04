import firebase from 'firebase/app';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential | null> => {
  let userCredential = null;

  try {
    userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return userCredential;
};

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential | null> => {
  let userCredential = null;

  try {
    userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return userCredential;
};
