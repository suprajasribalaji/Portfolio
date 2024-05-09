import "firebase/app";
import { initializeApp } from "firebase/app";

import "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyA5TF6XtH1IC3EoC9RWnJNuDIlZba2B5Gs",
  authDomain: "portfolio-e1c4f.firebaseapp.com",
  projectId: "portfolio-e1c4f",
  storageBucket: "portfolio-e1c4f.appspot.com",
  messagingSenderId: "930435699277",
  appId: "1:930435699277:web:16a9e6071f4d6fe30f8204"
});

const storage = getStorage(firebaseConfig);

export default storage;