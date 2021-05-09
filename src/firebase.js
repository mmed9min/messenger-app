import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyACECc78fHI5yIsIPtQQdaWakMet7jen3k",
    authDomain: "messenger-app-d6be4.firebaseapp.com",
    databaseURL: "https://messenger-app-d6be4-default-rtdb.firebaseio.com",
    projectId: "messenger-app-d6be4",
    storageBucket: "messenger-app-d6be4.appspot.com",
    messagingSenderId: "718553305535",
    appId: "1:718553305535:web:d55b0368babb181bb2910a",
    measurementId: "G-N21ST83Y3K"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;