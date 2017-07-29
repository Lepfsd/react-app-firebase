import React from 'react';  
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCF_HiytKhGAnkD6SnYj4LQT1Xv6L9Rjys",
    authDomain: "create-react-app1.firebaseapp.com",
    databaseURL: "https://create-react-app1.firebaseio.com",
    projectId: "create-react-app1",
    storageBucket: "",
    messagingSenderId: "210364614061"
  };
  firebase.initializeApp(config);
  const database = firebase.database();
  const platillos = database.ref('platillos/');
  const bebidas = database.ref('bebidas/');
  const datos = {platillos, bebidas};

export default datos;