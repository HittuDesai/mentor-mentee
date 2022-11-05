import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAW3gml6eGpECgcB8UEEepEk6TnR4gDZ98",
	authDomain: "mentor-mentee-aa29a.firebaseapp.com",
	projectId: "mentor-mentee-aa29a",
	storageBucket: "mentor-mentee-aa29a.appspot.com",
	messagingSenderId: "482117040885",
	appId: "1:482117040885:web:19841409be34727f5963bc",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage();

export { app, auth, db, storage };
