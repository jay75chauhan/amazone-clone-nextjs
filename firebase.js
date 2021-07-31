import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuacehN_IYvn603x4eQDRy-fpcMyNyMsI",
  authDomain: "e-clone-nextjs.firebaseapp.com",
  projectId: "e-clone-nextjs",
  storageBucket: "e-clone-nextjs.appspot.com",
  messagingSenderId: "135193693178",
  appId: "1:135193693178:web:b889daac2d5ec30ff0b243",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();
