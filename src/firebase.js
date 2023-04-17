import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCM4ZEiZUEH-oHgIp0VIwBqmX3Onb2SBcE",
    authDomain: "fir-auth-c4a8e.firebaseapp.com",
    projectId: "fir-auth-c4a8e",
    storageBucket: "fir-auth-c4a8e.appspot.com",
    messagingSenderId: "713539731108",
    appId: "1:713539731108:web:27b91a1598d476d50ef031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;