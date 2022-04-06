import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from '../src/features/store'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCooaZMh2FO_6uGteqBsDt3ZAQTqWufKHw",
  authDomain: "myprivatechef-finalproject.firebaseapp.com",
  projectId: "myprivatechef-finalproject",
  storageBucket: "myprivatechef-finalproject.appspot.com",
  messagingSenderId: "211949410515",
  appId: "1:211949410515:web:5b4bbb37a1f4ccc5fb5c26",
  measurementId: "G-S1GE1XHLZY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
}