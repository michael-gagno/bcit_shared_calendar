// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBKmJKOPPNTHfHBgYkZfv9AA-2pdbvsK3A",
  authDomain: "bcit-calendar.firebaseapp.com",
  projectId: "bcit-calendar",
  storageBucket: "bcit-calendar.appspot.com",
  messagingSenderId: "382761997867",
  appId: "1:382761997867:web:43b0f743c0a700a8a93c6e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();