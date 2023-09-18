// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export async function googleLogin() {
  return signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    return user;
  });
}


export async function googleLogout() {
  return signOut(auth)
  .then(() => null)
}


export function googleUserChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user.email);
  });
}





