// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsn1Cqnrnx7Yhp_Bb4vkSrQ7AnCSURGOE",
  authDomain: "fir-42c3b.firebaseapp.com",
  databaseURL: "https://fir-42c3b-default-rtdb.firebaseio.com",
  projectId: "fir-42c3b",
  storageBucket: "fir-42c3b.appspot.com",
  messagingSenderId: "790574754725",
  appId: "1:790574754725:web:0b7dfb67f04f5806b2564c",
  measurementId: "G-WJCF2VWL6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase } from "firebase/database";

const database = getDatabase();

fetch('https://fir-42c3b-default-rtdb.firebaseio.com.json')

    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);

        });
    })

    .catch(function (err) {
        console.log(err);
    });