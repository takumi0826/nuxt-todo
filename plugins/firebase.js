import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCXds2jRVWXCWznSStXNH9An7D2uoSR-b0",
    authDomain: "nuxt-todo-d252d.firebaseapp.com",
    databaseURL: "https://nuxt-todo-d252d.firebaseio.com",
    projectId: "nuxt-todo-d252d",
    storageBucket: "nuxt-todo-d252d.appspot.com",
    messagingSenderId: "352490319252",
    appId: "1:352490319252:web:c48b8e7618267508ef7381"
  });
}

export default firebase;
