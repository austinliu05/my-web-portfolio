// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";

// Your web app's Firebase configuration
const firebase_config = {
    apiKey: "AIzaSyDxosZpnor6IqG5K79acJlQ40_luzy-ibs",
    authDomain: "website-84a2e.firebaseapp.com",
    projectId: "website-84a2e",
    storageBucket: "website-84a2e.appspot.com",
    messagingSenderId: "813261542512",
    appId: "1:813261542512:web:26c3a7f0d37394e96f50b5",
    measurementId: "G-Y3F61TNPWC"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebase_config);
const database: Database = getDatabase(app);

export { app, database };
