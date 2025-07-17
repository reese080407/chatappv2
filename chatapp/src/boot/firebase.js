import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqqHsk_hn6L6AeD_-RVa8BIVpuTglVDY0",
  authDomain: "chatapp-b6dd1.firebaseapp.com",
  projectId: "chatapp-b6dd1",
  storageBucket: "chatapp-b6dd1.firebasestorage.app",
  messagingSenderId: "500267732051",
  appId: "1:500267732051:web:28263580ab00cb7d540aa6"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDatabase = firebaseApp.database()

export { firebaseAuth, firebaseDatabase };