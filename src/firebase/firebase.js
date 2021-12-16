import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase-config";
import {
  GoogleAuthProvider,
  getAuth,
  FacebookAuthProvider,
} from "firebase/auth";

initializeApp(getFirebaseConfig());

export const auth = getAuth();
export const googleOauthProvider = new GoogleAuthProvider();
export const fbOauthProvider = new FacebookAuthProvider();
