/* eslint-disable import/no-duplicates */
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import './init-fire-base';

export { createUserProfileDocument } from './fire-store/create-user-profile-document';
export { signInWithGoogle } from './auth/google-auth';
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './auth/email-password-auth';

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
