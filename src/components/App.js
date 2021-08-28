import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";


// import * as firebase from "firebase";
// const firebaseConfig = {
//  apiKey: "AIzaSyDAKGiyRm6kQAgbupD9C6F48MR-stnNODE",
//  authDomain: "todo-app-milestep.firebaseapp.com",
//  databaseURL: "https://todo-app-milestep-default-rtdb.firebaseio.com",
//  projectId: "todo-app-milestep",
//  storageBucket: "todo-app-milestep.appspot.com",
//  messagingSenderId: "313851717003",
//  appId: "1:313851717003:web:5865ab81c8e571b79ffb8e",
// };
// firebase.initializeApp(firebaseConfig);


const App = () => {
   
 return (
  <>
   <Header/>
   <Main/>
  </>
 );
};

export default App;
