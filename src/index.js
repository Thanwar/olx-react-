import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxCNmJeug3WlruvQZ4eRJW2BOLV2umW2E",
  authDomain: "abi-olx.firebaseapp.com",
  databaseURL: "https://abi-olx.firebaseio.com",
  projectId: "abi-olx",
  storageBucket: "abi-olx.appspot.com",
  messagingSenderId: "69720865612",
  appId: "1:69720865612:web:f3dbd0d054255696f16de9"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
