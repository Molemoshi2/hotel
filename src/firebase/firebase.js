import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5-J3Ex-HwkMmCuFN39aN_TNNEmf24-Bo",
  authDomain: "hotel-867f2.firebaseapp.com",
  projectId: "hotel-867f2",
  storageBucket: "hotel-867f2.appspot.com",
  messagingSenderId: "552891619860",
  appId: "1:552891619860:web:9d41226c024570265ea501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}
export const database = getFirestore(app)