import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './template/nav-bar';
import RouteList from './route-list';
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <RouteList />
      </Router>
    </div>
  );
}

export default App;
