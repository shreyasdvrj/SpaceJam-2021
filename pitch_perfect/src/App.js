import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/Home';
import UserSignup from './components/user/Signup'
import UserLogin from './components/user/Login'

function App() {

  return (
    <div className="App">
      {
        <UserSignup/>     
      }
    </div>
  );
}

export default App;
