import firebase from 'firebase/app';
import { UserData } from '../../types';

const firestore = firebase.firestore();
type DocumentReference = firebase.firestore.DocumentReference;
type FireBaseUser = firebase.User;

export const createUserProfileDocument = async (
  userAuth: FireBaseUser | null,
  additionalData?: UserData
): Promise<DocumentReference | null> => {
  if (!userAuth) return null;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  try {
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    }
  } catch (error) {
    console.log('error creating user', error.message);
  }

  return userRef;
};
