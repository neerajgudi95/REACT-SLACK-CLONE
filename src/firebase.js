import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_mFkR_CdSfFts6Ra6YERWTNvPG-_-aS0",
  authDomain: "slack-app-clone-7aef9.firebaseapp.com",
  databaseURL: "https://slack-app-clone-7aef9.firebaseio.com",
  projectId: "slack-app-clone-7aef9",
  storageBucket: "slack-app-clone-7aef9.appspot.com",
  messagingSenderId: "963776185116",
  appId: "1:963776185116:web:015906945eb321b13b70d9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
