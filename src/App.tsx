import React, { useEffect, useState } from 'react';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import Video from './components/Video';

function App() {

  const config = {
    apiKey: "AIzaSyB376x4XGMwBAJ-n5Ov4It4VRShv6-MCBE",
    authDomain: "omardonatobassani-c3633.firebaseapp.com",
    projectId: "omardonatobassani-c3633",
    storageBucket: "omardonatobassani-c3633.appspot.com",
    messagingSenderId: "679823851464",
    appId: "1:679823851464:web:8ab1dadb7b48044aeb0afd",
    measurementId: "G-8DNJHR1WQ6"
  };

  const app = initializeApp(config);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const storageRef = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/omardonatobassani-c3633.appspot.com/o/entrevista1.mp4?alt=media&token=647dee36-4248-42cb-bab8-dbbac67aa237');
    getDownloadURL(storageRef)
      .then(url => {
        setVideoUrl(url);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Video  />
    </div>
  );
}

export default App;
