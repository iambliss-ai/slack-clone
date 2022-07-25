import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyADC6qZCu_Q1bTP6DI4VxU9_t7aF5ouXXo",
    authDomain: "stack-clone-2fc01.firebaseapp.com",
    projectId: "stack-clone-2fc01",
    storageBucket: "stack-clone-2fc01.appspot.com",
    messagingSenderId: "544280509195",
    appId: "1:544280509195:web:37f83e4435bb2337cf800e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  export {auth};
  export default db;