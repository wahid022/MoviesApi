import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavBar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <div>
      <Router>
        <NavBar title="Movies Api"></NavBar>
        <Main></Main>
      
      </Router>
      
    </div>
  );
}

export default App;
