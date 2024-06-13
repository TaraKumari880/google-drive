import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDKSXA2NdLJLT6najEeAKuzbyS2LiXYmqY",
    authDomain: "drive-clone-project-59e27.firebaseapp.com",
    projectId: "drive-clone-project-59e27",
    storageBucket: "drive-clone-project-59e27.appspot.com",
    messagingSenderId: "110521997180",
    appId: "1:110521997180:web:5029cf71b749002820f6f9"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const storage=firebase.storage();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export{db,storage,auth,provider}


