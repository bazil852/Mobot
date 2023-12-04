import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCZD1Qx5NwZ-u7of0aClTuw9zN2dUOj5yg",
    authDomain: "lawnmower-16901.firebaseapp.com",
    databaseURL: "https://lawnmower-16901-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lawnmower-16901",
    storageBucket: "lawnmower-16901.appspot.com",
    messagingSenderId: "745372684105",
    appId: "1:745372684105:web:aaa4254a5b0e8b1b0b1498",
    measurementId: "G-SQ0RL29ZJK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app,auth, database };
