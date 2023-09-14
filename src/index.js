import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz7ZIHg7y6uxOmrITXHd47etrlvkuJ-rQ",
  authDomain: "ecommerce-coder-fdc15.firebaseapp.com",
  projectId: "ecommerce-coder-fdc15",
  storageBucket: "ecommerce-coder-fdc15.appspot.com",
  messagingSenderId: "424159164987",
  appId: "1:424159164987:web:e5b1840ea33f94d872fa1e",
  measurementId: "G-DG13F9MQ0M",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
