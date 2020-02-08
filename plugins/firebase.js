import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDHcJqVzBsRE3QxIYhmleewbNT9rWmqa7M",
    authDomain: "vue-todo-71059.firebaseapp.com",
    databaseURL: "https://vue-todo-71059.firebaseio.com",
    projectId: "vue-todo-71059",
    storageBucket: "vue-todo-71059.appspot.com",
    messagingSenderId: "263859495124",
    appId: "1:263859495124:web:41f69f5b6965c023c7db41"
  });
}

export default firebase;
