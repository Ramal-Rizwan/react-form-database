import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";


const firebaseConfig = {
 
    apiKey: "AIzaSyAIfoTv4JkDZkI_YkvHigizXAMCMWhQqro",
    authDomain: "react-form-7a0e5.firebaseapp.com",
    projectId: "react-form-7a0e5",
    storageBucket: "react-form-7a0e5.appspot.com",
    messagingSenderId: "643267062453",
    appId: "1:643267062453:web:3a2ccaad46c8520fd2acfc"
  };
  const app = initializeApp(firebaseConfig);
  var db = firebaseConfig.firestore();

export { db };

 