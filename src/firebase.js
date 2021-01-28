// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFGZikqy4NQu5szBJ9Nvha09DOT5I13SI",
    authDomain: "facebook-clone-38edc.firebaseapp.com",
    projectId: "facebook-clone-38edc",
    storageBucket: "facebook-clone-38edc.appspot.com",
    messagingSenderId: "642544815460",
    appId: "1:642544815460:web:1f32ece472110064c23e71",
    measurementId: "G-VEZVMXF820"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;