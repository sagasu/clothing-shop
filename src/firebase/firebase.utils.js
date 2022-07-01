import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAtwx48escyOrxQaXakig32Jijk_z_BXGQ",
    authDomain: "clothing-shop-c3902.firebaseapp.com",
    databaseURL: "https://clothing-shop-c3902.firebaseio.com",
    projectId: "clothing-shop-c3902",
    storageBucket: "clothing-shop-c3902.appspot.com",
    messagingSenderId: "830471571537",
    appId: "1:830471571537:web:06482359e50edaf32c9070",
    measurementId: "G-3Y5X2C993E"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.error('error creating user', error.message);
      
    }
    
  }

  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;